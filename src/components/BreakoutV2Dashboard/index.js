import React, { useState } from "react";
import { Upload, Button, Table, Card, Statistic, Space, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const BreakoutV4Dashboard = () => {
  const [summary, setSummary] = useState(null);
  const [results, setResults] = useState([]);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const rows = text.trim().split("\n").slice(1); // skip header
      const parsedData = rows.map((line) => {
        const [date, open, high, low, close] = line.split(",");
        return {
          date: new Date(date),
          open: parseFloat(open),
          high: parseFloat(high),
          low: parseFloat(low),
          close: parseFloat(close),
        };
      });
      message.success("CSV uploaded successfully!");
      runStrategy(parsedData);
    };
    reader.readAsText(file);
    return false;
  };

  const runStrategy = (data) => {
    // Group by day
    const grouped = data.reduce((acc, row) => {
      const day = row.date.toISOString().split("T")[0];
      if (!acc[day]) acc[day] = [];
      acc[day].push(row);
      return acc;
    }, {});

    let totalPoints = 0;
    let totalTrades = 0;
    let winTrades = 0;
    const tradeResults = [];

    Object.keys(grouped).forEach((day) => {
      const candles = grouped[day].sort((a, b) => a.date - b.date);
      if (candles.length < 2) return;

      const first = candles[0];
      const firstRange = first.high - first.low;
      const sl = firstRange;
      const target = sl * 3;

      const highCandle = candles.reduce(
        (max, c) => (c.high > max.high ? c : max),
        candles[0]
      );
      const lowCandle = candles.reduce(
        (min, c) => (c.low < min.low ? c : min),
        candles[0]
      );

      const highOfDay = highCandle.high;
      const lowOfDay = lowCandle.low;
      const highTime = highCandle.date;
      const lowTime = lowCandle.date;

      let position = null;
      let entryPrice = 0;
      let tradeResult = 0;
      let exitReason = "EOD";
      let entryTime = null;
      let targetTime = null;
      let slTime = null; // Stop loss hit time

      for (let i = 1; i < candles.length; i++) {
        const c = candles[i];
        const time = c.date.getHours() * 60 + c.date.getMinutes();

        if (time > 12 * 60 + 30) break;

        // Entry conditions
        if (!position && c.high > first.high) {
          position = "CALL";
          entryPrice = first.high;
          entryTime = c.date;
          totalTrades++;
        } else if (!position && c.low < first.low) {
          position = "PUT";
          entryPrice = first.low;
          entryTime = c.date;
          totalTrades++;
        }

        if (position) {
          if (position === "CALL") {
            if (c.high >= entryPrice + target) {
              tradeResult = target;
              exitReason = "Target";
              winTrades++;
              targetTime = c.date; // Target hit time
              break;
            } else if (c.low <= entryPrice - sl) {
              tradeResult = -sl;
              exitReason = "Stop Loss";
              slTime = c.date; // SL hit time
              break;
            }
          } else if (position === "PUT") {
            if (c.low <= entryPrice - target) {
              tradeResult = target;
              exitReason = "Target";
              winTrades++;
              targetTime = c.date; // Target hit time
              break;
            } else if (c.high >= entryPrice + sl) {
              tradeResult = -sl;
              exitReason = "Stop Loss";
              slTime = c.date; // SL hit time
              break;
            }
          }
        }
      }

      totalPoints += tradeResult;

      if (position) {
        tradeResults.push({
          day,
          position,
          entry: entryPrice,
          entryTime: entryTime ? entryTime.toLocaleTimeString() : "-",
          firstRange: firstRange.toFixed(2),
          highTime: highTime ? highTime.toLocaleTimeString() : "-",
          highPrice: highOfDay.toFixed(2),
          lowTime: lowTime ? lowTime.toLocaleTimeString() : "-",
          lowPrice: lowOfDay.toFixed(2),
          result: tradeResult.toFixed(2),
          exitReason,
          targetTime: targetTime ? targetTime.toLocaleTimeString() : "-",
          slTime: slTime ? slTime.toLocaleTimeString() : "-",
        });
      }
    });

    const netPnL = totalPoints * 75;
    const winRate = totalTrades ? ((winTrades / totalTrades) * 100).toFixed(2) : 0;

    setSummary({
      totalTrades,
      winTrades,
      winRate,
      totalPoints: totalPoints.toFixed(2),
      totalPnL: netPnL.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      }),
    });
    setResults(tradeResults);
  };

  const columns = [
    { title: "Date", dataIndex: "day", key: "day" },
    { title: "Position", dataIndex: "position", key: "position" },
    { title: "Entry", dataIndex: "entry", key: "entry" },
    { title: "Entry Time", dataIndex: "entryTime", key: "entryTime" },
    { title: "1st Candle Range", dataIndex: "firstRange", key: "firstRange" },
    { title: "High Time", dataIndex: "highTime", key: "highTime" },
    { title: "High Price", dataIndex: "highPrice", key: "highPrice" },
    { title: "Low Time", dataIndex: "lowTime", key: "lowTime" },
    { title: "Low Price", dataIndex: "lowPrice", key: "lowPrice" },
    { title: "Exit Reason", dataIndex: "exitReason", key: "exitReason" },
    { title: "Result (Pts)", dataIndex: "result", key: "result" },
    { title: "Target Time", dataIndex: "targetTime", key: "targetTime" },
    { title: "SL Time", dataIndex: "slTime", key: "slTime" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Upload beforeUpload={handleFileUpload} showUploadList={false}>
          <Button icon={<UploadOutlined />}>Upload NIFTY CSV</Button>
        </Upload>

        {summary && (
          <Card title="Strategy Summary" bordered>
            <Space size="large">
              <Statistic title="Total Trades" value={summary.totalTrades} />
              <Statistic title="Winning Trades" value={summary.winTrades} />
              <Statistic title="Win Rate (%)" value={summary.winRate} />
              <Statistic title="Total Points" value={summary.totalPoints} />
              <Statistic title="Total P&L" value={summary.totalPnL} />
            </Space>
          </Card>
        )}

        {results.length > 0 && (
          <Table
            columns={columns}
            dataSource={results}
            pagination={{ pageSize: 10 }}
            rowKey={(r) => r.day + r.position}
            scroll={{ x: true }}
          />
        )}
      </Space>
    </div>
  );
};

export default BreakoutV4Dashboard;
export default function SidePanel({ names, setNames }) {
  const handleChange = (e) => {
    setNames(
      e.target.value
        .split("\n")
        .map((n) => n.trim())
        .filter(Boolean)
    );
  };

  const handleKeyDown = (e) => {
    // Allow Enter key to create a new line
    if (e.key === "Enter") {
      e.stopPropagation();
    }
  };

  return (
    <div className="side-panel">
      <div className="tabs">
        <button className="active">Entries ({names.length})</button>
        <button>Results</button>
      </div>

      <div className="actions">
        <button onClick={() => setNames([...names].sort(() => Math.random() - 0.5))}>
          Shuffle
        </button>
        <button onClick={() => setNames([...names].sort())}>
          Sort
        </button>
      </div>

      <textarea
        value={names.join("\n")}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter one name per line"
      />

      <button className="add-wheel">+ Add wheel</button>
    </div>
  );
}

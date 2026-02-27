export default function WinnerModal({ winner, onClose }) {
  if (!winner) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>🎉 Winner 🎉</h2>
        <div className="winner-name">{winner}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

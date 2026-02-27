export default function TopBar() {

  const imag = require("../assets/logo-dark-background-38.png");
  return (
    <div className="topbar">
      <div className="logo">
        <img
          src={imag}
          alt="Wheel of Names"
          className="logo-icon"
        />
        <span>wheelofnames.com</span>
      </div>

      <div className="menu">
        <button>Customize</button>
        <button>New</button>
        <button>Open</button>
        <button>Save</button>
        <button>Share</button>
        <button>Gallery</button>
        <button>More ▾</button>
      </div>
    </div>
  );
}

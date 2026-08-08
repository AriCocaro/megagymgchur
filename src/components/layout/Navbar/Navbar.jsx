import "./Navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* Logo */}
        <a href="/" className="navbar__logo">
          <img src="/logo.svg" alt="MegaGym" />
        </a>

        {/* Navegación */}
        <nav className="navbar__nav" aria-label="Navegación principal">
          <a href="/" className="navbar__link">
            Home
          </a>

          <a href="/tienda" className="navbar__link">
            Tienda
          </a>

          <a href="/conocenos" className="navbar__link">
            Conócenos
          </a>

          <a href="/megarun" className="navbar__link">
            MegaRun
          </a>
        </nav>

        {/* Botón menú mobile */}
        <button
          type="button"
          className="navbar__menu-button"
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;
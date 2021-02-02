import "./header.scss"

import logo from "../../assets/static/serempre.png";

function Header () {
    return (
      <header className="header-serempre">
        <div>
          <img src={logo} alt="logo" />
        </div>
      </header>
    )
}

export default Header;
import logo from '../images/react-logo.png'
export default function Header(props) { 
    return (
      <nav className="nav-bar">
          <p><img src={logo} alt="logo" height="50" /></p>
          <ul>
            <li><a href="/">Home</a></li>
            <li> <a href="/contact-us">Contact</a> </li>
          </ul>
        </nav>
    )
  }



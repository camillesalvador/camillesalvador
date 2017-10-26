import Link  from 'next/link'
import FontAwesome from 'react-fontawesome'

const Nav = () => (
  <nav className="navbar">
    <h1 className="nav-log">cs.</h1>

    <div className="nav-links">
      <div className="menu">
        <FontAwesome name="circle" />
        <FontAwesome name="circle" />
        <FontAwesome name="circle" />
      </div>
      <Link>
        <a>Home</a>
      </Link>
      <Link>
        <a>Works</a>
      </Link>
      <Link>
        <a>Reach me</a>
      </Link>
    </div>
  </nav>
)

export default Nav

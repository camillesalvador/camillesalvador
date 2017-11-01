import Link  from 'next/link'
import FontAwesome from 'react-fontawesome'
import MobileNav from './MobileNav'

export default props => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
      <Link href="/">
        <a>cs.</a>
      </Link>
      </div>

      <MobileNav className="menu-wrapper">
        <div className="menu">
          <div className="menu-btn">
            <FontAwesome name="circle" />
            <FontAwesome name="circle" />
            <FontAwesome name="circle" />
          </div>

          <div className="nav-links">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About me</a>
            </Link>
            <Link href="/">
              <a>Selected Works</a>
            </Link>
            <Link href="/about">
              <a>Reach me</a>
            </Link>
          </div>
        </div>
      </MobileNav>
    </nav>
  )
}

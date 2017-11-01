import Link from 'next/link'
import FontAwesome from 'react-fontawesome'
import Layout from '../components/Layout'
import stylesheet from '../static/css/styles.scss'

export default() => (
  <Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="about-container">
      <main>
        <div className="description">
          <div className="about-title">
            <p>About Me</p>
          </div>
          <p>
            Hi, I’m Camille Salvador. I’m a 21-year old with a Back-End
            Development training
             who once fell (and may still have lingering feelings) for Java and
             RDBMS but is currently pursuing Front-End Development instead.
            <br/>  <br/>
            I enjoy wandering around and getting lost in books, movies, and
            story rich RPG games. And I occasionally get lost in K-dramas which
            led me into studying Korean Language on my spare time. 안녕하세요~
          </p>
          <hr/>
        </div>
      </main>

      <div className="social">
        <p className="social-title">Say hi!</p>
        <div className="social-icons">
        <Link href="/">
          <a><FontAwesome name="github fa-3x" /></a>
        </Link>
        <Link href="/">
          <a><FontAwesome name="codepen fa-3x" /></a>
        </Link>
        <Link href="/">
          <a><FontAwesome name="linkedin fa-3x" /></a>
        </Link>
        </div>
      </div>
    </div>
  </Layout>
)

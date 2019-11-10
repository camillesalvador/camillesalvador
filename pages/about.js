import Link from 'next/link'
import FontAwesome from 'react-fontawesome'
import Layout from '../components/Layout'
import stylesheet from '../static/css/styles.scss'

export default() => (
  <Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="about-container fadeInUp animated">
      <main>
        <div className="description">
          <div className="about-title">
            <p>About Me</p>
          </div>
          <p>
          Hi, I’m Camille Salvador. I’m a Front-End Developer who enjoys implementing design into fully functional 
            UI components and/or pages. Had training in Software Development 
            and once fell (and may still have lingering feelings) for Java and RDMS, but mostly delves in VueJS 
            and PHP in the last few years. On my spare time, I try to pick up random tech to play around with; currently, it’s Fluttr. 
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
          <a href="https://github.com/camillesalvador" target="_blank"><FontAwesome name="github fa-3x" /></a>
          <a href="https://codepen.io/camillesalvador" target="_blank"><FontAwesome name="codepen fa-3x" /></a>
          <a href="https://www.linkedin.com/in/camillesalvador/" target="_blank"><FontAwesome name="linkedin fa-3x" /></a>
          <a href="mailto:camille.salvador@outlook.com" target="_top"><FontAwesome name="envelope-o fa-3x" /></a>
        </div>
      </div>
    </div>
  </Layout>
)

import Layout from '../components/Layout'
import stylesheet from '../static/css/styles.scss'

export default() => (
  <Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="work-container fadeInUp animated">
      <p className="work-title">Selected works</p>

      <main>
        <div className="top">
          <div className="project1">
            <a href="https://akafred.com" target="_blank">
              <span className="project-title">Akafred.com</span><br/>
              <span className="project-description">A jekyll-based blog</span>
            </a>
          </div>
          <div className="project2">
            <a href="https://achievecare.ca" target="_blank">
              <span className="project-title">Achievecare.ca</span><br/>
              <span className="project-description">A daycare website</span>
            </a>
          </div>
        </div>
        <div className="bottom">
          <div className="project3">
            <a href="https://codepen.io/camillesalvador/full/WojRvr/" target="_blank">
              <span className="project-title">Local Weather Viewer</span><br/>
              <span className="project-description">An API project</span>
            </a>
          </div>
          <div className="project4">
            <a href="https://camillesalvador.github.io/foodResto/" target="_blank">
              <span className="project-title">Gratia</span><br/>
              <span className="project-description">A NextJS website</span>
            </a>
          </div>
        </div>
      </main>

      <div className="more">
        <a href="https://github.com/camillesalvador" target="_blank">Click here to see more</a>
      </div>
    </div>
  </Layout>
)

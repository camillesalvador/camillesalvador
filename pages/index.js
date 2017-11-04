import Layout from '../components/Layout'
import stylesheet from '../static/css/styles.scss'

export default() => (
  <Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="hero-head zoomIn">
      <div className="hero-img"></div>

      <div className="description">
        <p>a web developer<br/>and a part-time witcher</p>
      </div>
    </div>
  </Layout>
)

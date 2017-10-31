import Layout from '../components/Layout'
import stylesheet from '../static/css/styles.scss'

export default() => (
  <Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className="hero-head">
      <div className="hero-img"></div>
      <div className="description">
        <p>a web developer and a part-time witcher</p>
      </div>
    </div>
  </Layout>
)

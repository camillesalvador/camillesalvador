import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const Layout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Camille Salvador is a Front-End Developer from Calgary, Alberta." />
      <title>Camille Salvador</title>
      <link rel="shortcut icon" href="/static/img/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
    </Head>
    <Nav />
    {props.children}
    <Footer />
  </div>
)

export default Layout

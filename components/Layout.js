import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const Layout = (props) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Camille Salvador</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script>

      </script>
    </Head>
    <Nav />
    {props.children}
    <Footer />
  </div>
)

export default Layout

import Footer from '../../partials/Footer'
import Header from '../../partials/Header'

function LayoutDefault() {
  return (
    <>
      <Header />
      <main
        className="main"
        style={{
          marginTop: '150px',
          padding: '80px',
        }}
      ></main>
      <Footer />
    </>
  )
}

export default LayoutDefault

import Nav from './components/Nav'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="font-poppins min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white scroll-smooth">
        <Nav />
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App

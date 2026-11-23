import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-slate-100">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8" />
      <Footer />
    </div>
  )
}

export default App

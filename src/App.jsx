import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'leaflet/dist/leaflet.css';
import Intro from './template/first.jsx'
import AuthForm from './template/form.jsx'
import Explorer from './template/explorer.jsx'
import Message from './template/message.jsx'
import Commande from './template/commande.jsx'
import Profil from './template/profil.jsx'
import Navbar from './template/navbar.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('intro')

  const renderPage = () => {
    switch (currentPage) {
      case 'intro':
        return <Intro onNavigateToForm={() => setCurrentPage('auth')} />
      case 'auth':
        return <AuthForm />
      case 'explorer':
        return <Explorer />
      case 'message':
        return <Message />
      case 'commande':
        return <Commande />
      case 'profil':
        return <Profil />
      default:
        return <Intro onNavigateToForm={() => setCurrentPage('auth')} />
    }
  }

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </>
  )
}

export default App
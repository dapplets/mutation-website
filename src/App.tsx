import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import MutablePage from './pages/MutablePage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MutablePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

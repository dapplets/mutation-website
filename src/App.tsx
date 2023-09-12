import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Layout from './components/Layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dapplets" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

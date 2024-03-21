import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import LegacyLayout from './components/LegacyLayout/LegacyLayout'
import MutablePage from './pages/MutablePage'
import DappletExtensionPage from './pages/DappletExtensionPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/mutate"
          element={
            <Layout>
              <MutablePage />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <LegacyLayout>
              <DappletExtensionPage />
            </LegacyLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

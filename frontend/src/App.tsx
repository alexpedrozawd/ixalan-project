import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/styles/global.css'

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

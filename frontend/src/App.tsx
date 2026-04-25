import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home/Home'
import { Articles } from '@/pages/Articles/Articles'
import { ArticleDetail } from '@/pages/ArticleDetail/ArticleDetail'
import { DeckBuilder } from '@/pages/DeckBuilder/DeckBuilder'
import { PortfolioButton } from '@/components/PortfolioButton/PortfolioButton'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/styles/global.css'

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/card-database" element={<DeckBuilder />} />
      </Routes>
      <PortfolioButton />
    </BrowserRouter>
  )
}

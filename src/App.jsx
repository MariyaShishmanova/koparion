import '../src/styles/main.scss'
import BannerArea from './components/Banner/BannerArea'
import Header from './components/Header/Header'
import SectionFeatured from './components/Section-featured/SectionFeatured'
import SectionHero from './components/Section-hero/SectionHero'
import SectionProducts from './components/Section-products/SectionProducts'

function App() {

  return (
    <>
    <Header />
    <BannerArea />
    <SectionHero />
    <SectionProducts />
    <SectionFeatured />
    </>
  )
}

export default App

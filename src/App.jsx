import '../src/styles/main.scss'
import BannerArea from './components/Banner/BannerArea'
import Header from './components/Header/Header'
import SectionHero from './components/Section-hero/SectionHero'
import SectionProducts from './components/Section-products/SectionProducts'
import SingleImageBanner from './components/SingleImage-banner/SingleImageBanner'
import SectionBestSeller from './components/Section-best-seller/SectionBestSeller'
import SectionPromotions from './components/Section-promotions/SectionPromotions'

function App() {

  return (
    <>
    <Header />
    <BannerArea />
    <SectionHero />
    <SectionProducts />
    <SingleImageBanner/>
    <SectionBestSeller/>
    <SectionPromotions/>
    </>
  )
}

export default App

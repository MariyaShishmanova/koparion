import '../src/styles/main.scss'
import BannerArea from './components/Banner/BannerArea'
import Header from './components/Header/Header'
import SectionHero from './components/Section-hero/SectionHero'
import SectionProducts from './components/Section-products/SectionProducts'
import SingleImageBanner from './components/SingleImage-banner/SingleImageBanner'
import SectionBestSeller from './components/Section-best-seller/SectionBestSeller'

function App() {

  return (
    <>
    <Header />
    <BannerArea />
    <SectionHero />
    <SectionProducts />
    <SingleImageBanner/>
    <SectionBestSeller/>
    </>
  )
}

export default App

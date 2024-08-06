import '../src/styles/main.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import blogPosts from './data/blogPosts';
import Shop from './pages/Shop';

const App = () => {
  const posts = blogPosts;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<Blog posts={posts} />} />
        <Route path="/shop/*" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

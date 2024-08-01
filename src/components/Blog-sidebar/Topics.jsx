import { useState } from 'react';

export default function Topics({ setSelectedTopic }) {
  const [activeTopic, setActiveTopic] = useState('');

  const handleTopicClick = topic => {
    setSelectedTopic(topic);
    setActiveTopic(topic);
  };

  return (
    <div className="blog-sidebar__topics">
      <h3 className="blog-sidebar__title">topics</h3>

      <ul className="blog-sidebar__topics-list">
        <li className={`blog-sidebar__topic ${activeTopic === 'home' ? 'active' : ''}`}>
          <a href="#" onClick={() => handleTopicClick('home')}>
            home
          </a>
        </li>

        <li className={`blog-sidebar__topic ${activeTopic === 'shop' ? 'active' : ''}`}>
          <a href="#" onClick={() => handleTopicClick('shop')}>
            shop
          </a>
        </li>

        <li className={`blog-sidebar__topic ${activeTopic === 'products' ? 'active' : ''}`}>
          <a href="#" onClick={() => handleTopicClick('products')}>
            products
          </a>
        </li>
      </ul>
    </div>
  );
}

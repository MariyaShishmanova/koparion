// src/data/blogPosts.js
import blogPostImg1 from '../assets/blog-img1.png';
import blogPostImg2 from '../assets/blog-img2.png';
import blogPostImg3 from '../assets/blog-img3.png';
import { v4 as uuidv4 } from 'uuid';

const blogPosts = [
  {
    id: 1,
    img: blogPostImg1,
    date: '2023-10-24',
    title: 'Temporibus ',
    author: 'Maria Shishmanova',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla autem quidem totam sapiente omnis, debitis accusantium distinctio qui quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis explicabo molestias dolorum in, esse sunt dolore corrupti neque necessitatibus, aperiam aspernatur deleniti a tenetur beatae illum repellat fugiat qui optio dicta nihil quod! Molestias rerum, repellat autem nam similique sed nemo. Velit fugit nisi ipsa. Odio architecto laudantium cupiditate possimus! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla autem quidem totam sapiente omnis, debitis accusantium distinctio qui quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit.<blockquote>Here is a blockquote with some insightful quote or reference.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote> Veritatis explicabo molestias dolorum in, esse sunt dolore corrupti neque necessitatibus, aperiam aspernatur deleniti a tenetur beatae illum repellat fugiat qui optio dicta nihil quod! Molestias rerum, repellat autem nam similique sed nemo. Velit fugit nisi ipsa. Odio architecto laudantium cupiditate possimu',
    topic: 'home'
  },
  {
    id: 2,
    img: blogPostImg2,
    date: '2023-10-25',
    title: 'The Standard Chunk Of Lorem Ipsum Used Since then',
    author: 'Maria Molduvanova',
    text:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making.<blockquote>Here is a blockquote with some insightful quote or reference.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote>',
    topic: 'shop'
  },
  {
    id: 3,
    img: blogPostImg3,
    date: '2023-10-26',
    title: 'It is a long established fact that a reader will',
    author: 'John Smith',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore d aliqua. Ut enim ad minim veniam, quis...Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making.<blockquote>Here is a blockquote with some insightful quote or reference.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote>',
    topic: 'products'
  },
  {
    id: 4,

    img: blogPostImg1,
    date: '2023-11-01',
    title: 'It is a long established fact that a reader ',
    author: 'John Smith',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore d aliqua. Ut enim ad minim veniam, quis...Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...<blockquote>Here is a blockquote with some insightful quote or reference.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote>',
    topic: 'home'
  },
  {
    id: 5,

    img: blogPostImg2,
    date: '2023-11-02',
    title: 'It is a long established fact that a reader understand',
    author: 'John Smith',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore d aliqua. Ut enim ad minim veniam, quis...Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...<blockquote>Here is a blockquote with some insightful quote or reference.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote>',
    topic: 'shop'
  },
  {
    id: 6,

    img: blogPostImg3,
    date: '2023-11-05',
    title: 'It is a long established fact that a reader comprehend',
    author: 'John Smith',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore d aliqua. Ut enim ad minim veniam, quis...Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...<blockquote>Here is a blockquote with some insightful quote or reference.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote>',
    topic: 'products'
  },
  {
    id: 7,

    img: blogPostImg1,
    date: '2023-11-21',
    title: 'It is a long established fact that a reader establish',
    author: 'John Smith',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore d aliqua. Ut enim ad minim veniam, quis...Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...<blockquote>Here is a blockquote with some insightful quote or reference.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote>',
    topic: 'home'
  },
  {
    id: 8,

    img: blogPostImg2,
    date: '2023-11-21',
    title: 'It is a long established fact that future',
    author: 'John Smith',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore d aliqua. Ut enim ad minim veniam, quis...Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...<blockquote>Here is a blockquote with some insightful quote or reference.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote>',
    topic: 'shop'
  },
  {
    id: 9,
    img: blogPostImg3,
    date: '2023-11-23',
    title: 'It is a long established fact that a reader assume',
    author: 'John Smith',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore d aliqua. Ut enim ad minim veniam, quis...Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...<blockquote>Here is a blockquote with some insightful quote or reference.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote>',
    topic: 'products'
  },
  {
    id: 10,

    img: blogPostImg3,
    date: '2023-11-23',
    title: 'It is a long established fact that a reader see',
    author: 'John Smith',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore d aliqua. Ut enim ad minim veniam, quis...Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...<blockquote>Here is a blockquote with some insightful quote or reference.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote>',
    topic: 'home'
  },
  {
    id: 11,

    img: blogPostImg3,
    date: '2023-11-23',
    title: 'It is a long established fact that a reader feels',
    author: 'John Smith',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore d aliqua. Ut enim ad minim veniam, quis...Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...<blockquote>Here is a blockquote with some insightful quote or reference.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote>',
    topic: 'shop'
  },
  {
    id: 12,

    img: blogPostImg3,
    date: '2023-11-23',
    title: 'It is a long established fact that a reader hear',
    author: 'John Smith',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore d aliqua. Ut enim ad minim veniam, quis...Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...<blockquote>Here is a blockquote with some insightful quote or reference.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote>',
    topic: 'products'
  },
  {
    id: 13,
    img: blogPostImg3,
    date: '2023-11-23',
    title: 'It is a long established fact that a reader imagine',
    author: 'John Smith',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore d aliqua. Ut enim ad minim veniam, quis...Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making...<blockquote>Here is a blockquote with some insightful quote or reference.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet consectetur adipisicing elit</blockquote>',
    topic: 'home'
  }
];

export default blogPosts;

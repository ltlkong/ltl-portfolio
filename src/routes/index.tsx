import BlogPage from '../pages/blogPage';
import HomePage from '../pages/homePage';
import NotFoundPage from '../pages/NotFoundPage';
import ContactPage from '../pages/contactPage';
import { Navigate } from 'react-router-dom';

const routes = [
  { path: '/contact', name: 'Contact', element: <ContactPage /> },
  { path: '/blog/:id', name: 'Blog', element: null },
  { path: '/blog', name: 'Blog', element: <BlogPage /> },
  { path: '/', name: 'Home', element: <HomePage /> },
];

const getRouteName = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return 'Home';
    case '/contact':
      return 'Contact';
    default:
      if (pathname.includes('/blog')) return 'Blog';
      return 'NotFound';
  }
};

export default routes;

export { getRouteName };

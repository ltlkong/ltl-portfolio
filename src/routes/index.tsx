import BlogPage from '../pages/BlogPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

const routes = [
    { path: '/blog/:id', name: 'blog', element: null },
    { path: '/blog', name: 'blog', element: <BlogPage /> },
    { path: '/', name: 'home', element: <HomePage /> },
    { element: <NotFoundPage /> },
];

export default routes;

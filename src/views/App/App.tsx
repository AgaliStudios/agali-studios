import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from '../About';
import Contact from '../Contact';
import ErrorPage from '../ErrorPage';
import Home from '../Home';
import Layout from '../Layout';

export default function App() {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <ErrorPage /> },
      ],
    },
  ];

  const router = createBrowserRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
    },
  });
  return <RouterProvider router={router} />;
}

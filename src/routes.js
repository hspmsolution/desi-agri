import { useState,useEffect } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { useSelector} from 'react-redux';

// layouts
import DashboardLayout from './admin/layouts/dashboard';
//
import BlogPage from './admin/pages/BlogPage';
import UserPage from './admin/pages/UserPage';
import Login from './admin/pages/login';
import Register from './admin/pages/register';
import Page404 from './admin/pages/Page404';
import ProductsPage from './admin/pages/ProductsPage';
import DashboardAppPage from './admin/pages/DashboardAppPage';
import Homepage from './pages/homepage/Homepage';

// ----------------------------------------------------------------------

export default function Router() {
  const isAdmin = useSelector((state) => state.auth.admin);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes([
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '404',
        element: <Page404 />,
      },
      {
        path: '*',
        element: <Navigate to="/404" replace />,
      },
      ...(isAdmin
        ? [
            {
              path: '/dashboard',
              element: <DashboardLayout />,
              children: [
                { path: 'app', element: <DashboardAppPage /> },
                { path: 'user', element: <UserPage /> },
                { path: 'products', element: <ProductsPage /> },
                { path: 'blog', element: <BlogPage /> },
              ],
            },
          ]
        : []),
    ]);
  }, [isAdmin]);

  return useRoutes(routes);
}
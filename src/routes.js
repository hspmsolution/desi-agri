import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './admin/layouts/dashboard';
//
import BlogPage from './admin/pages/BlogPage';
import UserPage from './admin/pages/UserPage';
import LoginPage from './admin/pages/LoginPage';
import Page404 from './admin/pages/Page404';
import ProductsPage from './admin/pages/ProductsPage';
import DashboardAppPage from './admin/pages/DashboardAppPage';
import Homepage from './pages/homepage/Homepage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Homepage/>,
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

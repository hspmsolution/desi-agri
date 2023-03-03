import { useState, useEffect } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
import ManageAdmin from './admin/pages/ManageAdmin';
import Homepage from './pages/homepage/Homepage';
import AddProduct from './admin/pages/AddProduct';
import LineChart from './admin/pages/LineChart';
import UpdateProduct from './admin/pages/UpdateProduct';
import Products from './pages/products/Products';
import FuturePrices from './pages/Market Data/Historical Data/Future Prices/FuturePrices';

// ----------------------------------------------------------------------

export default function Router() {
  const isAdmin = useSelector((state) => state.auth.admin);
  const role = useSelector((state) => state.auth.authData?.role);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    setRoutes([
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/futureprices',
        element: <FuturePrices />,
      },
      {
        path: '/login',
        element: <Login />,
      },

      {
        path: '/404',
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
                {
                  path: 'manage-admin',
                  element: role === 'superadmin' ? <ManageAdmin /> : <Navigate to="/404" replace />,
                },
                { path: 'addproduct', element: <AddProduct /> },
                { path: 'updateproduct', element: <UpdateProduct /> },
                {
                  path: 'register',
                  element: role === 'superadmin' ? <Register /> : <Navigate to="/404" replace />,
                },
                {
                  path: 'chart',
                  element: <LineChart />,
                },
              ],
            },
          ]
        : []),
    ]);
  }, [isAdmin, role]);

  return useRoutes(routes);
}

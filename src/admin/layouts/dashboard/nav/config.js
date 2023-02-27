
// component
import SvgColor from '../../../components/svg-color';


// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

export default function navConfig(role){
  const navConfig= [
    {
      title: 'dashboard',
      path: '/dashboard/app',
      icon: icon('ic_analytics'),
    },
    // {
    //   title: 'user',
    //   path: '/dashboard/user',
    //   icon: icon('ic_user'),
    // },
    {
      title: 'product',
      path: '/dashboard/products',
      icon: icon('ic_cart'),
    },
    {
      title: 'Add Product',
      path: '/dashboard/addproduct',
      icon: icon('ic_cart'),
    },
    {
      title: 'Update Product',
      path: '/dashboard/updateproduct',
      icon: icon('ic_cart'),
    },
    {
      title: 'Chart',
      path: '/dashboard/chart',
      icon: icon('ic_analytics'),
    },
    {
      title: 'blog',
      path: '/dashboard/blog',
      icon: icon('ic_blog'),
    }
  ];

  if (role === 'superadmin') {
    navConfig.push({
      title: 'Manage Admin',
      path: '/dashboard/manage-admin',
      icon: icon('ic_lock'),
    });
  }

  return navConfig;
}




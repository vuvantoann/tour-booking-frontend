import LayoutDefault from '../layout/LayoutDefault'
import Home from '../../client/pages/Home'
import Hotel from '../../client/pages/Hotel'
import Tour from '../../client/pages/Tour'
import About from '../../client/pages/About'
import Blog from '../../client/pages/Blog'
import BlogAll from '../../client/pages/Blog/BlogAll'
import BlogDetail from '../../client/pages/Blog/BlogDetail'
import BlogNews from '../../client/pages/Blog/BlogNews'
import BlogRelated from '../../client/pages/Blog/BlogRelated'
import Contact from '../../client/pages/Contact'
import Error404 from '../../client/pages/Error404'
import PrivateRoutes from '../components/PrivateRoutes'
import InForUser from '../../client/pages/InForUser'
import Login from '../../client/pages/Login'
import ToursByCategory from '../pages/Tour/ToursByCategory'
import TourAll from '../pages/Tour/TourAll'
import TourDetail from '../pages/Tour/TourDetail'

export const routes = [
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'hotels',
        element: <Hotel />,
      },
      {
        path: 'tours',
        element: <Tour />,
        children: [
          {
            index: true,
            element: <TourAll />,
          },
          {
            path: ':slug',
            element: <ToursByCategory />,
          },
          {
            path: 'detail/:slug',
            element: <TourDetail />,
          },
        ],
      },

      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'blog',
        element: <Blog />,
        children: [
          {
            index: true,
            element: <BlogAll />,
          },
          {
            path: '/blog/news',
            element: <BlogNews />,
          },
          {
            path: '/blog/related',
            element: <BlogRelated />,
          },
          {
            path: ':_id',
            element: <BlogDetail />,
          },
        ],
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '',
        element: <PrivateRoutes />,
        children: [
          {
            path: 'info-user',
            element: <InForUser />,
          },
        ],
      },
    ],
  },
]

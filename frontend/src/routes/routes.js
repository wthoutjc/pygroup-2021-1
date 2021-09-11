import Start from '../components/start'
import AddMovie from '../components/addMovie'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
    exact: true,
  },
  {
    path: '/add-movie',
    name: 'Add a Movie',
    component: AddMovie,
    exact: true,
  },
]

export default routes

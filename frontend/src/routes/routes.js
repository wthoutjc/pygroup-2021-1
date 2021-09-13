import Start from '../components/start'
import AddMovie from '../components/addMovie'
import EditMovie from '../components/editMovie'

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
  {
    path: '/edit-movie/:id',
    name: 'Edit a Movie',
    component: EditMovie,
    exact: true,
  },
]

export default routes

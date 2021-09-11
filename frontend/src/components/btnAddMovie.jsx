import '../style/btnAddMovie.css'
import { Link } from 'react-router-dom'

const BtnAddMovie = () => {
  return (
    <>
      <Link className="btn-add-movie" to="/add-movie">
        <div className="add-movie">
          <h1> + </h1>
        </div>
      </Link>
    </>
  )
}

export default BtnAddMovie

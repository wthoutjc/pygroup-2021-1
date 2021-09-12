import '../style/movie.css'

{
  /* <p>
{' '}
{props.name} {props.link}{' '}
</p> */
}

const Movie = (props) => {
  //id, name, link, src
  return (
    <div className="movie" key={props.id}>
      <img src={props.src} alt="" />
    </div>
  )
}

export default Movie

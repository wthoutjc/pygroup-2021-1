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
      <label>
        <input type="checkbox" name="" id="check-box" value={props.id} />
        <span className="check-box"></span>
        <img src={props.src} alt="" />
      </label>
    </div>
  )
}

export default Movie

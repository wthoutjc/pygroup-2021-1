import '../style/start.css'
import { useEffect, useState } from 'react'

//Components:
import BtnAddMovie from './btnAddMovie'
import Movie from './movie'

const logoUDFJC = require('../images/header-right.png')

const Start = () => {
  const [movies, setMovies] = useState([])
  const [messageStatus, setMessageStatus] = useState({
    isAMessage: false,
    message: '',
  })

  useEffect(() => {
    const getInfo = async () => {
      const url = 'http://127.0.0.1:5000/read'
      const $movies = document.getElementById('movies')

      const settings = {
        method: 'GET',
        headers: new Headers({
          'Access-Control-Allow-Origin': '*',
        }),
      }
      const res = await fetch(`${url}`, settings)
      const blob = await res.json()
      setMovies(await blob.results)
      //`data:image/png;base64,${text}`
    }

    getInfo()
  }, [])

  return (
    <>
      <div className="start">
        <div className="header">
          <div className="header-left">
            <h3> CRUD Movies </h3>
          </div>
          <div className="header-right">
            <img src={logoUDFJC} className="img-logo-ud" alt="logo-ud"></img>
          </div>
        </div>
        <div className="reader">
          <div className="credits">
            <h3> Por: </h3>
            <h4> - Name 0 </h4>
            <h4> - Name 1 </h4>
          </div>
          <div className="message" id="message">
            {' '}
            {messageStatus.isAMessage ? (
              <div className="success">
                <h3 className="label-file">{messageStatus.message}</h3>
              </div>
            ) : (
              <div className="error">
                <h3 className="label-file">{messageStatus.message}</h3>
              </div>
            )}
          </div>
          <div className="movies" id="movies">
            {movies.map((data) => (
              <Movie
                key={data.id}
                name={data.name}
                link={data.link}
                src={`data:image/png;base64,${data.image}`}
              />
            ))}
            <BtnAddMovie />
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default Start

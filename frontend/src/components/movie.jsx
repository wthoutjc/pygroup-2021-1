import '../style/movie.css'

import { useState } from 'react'

const Movie = (props) => {
  const sendSpecificInfo = async (id) => {
    const url = `http://127.0.0.1:5000/read-specific/${id}`
    const settings = {
      method: 'GET',
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
      }),
    }
    const res = await fetch(`${url}`, settings)
    const blob = await res.json()
    props.setReadSpecific(await blob)
  }

  return (
    <div className="movie">
      <label>
        <input type="checkbox" name="" id="check-box" />
        <span className="check-box">
          <img
            src={props.src}
            alt=""
            onClick={() => {
              props.setShowPopUp(!props.showPopUp)
              sendSpecificInfo(props.id)
            }}
          />
        </span>
      </label>
    </div>
  )
}

export default Movie

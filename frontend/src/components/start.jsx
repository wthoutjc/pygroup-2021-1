import '../style/start.css'
import { useState } from 'react'

//Components:
import BtnAddMovie from './btnAddMovie'

const logoUDFJC = require('../images/header-right.png')

const Start = () => {
  const url = 'http://127.0.0.1:5000/read'
  const [stateStatus, setStatusStatus] = useState('')

  const sendInfo = async () => {
    let data = {
      text: textStatus,
    }
    const settings = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    }
    const res = await fetch(`${url}`, settings)
    data = await res.json()
    data.results.map((lex) => ($textResults.innerHTML += `${lex}\n`))
  }

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
          <div className="movies">
            <BtnAddMovie />
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default Start

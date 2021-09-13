import '../style/readSpecific.css'

import { Link } from 'react-router-dom'

const ReadSpecific = (props) => {
  const deleteSpecific = async () => {
    const url = `http://127.0.0.1:5000/delete/${props.readSpecific.results[0].id}`
    const settings = {
      method: 'DELETE',
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
      }),
    }
    const res = await fetch(`${url}`, settings)
  }

  return props.showPopUp ? (
    <div className="popup">
      <div className="content-popup">
        <div className="header-popup">
          <i
            className="close-btn fas fa-times-circle"
            onClick={() => props.setShowPopUp(!props.showPopUp)}
          ></i>
          {props.readSpecific ? (
            <h1>
              Results for: <i>{props.readSpecific.results[0].name}</i>{' '}
            </h1>
          ) : (
            ''
          )}
        </div>
        <div className="body-popup">
          {props.readSpecific ? (
            <div className="results-popup">
              <div className="left-popup">
                <label>Link: </label>
                <a
                  className="link-popup"
                  href={props.readSpecific.results[0].link}
                >
                  {props.readSpecific.results[0].link}{' '}
                </a>
                <Link
                  className="update-popup"
                  id="update-popup"
                  to={`/edit-movie/${props.readSpecific.results[0].id}`}
                >
                  <i className="fas fa-pencil-alt"></i>
                </Link>
                <Link
                  className="delete-popup"
                  id="delete-popup"
                  to="#"
                  onClick={() => {
                    deleteSpecific()
                    props.setShowPopUp(!props.showPopUp)
                    window.location.href = 'http://localhost:3000'
                  }}
                >
                  <i className="fas fa-trash-alt"></i>
                </Link>
              </div>
              <div className="right-popup">
                <label>Image: </label>
                <div className="img-popup">
                  <img
                    src={`data:image/png;base64,${props.readSpecific.results[0].image}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}
export default ReadSpecific

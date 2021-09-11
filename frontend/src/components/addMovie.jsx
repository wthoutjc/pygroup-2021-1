import '../style/addMovie.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AddMovie = () => {
  const [fileStatus, setFileStatus] = useState('')
  const [loadStatus, setLoadStatus] = useState(false)
  const [nameStatus, setNameStatus] = useState('')
  const [linkStatus, setLinkStatus] = useState('')

  const sendInfo = async () => {
    let archivoRuta = fileStatus.value
    const url = 'http://127.0.0.1:5000/create'
    const allowExtensions = /(.png|.jpg|.jpeg)$/i

    if (!allowExtensions.exec(archivoRuta)) {
      alert('Incorrect file!')
      setFileStatus(0)
      return false
    } else {
      if (fileStatus.files && fileStatus.files[0]) {
        const $effectLoader = document.getElementById('loader')
        const $labelPhoto = document.getElementById('label-file')
        const $addMovieSubmit = document.getElementById('add-movie-submit')
        const $nameMovie = document.getElementById('name-movie')
        const $link = document.getElementById('link')

        let visor = new FileReader()

        var data = new FormData()
        data.append('name', nameStatus)
        data.append('link', linkStatus)
        data.append('file', fileStatus.files[0])

        const settings = {
          method: 'POST',
          body: data,
          headers: new Headers({
            'Access-Control-Allow-Origin': '*',
          }),
        }

        visor.onload = async (e) => {
          $labelPhoto.style.display = 'none'
          $addMovieSubmit.style.display = 'none'
          $effectLoader.style.display = 'flex'
          $nameMovie.style.display = 'none'
          $link.style.display = 'none'

          alert('ok')
          const res = await fetch(`${url}`, settings)
          if (res) {
            $labelPhoto.style.display = 'flex'
            $addMovieSubmit.style.display = 'flex'
            $effectLoader.style.display = 'none'
            $nameMovie.style.display = 'flex'
            $link.style.display = 'flex'
          }
        }
        visor.readAsDataURL(fileStatus.files[0])
      } else {
        alert('some fails')
      }
    }
  }
  return (
    <>
      <div className="movie-container">
        <div className="movie-form">
          <input
            type="text"
            className="name-movie"
            placeholder="Name"
            id="name-movie"
            onChange={(e) => {
              setNameStatus(e.target.value)
            }}
          />
          <input
            type="text"
            className="link"
            placeholder="Link"
            id="link"
            onChange={(e) => {
              setLinkStatus(e.target.value)
            }}
          />
          <input
            type="file"
            id="image-movie"
            onChange={(e) => {
              setFileStatus(e.target)
              setLoadStatus(true)
            }}
          />
          <label htmlFor="image-movie" id="label-file">
            {loadStatus
              ? 'File loaded, click again to update'
              : 'Load an image'}
          </label>
          <Link
            className="add-movie-submit"
            id="add-movie-submit"
            to="#"
            onClick={sendInfo}
          >
            Add Movie
          </Link>
          <div className="loader-container" id="loader">
            <div className="loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddMovie

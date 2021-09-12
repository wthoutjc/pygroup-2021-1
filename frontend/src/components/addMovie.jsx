import '../style/addMovie.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AddMovie = () => {
  const [fileStatus, setFileStatus] = useState('')
  const [loadStatus, setLoadStatus] = useState('Load an image')
  const [nameStatus, setNameStatus] = useState('')
  const [linkStatus, setLinkStatus] = useState('')

  const sendInfo = async () => {
    let archivoRuta = fileStatus.value
    const url = 'http://127.0.0.1:5000/create'
    const allowExtensions = /(.png|.jpg|.jpeg)$/i
    const allowURL = /^(ftp|http|https):\/\/[^ "]+$/
    const $addMovieSubmit = document.getElementById('add-movie-submit')
    const $nameMovie = document.getElementById('name-movie')
    const $labelPhoto = document.getElementById('label-file')
    const $link = document.getElementById('link')

    console.log(allowExtensions.exec(archivoRuta))

    if (!allowExtensions.exec(archivoRuta)) {
      $labelPhoto.style.border = '1px solid red'
      $labelPhoto.style.color = 'red'
      setFileStatus(0)
      setLoadStatus('Incorrect file')
      return false
    } else {
      if (!allowURL.exec(linkStatus)) {
        $labelPhoto.style.border = '1px solid red'
        $labelPhoto.style.color = 'red'
        setFileStatus(0)
        setLoadStatus('Incorrect URL')
        return false
      } else if (fileStatus.files && fileStatus.files[0]) {
        let data = new FormData()

        $addMovieSubmit.innerHTML = `<div class="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>`
        $labelPhoto.style.display = 'none'
        $addMovieSubmit.style.border = 'none'
        $nameMovie.style.display = 'none'
        $link.style.display = 'none'

        data.append('file', fileStatus.files[0])
        data.append('name', nameStatus)
        data.append('link', linkStatus)

        const settings = {
          method: 'POST',
          body: data,
          headers: new Headers({
            'Access-Control-Allow-Origin': '*',
          }),
        }
        setLoadStatus('Success')
        const res = await fetch(`${url}`, settings)
        if (await res) {
          $labelPhoto.style.display = 'flex'
          $addMovieSubmit.style.display = 'flex'
          $nameMovie.style.display = 'flex'
          $link.style.display = 'flex'
          $labelPhoto.style.border = '1px solid black'
          $labelPhoto.style.color = 'black'
          $addMovieSubmit.innerHTML = 'Success'
          $addMovieSubmit.style.border = '1px solid black'
          //setSendStatus(true)
          window.location.href = 'http://localhost:3000'
        }
      } else {
        alert('some fails')
      }
    }
  }
  return (
    <>
      <div className="movie-container">
        <h1 className="tittle">CREATE A MOVIE</h1>
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
            type="link"
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
              setLoadStatus('File loaded, click again to update')
            }}
          />
          <label htmlFor="image-movie" id="label-file">
            {loadStatus}
          </label>
          <Link
            className="add-movie-submit"
            id="add-movie-submit"
            to="#"
            onClick={sendInfo}
          >
            Add Movie
          </Link>
        </div>
      </div>
    </>
  )
}

export default AddMovie

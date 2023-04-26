import React, { useState } from 'react'
import axios from 'axios'
import "../App.css"


const FilmForm = () => {
    const [category, setCategory] = useState('')
    const [id, setId] = useState()
    const [responseById, setResById] = useState(null)
    const [responseByCategory, setResponseByCate] = useState(null)

    const changeCategory = (event) => {
        setCategory(event.target.value)
    }
    const changeId = (event) => {
        setId(event.target.value)
    }

    const findByCategory = (event) => {
        event.preventDefault()
        return axios.get(`http://localhost:8000/films?category=${category}`).then(response => {
            setResponseByCate(response.data)
            setResById(null)

        }).catch(error => {
            setResponseByCate(error.response.data)
            setResById(null)
        })
    }

    const findById = (event) => {
        event.preventDefault()
        return axios.get(`http://localhost:8000/films/${id}`).then(response => {
            setResById(response.data)
            setResponseByCate(null)
        }).catch(error => {
            setResById(error.response.data)
            setResponseByCate(null)
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={findById}>
                    <div>
                        <label htmlFor="id">Id </label>
                        <input type="text" id="id" value={id} onChange={changeId} />
                    </div>
                    <button type="submit" id='findById'>Find by id</button>
                </form>
                <form onSubmit={findByCategory}>
                    <div>
                        <label htmlFor="category">Category </label>
                        <input type="text" id="category" value={category} onChange={changeCategory} />
                    </div>
                    <button type="submit" id='findByCategory'>Find by category</button>
                </form>
                {responseByCategory && responseByCategory.map(film => (
                    <p className='name'>{film.name}</p>
                ))}
                {
                    responseById && responseById.name && (
                        <p id='responseById'>{responseById.name}</p>
                    )
                }

            </header>
        </div>
    )
}

export default FilmForm
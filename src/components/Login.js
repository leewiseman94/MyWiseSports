import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

const Login = () => {
  const history = useHistory()
  console.log(history)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('https://ga-winebored.herokuapp.com/login', formData)
      history.push('/wines')
    } catch (err) {
      setError(true)
    }
  }

  console.log(formData)
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form className="column is-half is-offset-one-quarter box" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" placeholder="Email" name="email" onChange={handleChange}/>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" placeholder="Password" name="password" onChange={handleChange}/>
              </div>
              {error && <p className="help is-danger">Sorry, your username or password are incorrect</p>}
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-info">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Login
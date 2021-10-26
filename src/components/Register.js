import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Register = () => {
  const history = useHistory()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    setErrors({ ...errors, [event.target.name]: '' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formData)
    try {
      await axios.post('https://ga-winebored.herokuapp.com/register', formData)
      history.push('/wines')
    } catch (err) {
      setErrors(err.response.data.errors)
    }
  }


  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form className="column is-half is-offset-one-quarter box" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" placeholder="Username" name="username" onChange={handleChange}/>
              </div>
              {errors.username && <p className="help is-danger">{errors.username}</p>}
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" placeholder="Email" name="email" onChange={handleChange}/>
              </div>
              {errors.email && <p className="help is-danger">{errors.email}</p>}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" placeholder="Password" name="password" onChange={handleChange}/>
              </div>
              {errors.password && <p className="help is-danger">{errors.password}</p>}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input className="input" placeholder="Password Confirmation" name="passwordConfirmation" onChange={handleChange}/>
              </div>
              {errors.passwordConfirmation && <p className="help is-danger">{errors.passwordConfirmation}</p>}
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-info">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}
export default Register
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const url = 'https://phase2-aio.vercel.app/apis'
import axios from 'axios'

const LoginPage = () => {
    const [form, setForm] = useState({email: '', password: ''});
    const [Loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
    

        try {
            setLoading(true)

            const {data} = await axios.post(`${url}/login`, form)

            localStorage.setItem('access_token', data.data.access_token)
            toast.success('Successfully logged in', {position: 'bottom-right'})
            navigate('/products')
        } catch (error) {
            toast.error(error.response.data.error, {position: 'bottom-right'})
        }finally{
            setLoading(false)
        }
    }

    if(Loading) return <img src="/goku.gif" alt="loading" width={100}/>

    return (
        <>
            <form id="login-form" onSubmit={handleSubmit}>
                  <h1 className="h3 mb-3 display-1">Log in to your account</h1>
                  <span>Log in on your profile to autocomplete your purchase order
                    with your personal data.</span>
                  <div className="mb-3 mt-3">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="login-email">Email</label>
                      <label className="text-danger text-end fw-bold">*</label>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      id="login-email"
                      placeholder="Enter email address ..."
                      autoComplete="off"
                      required
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value})}
                    />
                  </div>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="login-password">Password</label>
                      <label className="text-danger text-end fw-bold">*</label>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="login-password"
                      placeholder="Enter your password ..."
                      autoComplete="off"
                      required
                      value={form.password}
                      onChange={(event)=> setForm ({ ...form, password: event.target.value})}
                    />
                  </div>
                  <div className="checkbox mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="login-remember"
                      />
                      <label className="form-check-label" htmlFor="login-remember">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-lg btn-primary rounded-pill w-100 p-2" type="submit">
                    Log In
                  </button>
            </form>
        </>
    )
}

export default LoginPage
import { useEffect } from "react";
import LoginPage from '../components/LoginPage'

const Login = () => {
    useEffect(() => {
        document.title = 'Login | Branded Things';
    }, [])

    return (

        <>
            <section className="container" id="login-section">
                <div className="row">
                    <div className="col-12 text-center">
                    <h1 className="mb-3 mt-5">Login Options</h1>
                    <span>Log in and autocomplete your order with your personal data, or sign
                        up to enjoy all the benefits of an Branded Things account.</span>
                </div>
                    <div className="col-12 col-lg-8 offset-lg-2 my-5">
                        <div className="row">
                            <div className="col-12 col-md-6 border-end p-5 text-left">
                                <img src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/561/1056141_PE848273_S4.webp" width="350px" alt="sofa"/>
                                </div>
                                <div className="col-12 col-md-6 p-5 text-left">
                                    <div className="form-signin m-auto">
                                        <LoginPage/>
                                    </div>
                                </div>
                           </div>
                       </div>
                    </div>
            </section>
        </>
    )
}

export default Login;
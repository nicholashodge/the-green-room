import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css"
import { getUserByEmail } from "../services/userService";

export const Login = () => {
    const [email, setEmail] = useState("jsmith@gmail.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();

        getUserByEmail(email).then((foundUsers) => {
            if(foundUsers.length === 1){    
                const user = foundUsers[0]
                    localStorage.setItem(
                        "greenroom_user",
                        JSON.stringify({
                            id: user.id
                        })
                    )
                navigate("/") //redirect to home after login
            }else{
                window.alert("Invalid login")
            }
        })
    
    }

    return (
        <main className="auth-container">
            <section>
                <form className="auth-form" onSubmit={handleLogin}>
                    <h1 className="header">The Green Room</h1>
                    <h2>Please sign in</h2>
                    <fieldset className="auth-fieldset">
                        <div>
                            <input
                                type="email"
                                value={email}
                                className="auth-form-input"
                                onChange={(emailEvent) => setEmail(emailEvent.target.value)}
                                placeholder="Email address"
                                required
                                autoFocus 
                            />
                        </div>
                    </fieldset>
                    <fieldset className="auth-fieldset">
                        <div>
                            <button type="submit">Sign in</button>
                        </div>
                    </fieldset>
                </form>
            </section>
            <section className="register-link">
                <Link to='/register'>Not a member yet? Click here to register</Link>
            </section>
        </main>
    )
}
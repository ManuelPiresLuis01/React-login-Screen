import "../style/app.css"
import { Input } from "../components/input/input";
import { FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

function App() {
    return (
        <div className="container">
            <h1>Login</h1>
            <p>Please enter your Login and your password</p>
            <form>
                <div className="input">
                    <i><FaRegUser /></i>
                    <Input
                        type="email" placeholder="Username or E-mail"
                    />
                </div>
                <br />
                <div className="input">
                    <i><IoKeyOutline /> </i>
                    <Input
                        type="password" placeholder="Password"
                    />
                </div>

                <br />
                <a className="Link" href="">Forgot password</a>
                <br />
                <button className="login">Login</button>
            </form>
            <div className="gmail">
                <i><SiGmail /></i>
                <button>Or sign-In with Google</button>
            </div>
            <div className="notMember">
                <p>Not a member yet</p>
                <a href="">Register</a>
            </div>
        </div>
    );
}

export default App;
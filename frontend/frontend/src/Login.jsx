import {userState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../services.api";
function Login(){
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const loginUser=async(e)=>{
        e.preventDefault();
        try{
            const response=await API.post("/users/login",{
                email,
                password,
            });
            localStorage.setItem("token",response.data.token);
            alert("Login Successfull");
            navigate("/dashboard");
        }
        catch(error){
            alert(error.response.data.message);
        }
    };
    return (
        <div>
            <h2>
                Login
            </h2>
            <form onSubmit={loginUser}>
                <input type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <br/>
                <br/>
                <input type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <br/>
                <br/>
                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    )


}
export default Login;
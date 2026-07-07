import {userState} from "react";
import {useNavigate} from "react-router-dom";
import API from "../services.api";
function Register(){
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const registerUser=async(e)=>{
        e.preventDefault();
        try{
            const response=await API.post("/users/register",{
                name,
                email,
                password,
            });
            alert("Registration Successfull");
            navigate("/");
        }
        catch(error){
            alert(error.response.data.message);
        }
    };
    return (
        <div>
            <h2>
                Register
            </h2>
            <form onSubmit={registerUser}>
                <input type="name"
                placeholder="Name"
                value={name}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <br/>
                <br/>
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
                    Register
                </button>

            </form>
        </div>
    )


}
export default Register;
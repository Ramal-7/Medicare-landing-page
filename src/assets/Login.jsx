import { useState } from "react"; 
import "./Login.css";
function Login({ switchToRegister, Onsuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
   // console.log("Login attempt with:", { email, password });
    Onsuccess(); 
  };
  return (
    <div className="loginn">
    <h2>Login</h2>
    <form onSubmit={handleLogin} className='login-form'>
    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button onClick={switchToRegister} className="back-btn">Register</button></p>
    </div>
  );
}
export default Login;
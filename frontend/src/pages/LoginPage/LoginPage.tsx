import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = () => {
    console.log( email, password)
    
  }
  return(
    <>
      <NavBar current="auth"></NavBar>
      Login
      <form>     
        <label>
          <input type="text" placeholder='Почта'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        
        <label>
          <input type="text" placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        
        <button type="button"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
      <a href='/register'>Нет аккаунта? Зарегистрироваться</a>
    </>
  )

}

export default LoginPage;
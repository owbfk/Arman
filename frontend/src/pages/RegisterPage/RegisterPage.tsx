import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../types';
import Register from '../../api';
import NavBar from '../../components/NavBar/NavBar';
// axios.defaults.withCredentials = true;
const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Получение CSRF-токена (для первого запроса)
  //  useEffect(() => {
  //   axios.get('http://localhost:8000/sanctum/csrf-cookie')
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // });
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [csrfToken, setCsrfToken] = useState('');
  // const [csrfToken, setCsrfToken] = useState(null);
  // // // Получаем CSRF токен один раз при монтировании
  // // useEffect(() => {
  // //   axios.get('http://localhost:8000/sanctum/csrf-cookie').then(res => {
  // //     setCsrfToken(res.data);
  // //   });
  // // }, []);
  // useEffect(() => {
  //   // 1. Получаем CSRF-токен
  //   axios.get('http://localhost:8000/sanctum/csrf-token')
  //     .then(response => {
  //       setCsrfToken(response.data.csrf_token);
  //       console.log('CSRF token received:', response.data.csrf_token);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching CSRF token:', error);
  //     });
  // }, []);

  // const handleSubmit = async (e: { preventDefault: () => void; }) => {
    
  //   e.preventDefault();
    
  //   try {
  //     await axios.get('/sanctum/csrf-token');
  //     if (!csrfToken) {
  //       console.error('CSRF token is not available');
  //       return;
  //     }
  //     const response = await axios.post('http://localhost:8000/register', {
  //       name: 'John Doe',
  //       email: 'john@example.com',
  //       password: 'password',
  //     }, {
  //       headers: {
  //         'X-CSRF-TOKEN': csrfToken, // Добавляем CSRF-токен в заголовок
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       withCredentials: true,
  //     });

  //     console.log('Success:', response.data);
  //   } catch (error) {
  //     console.error('Error:', error || error);
  //   }
  // };
  const handleSubmit = () => {
    console.log(name, email, password)
    Register()
  }
  return (
    <>
      <NavBar current="auth"></NavBar>
      <form>
        <label>
          <input type="text" placeholder='Логин'
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </label>
        
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
      <a href='/login'>Уже регистрировались? Войти</a>
    </>
  )
}

export default RegisterPage;
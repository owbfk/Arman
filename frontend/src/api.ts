import axios from "axios";

// async function Register () {
//   await axios.get('/sanctum/csrf-cookie');

//   // Пример регистрации
//   const response = await axios.post('http://localhost:8000/register', {
//       name: 'John Doe',
//       email: 'john@example.com',
//       password: 'password',
//       // password_confirmation: 'password'
//   });
//   console.log(response)
//   // Сохранение токена
//   localStorage.setItem('token', response.data.token);
// }

async function Register() {
  // 1. Получаем CSRF-куки
  // const CSRF = await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
  //   withCredentials: true
  // });

  // const getCsrfToken = async () => {
  //   const response = await axios.get('http://localhost:8000/sanctum/csrf-cookie', { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
  //   return response.data;
  // };

  // // Настройка axios
  // axios.defaults.headers.common['X-CSRF-TOKEN'] = await getCsrfToken(); 
  // fetch('http://localhost:8000/sanctum/csrf-cookie')
  //   .then(res => res.text())
  //   .then(token => {
  //     fetch('http://localhost:8000/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'X-CSRF-TOKEN': token
  //       },
  //       body: JSON.stringify({ 
  //         name: 'John Doe',
  //         email: 'john@example.com',
  //         password: 'password',
  //        })
  //     });
  // });
  // 2. Отправляем запрос регистрации
  try {
    const response = await axios.post('http://localhost:8000/register', {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password',
      // password_confirmation: 'password' 
    }, {
      // withCredentials: true, 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });

    console.log(response);
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    console.error('Registration error:', error);
  }
}

export default Register;
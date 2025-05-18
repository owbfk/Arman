import logo from '../../assets/logo.png'
import './NavBar.css';

type Current = {current : string}

const NavBar = ({current}: Current) => {
  const currentStyle  = {
    background: 'blue',
  }
  return(
    <div className='navbar'>
      <a href='/' className='a-hover'>
        <img alt='logo' src={logo}/>
      </a>
      <a href='/products'  style={(current === 'products') ? currentStyle : {}}>Ассортимент</a>
      <a href='/favourites' style={(current === 'favourites') ? currentStyle : {}}>Избранное</a>
      <a href='/register' style={(current === 'auth') ? currentStyle : {}}>Войти</a>
    </div>
  )

}

NavBar.defaultProps = {
  current: '',
};

export default NavBar;
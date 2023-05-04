import './NavBar.css'; 
import logo from '../../assets/logo.png';


const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div className='logo-container'>
            <img src={logo} className='logo'/>
          </div>
          <div className='search-bar'>
            Search
          </div>
        </div>

        <div className="navbar-right">
          <div className='navbar-item'>
            Shop
          </div>
          <div className='navbar-item'>
            The App
          </div>
          <div className='navbar-item'>
            Journal
          </div>
          <div className='navbar-item'>
            Support
          </div>
          <div className='navbar-item'>
            Log In
          </div>
          <div className='navbar-item'>
            <button className='sign-up-button'>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar;
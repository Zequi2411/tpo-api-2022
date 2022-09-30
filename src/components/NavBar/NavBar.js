import React, {useState, useEffect} from 'react'
import {Outlet, Link} from 'react-router-dom'
import { Button } from '../Button/Button'
import './NavBar.css';
import SchoolIcon from '@mui/icons-material/School';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Tusclases.com <SchoolIcon className='fab fa-typo3'></SchoolIcon>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/cursos' className='nav-links' onClick={closeMobileMenu}>
                            Cursos
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/nosotros' className='nav-links' onClick={closeMobileMenu}>
                            Nosotros
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/cursosprofesor' className='nav-links' onClick={closeMobileMenu}>
                            CursosProfesor
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle={'btn--outline'}>SIGN UP</Button>}
            </div>
        </nav>

        <Outlet />
    </>
  )
}

export default NavBar
import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import './NavBar.css';
import SchoolIcon from '@mui/icons-material/School';

export default function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    const CerrarSesion = () => {
        JSON.parse(localStorage.clear());
    };

    window.addEventListener('resize', showButton);

    if (localStorage.getItem("email") == null) {
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
                                <Link to='/nosotros' className='nav-links' onClick={closeMobileMenu}>
                                    Nosotros
                                </Link>
                            </li>
                        </ul>
                        {button && <Button buttonStyle={'btn--outline'}>Iniciar Sesión</Button>}
                    </div>
                </nav>

                <Outlet />
            </>
        )
    } else {
        return JSON.parse(localStorage.getItem("perfil") == false) ? (
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
                            <Link to='/curso' className='nav-links' onClick={closeMobileMenu}>
                                Cursos
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/nosotros' className='nav-links' onClick={closeMobileMenu}>
                                Nosotros
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle={'btn--outline'} onClick={CerrarSesion}>Cerrar Sesión</Button>}
                </div>
            </nav>
        ) : (
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
                            <Link to='/nosotros' className='nav-links' onClick={closeMobileMenu}>
                                Nosotros
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cursosprofesor' className='nav-links' onClick={closeMobileMenu}>
                                CursosProfesor
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle={'btn--outline'} onClick={CerrarSesion}>Cerrar Sesión</Button>}
                </div>
            </nav>
        )

    }
}
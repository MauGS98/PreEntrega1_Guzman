import { useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

function Navbar () {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classlist.toggle("responsiveNav")
    }

    return (
        <header>
            <a href="./index.html">
                <img className='logoImg' src="./src/assets/placaBlanca.svg" alt="LOGO" />
            </a>
            <nav ref={navRef}>
                <a href="#">
                    inicio
                </a>
                <a href="#">
                    inventario
                </a>
                <a href="#">
                    quienes somos
                </a>
                <a href="#">
                    contacto
                </a>
                <button className='navButton navCloseButton' onClick={showNavbar}>
                    <i className="bi bi-caret-up-fill"></i>
                </button>
            </nav>
            <button className='navButton navOpenButton' onClick={showNavbar}>
                <i className="bi bi-caret-down-fill"></i>
            </button>
        </header>
    )
}

export default Navbar;
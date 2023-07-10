import { useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'

function Navbar () {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classlist.toggle("expandedNav")
    }

    return (
        <header>
            <a href="./index.html">
                <img src="./src/assets/placaBlanca.svg" alt="LOGO" />
            </a>
            <nav ref={navRef}>
                <a href="#">
                    Inicio
                </a>
                <a href="#">
                    Inventario
                </a>
                <a href="#">
                    Quienes somos
                </a>
                <a href="#">
                    Contacto
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
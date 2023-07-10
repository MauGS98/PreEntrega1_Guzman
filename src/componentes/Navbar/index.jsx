import { useState } from 'react';
import Hamburger from 'hamburger-react';
import CartWidget from '../CartWidget';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar () {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }

    const [isOpen, setOpen] = useState(false)

    return (
        <header>
            <a href="./index.html">
                <img className='logoImg' src="./src/assets/placaBlanca.svg" alt="LOGO" />
            </a>
            <nav className={`links ${clicked ? 'active' : ''}`}>
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
            </nav>
            <div className="navButton" onClick={handleClick}>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </div>
            <div className="cart">
                <CartWidget numberOfItems = "2"/>
            </div>
        </header>
    )
}

export default Navbar;
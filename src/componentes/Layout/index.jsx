import Navbar from "../navbar"
import Greeting from "../Greeting";

function Layout () {
    return (
        <>
            <Navbar/>
            <main>
                <Greeting/>
            </main>
            <footer>
                <a href="#">Enlace 1</a>
                <a href="#">Enlace 2</a>
                <a href="#">Enlace 3</a>
                <p className="copyright">&copy; 2023 Crimson Motorcycle Garage</p>
            </footer>
        </>
    )
}

export default Layout;

import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav>
                <ul className="flex justify-evenly text-white gap-12">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/headphones">HEADPHONE</Link>
                    </li>
                    <li>SPEAKERS</li>
                    <li>EARPHONES</li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
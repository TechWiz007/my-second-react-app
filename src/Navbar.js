import { Link } from "react-router-dom";
import About from "./About";

function Navbar() {
    return (
        <>
            <Link to={"./About.js"}>
                <h1>About</h1>
            </Link>
            <Link to={"./Portfolio.js"}>
                <h1>Portfolio</h1>
            </Link>
            <Link to={"./Calc.js"}>
                <h1>Calculator</h1>
            </Link>
        </>
    );
}

export default Navbar;
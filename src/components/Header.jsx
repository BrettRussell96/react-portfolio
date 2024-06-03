import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div id="headerBranding">
                <h2>Brett Russell. Portfolio</h2>
            </div>
            <nav id="headerNavbar">
                <NavLink to={"/"} className="">Home</NavLink>
                <NavLink to={"/"} className="">About</NavLink>
                <NavLink to={"/"} className="">Skills</NavLink>
                <NavLink to={"/"} className="">Projects</NavLink>
            </nav>
        </header>
    )
}
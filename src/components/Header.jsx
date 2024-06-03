import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div id="headerBranding">
                <h2>Brett Russell. Portfolio</h2>
            </div>
            <nav id="headerNavbar">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/"}>About</NavLink>
                <NavLink to={"/"}>Skills</NavLink>
                <NavLink to={"/"}>Projects</NavLink>
            </nav>
        </header>
    )
}
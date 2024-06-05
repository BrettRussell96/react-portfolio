import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div id="headerBranding">
                <h2>Brett Russell. Portfolio</h2>
            </div>
            <nav id="headerNavbar">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/skills"}>Skills</NavLink>
                <NavLink to={"/projects"}>Projects</NavLink>
            </nav>
        </header>
    )
}
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
    return (
        <div className="Container" style={{ padding: 0 }}>
            <Nav>
                <NavMenu>
                    <NavLink className="menu-item" to="projects">
                        Projects
                    </NavLink>
                    <NavLink className="menu-item" to="qualification">
                        Qualification
                    </NavLink>
                    <NavLink className="menu-item" to="about">
                        About
                    </NavLink>
                    <NavLink className="menu-item" to="contact">
                        Contact
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <a
                        className="btn PrimaryBtn"
                        href="https://drive.google.com/file/d/1-AOs17968_jKTLRn8tGoFiaMiHy7JLcl/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </NavBtn>
                <Bars onClick={toggle} />
            </Nav>
        </div>
    );
};

export default Header;

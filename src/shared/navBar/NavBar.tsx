import React from 'react';
import './navBar.css';

interface NavLink {
    label: string;
    href: string;
}

interface NavBarProps {
    links: NavLink[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
    return (
        <nav className="nav">
            <span className="nav-links">
                {links.map((link, index) => (
                    <a key={index} href={link.href} className="nav-link">
                        {link.label}
                    </a>
                ))}
            </span>
        </nav>
    );
};

export default NavBar;
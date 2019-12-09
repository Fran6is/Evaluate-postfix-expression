import React from 'react';

function Header (props)
{
    return (
        <nav className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
            </div>
        </nav>
    );
}
Header.defaultProps = {title: "No title"};

export default Header;
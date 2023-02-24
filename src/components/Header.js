import React from 'react';


function Header({name ,title}){
    return(
        <div>
            <h1>Header</h1>
            <p>Hello {name}</p>
            <p>this is header {title}</p>
        </div>
    )
}
export default Header;
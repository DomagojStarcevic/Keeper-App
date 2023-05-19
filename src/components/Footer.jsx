import React from 'react';
import ReactDOM from 'react-dom'



function Footer(){
    const year = new Date().getFullYear() 
    return <footer>
        <p>
            Copyright &copy; {year}
        </p>
    </footer>
}

export default Footer
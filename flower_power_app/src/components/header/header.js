import React from 'react';
import './header.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faShoppingCart } from  "../path/to/node_modules/@fortawesome/fontawesome-free-solid";
//import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

class Header extends React.PureComponent {
render(){
    console.log('render Header');
    return(
        <header className="App-header">
          <h4 className="logo-text">Flower power app</h4>
        </header>
    )
}
}
export default Header;
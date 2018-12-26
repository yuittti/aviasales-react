import React, { Component } from 'react';
import logo1 from './logo.svg';

class Logo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="hello">
                <img src={logo1} alt="1"/>
            </div>
        );
    }
}
 
export default Logo;
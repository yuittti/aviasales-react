import React, { Component } from 'react';
import Logo from '../Logo';
import MainForm from '../MainForm';
import classes from './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className={ classes.HeaderWrapper }>
                <div className="container">
                    <Logo />
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-1 col-lg-10">
                            <div className={ classes.HeaderTxt }>
                                <h1 className={ classes.HeaderTitle }>Поиск дешевых авиабилетов</h1>
                                <h2 className={ classes.HeaderSubtitle }>Лучший способ купить авиабилеты дешево</h2>
                                <h3>hello</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <MainForm />
            </header>
        )
    }
}

export default Header;
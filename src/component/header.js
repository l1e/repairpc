import React,{Fragment,Component} from 'react';
import Menu from  '../component/Menu';
class Header extends  Component{
    render(){
        return(
            <header className='header'>
                <Menu />
            </header>
        )
    }
}


export default Header;

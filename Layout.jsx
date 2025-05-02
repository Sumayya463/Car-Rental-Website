import React from 'react';
import Navbar from './/../NavBar/Navbar';
import Footer from './/../Footer/Footer';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div className='layout-container'>
            {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;

import React from 'react';
import {Routes, Link, Route} from 'react-router-dom'
import MainPage from './MainPage';
import Collections from './Collections';
import Shops from './Shops';
import Wishlist from './Wishlist';
import Shop from "./shop";

const Header = () => {
    return (
        <div className="header">
            <div className="header__header-top">BUY TWO, GET ONE FOR FREE</div>

            <div className="container">

                <nav className="header__nav">
                    <ul className="header__ul">
                        <li><Link to='/' className="li">ABOUT US</Link></li>
                        <li><Link to='/collections' className="li">COLLECTIONS</Link></li>
                        <li>MIKIMOTO</li>
                        <li><Link to='/shops' className="li">SHOPS</Link></li>
                        <li><Link to='/wishlist' className="li">Wish List</Link></li>
                    </ul>
                </nav>
            </div>


            <Routes>
                <Route exact path="/" element={<MainPage/>}/>
                <Route path="/shops" element={<Shops/>}>
                </Route>
                <Route path="/shop" element={<Shop/>}/>

                <Route path="/collections" element={<Collections/>}/>
                <Route path="/wishlist" element={<Wishlist/>}/>
            </Routes>
        </div>
    );
};

export default Header;



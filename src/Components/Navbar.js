import React, { useContext } from 'react'
//import logo from '../images/ecommerce.svg'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'

//import nav from 'react-bootstrap/Nav';
//import Navbars from 'react-bootstrap/Navbar';

// icons
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
        <>

            <nav class="navbar navbar-expand-lg bg-dark ">
                <div class="container-fluid ">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0 ">
                            <li class="nav-item ">
                                {!user && <div className='rightside'>
                                    <span><Link to="login" className='navlink  nav-link active text-white'>{user} <FaUserAlt className='iconssvg' /></Link></span>
                                </div>}
                                {user && <div className='rightside'>
                                    <span><Link to="/" className='navlink'>{user}</Link></span>
                                    <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                                    <span className='no-of-products'>{totalQty}</span>
                                    <span><button className='logout-btn text-white' onClick={handleLogout}>Logout</button></span>
                                </div>}
                            </li>

                            <li class="nav-item ">
                                <a class="nav-link active text-white " aria-current="page" href="/cart">CART <FaShoppingBasket className='iconssvg' /></a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link active text-white" aria-current="page" href="/cashout">CHECKOUT <FaShoppingCart className='iconssvg' /></a>
                            </li>


                            {user && <div className='rightside'>
                                <span><Link to="/" className='navlink'>{user}</Link></span>
                                <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                                <span className='no-of-products'>{totalQty}</span>
                                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
                            </div>}

                        </ul>

                    </div>
                </div>
            </nav >

            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand text-dark" href="/"><b>KEYBOARD WORLD</b></a>
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-dark" aria-current="page" href="/">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-dark" aria-current="page" href="/products">PRODUCT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-dark" aria-current="page" href="/addproducts"> ADD PRODUCT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-dark" aria-current="page" href="!#">ABOUT</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-dark" href="!#">CONTACT</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

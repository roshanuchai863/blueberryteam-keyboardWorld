import React from 'react'

// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
//import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function footer() {
    return (
        <>
            <div className='gap-8	'>

            </div>

            <div class="d-flex flex-column h-100 ">
                <footer class="footer w-100 py-4 flex-shrink-0 bg-dark ">
                    <div class="container py-4">
                        <div class="row gy-4 gx-5">
                            <div class="col-lg-4 col-md-6">
                                <h5 class="h4 text-white"><strong>Reach us</strong></h5>
                                <form action="!#">
                                    <div class="input-group mb-3">
                                        <input class="form-control" type="text" placeholder="abe@email.com" />

                                    </div>
                                    <p class="small text-muted mb-0"><a class="text-primary" href="!#"><button type="button" class="btn btn-light">SUBSCRIBE NOW</button></a></p>
                                </form>

                            </div>
                            <div class="col-lg-4 col-md-7">
                                <h5 class="text-white "><b>IMPORTANT STUFF</b></h5>
                                <ul class="list-unstyled text-muted ms-auto  ">
                                    <li ><a href="!#" className='text-white text-decoration-none '>Contact Us</a></li>
                                    <li><a href="!#" className='text-white text-decoration-none'>Freight & Shipping</a></li>
                                    <li><a href="!#" className='text-white text-decoration-none'>Return, Terms and conditions</a></li>
                                    <li><a href="!#" className='text-white text-decoration-none'>What is a Group Buy?</a></li>
                                    <li><a href="!#" className='text-white text-decoration-none'>Pre-Orderes & Retails Sales</a></li>
                                    <li><a href="!#" className='text-white text-decoration-none'>Terms of Serive</a></li>
                                    <li><a href="!#" className='text-white text-decoration-none'>Refund policy</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6">
                                <h5 class="text-white mb-3"><strong>FOLLOW US</strong></h5>
                                <a href="!#" className='text-white col-lg-4 fas fa-camera fa-2x '><FaFacebook /></a>
                                <a href="!#" className='text-white col-lg-4'><FaInstagram /></a>
                                <a href="!#" className='text-white col-lg-4'><FaYoutube /></a>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </>

    )
}



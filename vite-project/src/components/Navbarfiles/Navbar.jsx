import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    
    return (
               <nav>
            <div className="nav-container">
                {/* navbar-logo */}
                <div className="nav-img">
                    <Link to='/'><img src='/src/assets/home-assets/navbar-logo.png' /></Link>
                </div>
                {/* nav links */}
                 <ul>
                    <li ><Link to='/' className='fst-italic'>Home</Link></li>
                    <li ><Link to="/Men" className='fst-italic'>Men</Link></li>
                    <li ><Link to="/Women" className='fst-italic'>Women</Link></li>
                    <li ><Link to="/Sale" className='fst-italic fw-bold'>Sale</Link></li>
                </ul>
                <div className="navbar-icons d-flex ">
                    <Link to='#'><div className="cart-icon-svg d-flex flex-column">
                    <span className="product-count">0</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    <span>Cart</span>
                    </div>
                    </Link>
                    <Link to='/Signin'><div className="signin-icon-svg d-flex flex-column">
                    <svg  xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                    <span>Signin</span>
                    </div>
                    </Link>
                    <Link to='/Track'target='_blank'>
                    <div className="delivery-icon-svg d-flex flex-column">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 640 512"><path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/></svg>
                    <span>Track</span>
                    </div>
                    </Link>
                </div>
            </div>
        </nav>
        

    )
}

export default Navbar
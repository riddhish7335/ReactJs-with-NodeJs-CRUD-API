import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">REACT-NODE-CRUD</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="add-new-product">Add New Product</Link>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
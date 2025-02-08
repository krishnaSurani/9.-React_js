import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Nav() {
  return (
    <div>
      <Navbar>
      <Container>
        <Navbar.Brand href="#home">Ryst.</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <input type="text" placeholder=' Search'  className='px-5 rounded-pill border border-secondary-subtle'/>
            <i className="fa-regular fa-heart ms-3"></i>
            <i className="fa-solid fa-cart-plus ms-3"></i>
            <button className='rounded-pill ms-3 px-3 bg-white border border-secondary-subtle'>LOG IN</button>
            <button className="rounded-pill ms-3 px-3 bg-white border border-secondary-subtle">MENU</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Nav
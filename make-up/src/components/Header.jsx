import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  render() {
    return (
      <header>
        <h1>STEPHORA</h1>
        <nav>
          <Link to="/blush">Blush </Link>
          <Link to="/lipstick">Lipstick </Link>
          <Link to="/bronzer">Bronzer </Link>
          <Link to="/eyebrow">Eyebrow</Link>
          <br/>
          <Link to="/eyeliner">Eyeliner</Link>
          <Link to="/eyeshadow">Eyeshadow</Link>
          <Link to="/foundation">Foundation</Link>
          <Link to="/mascara">Mascara</Link>
        </nav>
      </header>

    )
  }
}

export default Header;
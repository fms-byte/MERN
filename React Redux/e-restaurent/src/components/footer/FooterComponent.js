import React from 'react';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>Bohubrihi Restaurent &#169; Copyright 2023 Developed By <Link to="https://www.github.com/fms-byte" target="_blank" style={{textDecoration: 'none'}}>fms-byte</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent;
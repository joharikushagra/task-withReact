import React from 'react'
import '../css/Card.css';

function Card({ title, url, options}) {
    return (
        <div className="first">
        {url && <img src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/52550/70338/1594548819116_IMG_20200607_145412__68789.1594913303.jpg?c=2&imbypass=on" alt={title} />}

        <div className="card-text">
          <p className="text-head">{title.split(" ")[0]}</p>
         {options &&  <p className="text-content">
            <span>10 Questions</span>
            <span>2:30 hours</span>
          </p>}
        </div>
      </div>
    )
}

export default Card

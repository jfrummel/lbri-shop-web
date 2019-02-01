import React, { Component } from 'react';
import './product.css';

class Product extends Component {



    render() {
        return (
            <div className="card product-card">
                <img className="card-img-top img-fluid prod-img" src={this.props.product.imgUrl} alt="Product"></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product.title}</h5>
                        <p className="card-text">Price: {this.props.product.price}</p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
            </div>
        );
    }
}

export default Product;
import React, { Component } from 'react';
import './product.css';
import DataService from '../services/data-service';


let ds = new DataService();

class Product extends Component {
    constructor(props){
        super(props);

    // Binds
    this.addToCart = this.addToCart.bind(this);
    }

    addToCart = () => {
        ds.addShoppingCartItem(this.props.product);
    }


    render() {
        return (
            <div className="card product-card">
                <img className="card-img-top img-fluid prod-img" src={this.props.product.imgUrl} alt="Product"></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product.title}</h5>
                        <p className="card-text">Price: {this.props.product.price}</p>
                        <a href="#" className="btn btn-primary" onClick={() => this.addToCart()}>Add to Cart</a>
                    </div>
            </div>
        );
    }
}

export default Product;
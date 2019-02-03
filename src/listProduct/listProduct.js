import React, {Component} from 'react';
import './listProduct.css';

class ListProduct extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li className='list-group-item cart-list'>
                <a href='#' className='btn'>X</a>
                <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
            </li>
        );
    }
}

export default ListProduct;
import React, {Component} from 'react';
import './shoppingCart.css';
import ListProduct from '../listProduct/listProduct';
import DataService from '../services/data-service';
import NotificationService, {NOTIF_SHOPPINGCART_CHANGED} from '../services/notification-service';

let ns = new NotificationService();

class ShoppingCart extends Component {

    constructor(props){
        super(props);
        this.state = {shoppingCart:[]};

    // Bind
        this.createShoppingCart = this.createShoppingCart.bind(this);
        this.onShoppingCartChanged = this.onShoppingCartChanged.bind(this);
    }

    componentDidMount() {
        ns.addObservers(NOTIF_SHOPPINGCART_CHANGED, this, this.onShoppingCartChanged);
    }

    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_SHOPPINGCART_CHANGED);
    }

    onShoppingCartChanged(newShoppingCart) {
        this.setState({shoppingCart: newShoppingCart});
    }

    createShoppingCart = () => {
        let list = this.state.shoppingCart.map((product)=>
           <ListProduct product={product} key={product._id}/>
        );
        return (list);
    }

    render() {
        return (
            <div className='card shopping-card'>
                <div className="card-body">
                    <h5 className="card-title"><i className="fas fa-shopping-cart"></i>  Shopping Cart</h5>
                    <ul className='list-group list-group-flush'>
                        {this.createShoppingCart()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
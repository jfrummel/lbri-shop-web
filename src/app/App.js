import React, { Component } from 'react';
import lbriLogo from './/lbriLogo.jpg';
import './App.css'
import Product from '../product/product'
import NavBar from '../navbar/navbar';
import ShoppingCart from '../shoppingCart/shoppingCart';

//Services
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {products:[]};

    // Binds
      this.loadData = this.loadData.bind(this);
      this.productList = this.productList.bind(this);

      this.loadData();
    }

    loadData = () => {
        let self = this;
        http.getProducts().then(data => {
            self.setState({products: data});
        }, err => {

        });
    };

    productList = () => {
        let list = this.state.products.map((product) =>
            <div className='col-sm-4' key={product._id}>
                <Product product={product} />
            </div>
        );
        return (list);
    };



    render() {
        return (
            <div className="App">
                <NavBar/>
                <header className="App-header pt-3">
                    <img src={lbriLogo} className="App-logo" alt="logo" />
                    <p>
                        Lbri by Tammy
                    </p>
                </header>
                <div className="container-fluid App-main">
                    <div className='row pt-3 pb-4'>
                        <div className='col-sm-9'>
                            <div className='row'>
                                {this.productList()}
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <ShoppingCart/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

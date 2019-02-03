import NotificationService, {NOTIF_SHOPPINGCART_CHANGED} from './notification-service';

let instance = null;
let shoppingCart = [];

let ns = new NotificationService();

class DataService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    addShoppingCartItem = item => {
        shoppingCart.push(item);
        ns.postNotification(NOTIF_SHOPPINGCART_CHANGED, shoppingCart);
    }

    removeShoppingCartItem = item => {
        for (let x = 0; x < shoppingCart.length; x++) {
            if (shoppingCart[x]._id === item._id) {
                shoppingCart.splice(x, 1);
                ns.postNotification(NOTIF_SHOPPINGCART_CHANGED, shoppingCart);
                break;
            }
        }
    }
}

export default DataService;
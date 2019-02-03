export const NOTIF_SHOPPINGCART_CHANGED = 'notif_shoppingcart_changed';

let instance = null;
let observers = {};


class NotificationService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    postNotification = (notifName, data) => {
        let obs = observers[notifName];

        for (let x = 0; x < obs.length; x++) {
            let obj = obs[x];
            obj.callBack(data);
        }
    }

    removeObserver = (observer, notifName) => {
        let obs = observers[notifName];

        if (obs) {
            for (let x = 0; x < obs.length; x++) {
                if (observer === obs[x].observer) {
                    obs[x].splice(x, 1);
                    break;
                }
            }
        }
    }

    addObservers = (notifName, observer, callBack) => {
        let obs = observers[notifName];

        if (!obs) {
            observers[notifName] = [];
        }

        let obj = {observer: observer, callBack: callBack};
        observers[notifName].push(obj);
    }
}

export default NotificationService;
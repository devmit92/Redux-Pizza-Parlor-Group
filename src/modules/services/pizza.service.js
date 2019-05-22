import axios from 'axios';


const getOriginalPizzaList = () => {
    return axios({
        method: 'GET',
        url: '/api/pizza'
        })
    }

const addPizzaToOrderTable = (pizzaObject) => {
    return axios.post('/api/order', pizzaObject);
}

const displayOrderTable = (pizzaObject) => {
    return axios({
        method: 'GET',
        url: '/api/order'
        })
}

export {
    addPizzaToOrderTable,
    getOriginalPizzaList,
    displayOrderTable
}
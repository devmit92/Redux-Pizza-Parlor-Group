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


const deletePizzaOrder = () => {
    return axios({
        method: 'DELETE',
        url: '/api/order'
    })
}

export {
    deletePizzaOrder,
    addPizzaToOrderTable,
    getOriginalPizzaList,
}
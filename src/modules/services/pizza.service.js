import axios from 'axios';

const getOriginalPizzaList = () => {
    return axios({
        method: 'GET',
        url: '/api/pizza'
        })
    }

const addPizzaToOrderTable = () => {
    return axios.post('/api/order', addPizzaToOrderTable);
}

export {
    addPizzaToOrderTable,
    getOriginalPizzaList,
}
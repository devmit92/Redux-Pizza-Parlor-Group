import axios from 'axios';

const getOriginalPizzaList = () => {
    return axios({
        method: 'GET',
        url: '/api/pizza'
        })
    }

export {
    getOriginalPizzaList,
}
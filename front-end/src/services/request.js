import api from './api';

export default {
    async create(route, data){
        return api.post(route, data);
    },
}
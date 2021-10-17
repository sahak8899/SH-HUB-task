import { saveUserList } from '../store/action-creators';
import { API } from '../core/constants';
import axios from 'axios';
import store from '../store/store';

export const AppController = {};


const getUsers = async () => {
    await axios.get(API)
        .then(response => store.dispatch(saveUserList(response.data)))
        .catch(err => console.log(err));
}

export const addUser = async (body) => {
    await axios({
        url: API,
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
        data: body,
    }).then(response => store.dispatch(saveUserList(response.data))).catch(err => console.log(err))
}






AppController.init = async () => {
    await getUsers()
}
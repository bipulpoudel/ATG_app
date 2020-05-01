import axios from 'axios';

export const userLogin = async (email,password) =>{
    const res = await axios.post(`https://www.atg.party/ws-login-user?email=${email}&password=${password}&device_name=asd`);
    return res.data;
}

export const loadPost = async (id) =>{
    const res = await axios.get(`https://api.jsonbin.io/b/${id}`);
    return (res.data);
}
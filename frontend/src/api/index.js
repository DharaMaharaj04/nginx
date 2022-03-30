import axios from 'axios';

const url = 'http://18.235.62.46:9000/patients';

export const fetchPosts = () => axios.get(url);
export const createPatient = (newPatient) => axios.post(url, newPatient);
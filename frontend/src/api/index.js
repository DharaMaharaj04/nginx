import axios from 'axios';

const url = 'http://54.175.49.226:9000/patients';

export const fetchPatient = () => axios.get(url);
export const createPatient = (newPatient) => axios.post(url, newPatient);
export const deletePatient = (id) => axios.delete(`${url}/${id}`);
export const editPatient = (id, editPatient) => axios.patch(`${url}/${id}`, editPatient);

import {
  ADD_PATIENT,
  AddPatientAction,
  DELETE_PATIENT,
  DeletePatientAction,
  EDIT_PATIENT,
  EditPatientAction,
  SET_PATIENTS,
  SetPatientAction
} from './types';

import { IPatient } from '../../interfaces/patient';
import axios from 'axios';
import * as api from '../../api/index';

export const setPatients = (patients: IPatient[]): SetPatientAction => ({
  type: SET_PATIENTS,
  payload: patients
});

export const addPatient = (patient: IPatient) => async (dispatch) => {
  try {
    const { data } = await api.createPatient(patient);

    dispatch({ type: ADD_PATIENT, payload: data });
  } catch (error) {
    console.log("Error on add patient");
  }
};

export const deletePatient = (id: string): DeletePatientAction => ({
  type: DELETE_PATIENT,
  id
});

export const editPatient = (patient: IPatient): EditPatientAction => ({
  type: EDIT_PATIENT,
  payload: patient
});

export const fetchPatients = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log(data);
    dispatch({ type: SET_PATIENTS, payload: data });
  } catch (error) {
    console.log("Error on fetch Patients");
  }
};

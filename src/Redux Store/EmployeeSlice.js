//REDUCER
const initialState = [];

export function employeesReducer(state = initialState, action) {
    switch (action.type) {
      case 'employees/employeesLoaded':
        return action.payload;
      case 'employees/employeeDeleted':
        return state.filter(employee => employee.id !== action.payload);
      case 'employees/employeeAdded':
        return [...state, action.payload]
      default:
        return state;
    }
};

//API calls go here
import axios from "axios";
//PATH (should be where your server is running)
const PATH = "http://localhost:5001/api/employees";

//Thunk 
export const fetchEmployees = () => async (dispatch) => {
  try {
    let response = await axios.get(`${PATH}`);
    dispatch({type: 'employees/employeesLoaded', payload: response.data});
  } catch(error) {
    console.error(error);
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
    try {
        await axios.delete(`${PATH}/${id}`);
        dispatch({type: 'employees/employeeDeleted', payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const addEmployee = (employee) => async (dispatch) => {
  try {
    let response = await axios.post(`${PATH}`, employee);
    dispatch({type: 'employees/employeeAdded', payload: response.data })
  } catch (error) {
    console.log(error)
  }
}
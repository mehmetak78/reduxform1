

import {combineReducers} from "redux";

import {reducer as reduxForm} from "redux-form";
import accountReducer from "./accountReducer";

export default combineReducers( {
        account: accountReducer,
        form: reduxForm
    }
);
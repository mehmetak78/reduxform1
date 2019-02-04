
import React from 'react'
import { Values } from "redux-form-website-template";

import SyncValidationForm from "./SyncValidationForm";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


class ValidationPage extends React.Component {
    handleSubmit = values => {
        console.log(values);
        this.showResults(values);
    };
    render() {
        return (
            <div>
                <SyncValidationForm onSubmit={this.handleSubmit} />
                <Values form="syncValidationForm" />
            </div>
    )


    }
    showResults = async (values) => {
        await sleep(500); // simulate server latency
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }

}

export default ValidationPage;
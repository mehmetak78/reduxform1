import React from 'react'
import { Values } from "redux-form-website-template";

import FieldArrayForm from "./FieldArrayForm";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


class FieldArrayPage extends React.Component {
    handleSubmit = values => {
        console.log(values);
        this.showResults(values);
    };
    render() {
        return(
            <div>
                <FieldArrayForm onSubmit={this.handleSubmit} />
                <Values form="fieldArrayForm" />
            </div>
        )
    }

    showResults = async (values) => {
        await sleep(500); // simulate server latency
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }

}

export default FieldArrayPage;
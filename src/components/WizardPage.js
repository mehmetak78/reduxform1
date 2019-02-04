
import React from 'react'
import { Values } from "redux-form-website-template";

import WizardForm from "./WizardForm";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


class WizardPage extends React.Component {
    handleSubmit = values => {
        console.log(values);
        this.showResults(values);
    };
    render() {
        return (
            <div>
                <WizardForm onSubmit={this.handleSubmit} />
                <Values form="wizard" />
            </div>
        )


    }
    showResults = async (values) => {
        await sleep(500); // simulate server latency
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }

}

export default WizardPage;
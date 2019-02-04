
import React from 'react'
import { Values } from "redux-form-website-template";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MaterialUiForm from "./MaterialUIForm";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


class WizardPage extends React.Component {
    handleSubmit = values => {
        console.log(values);
        this.showResults(values);
    };
    render() {
        return (

            <div>
                <p> Don't forget to add style in App.css </p>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div style={{ padding: 15 }}>
                        <h2>Material UI Example</h2>
                        <MaterialUiForm onSubmit={this.showResults} />
                        <Values form="MaterialUiForm" />
                    </div>
                </MuiThemeProvider>
            </div>
        )


    }
    showResults = async (values) => {
        await sleep(500); // simulate server latency
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }

}

export default WizardPage;
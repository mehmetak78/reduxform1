import React from 'react'
import { Values } from "redux-form-website-template";

import AccountForm from "./AccountForm";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


class AccountPage extends React.Component {
    handleSubmit = values => {
        console.log(values);
        this.showResults(values);
    };
    render() {
        return(
        <div>
            <AccountForm onSubmit={this.handleSubmit} />
            <Values form="accountForm" />
        </div>
        )
    }

    showResults = async (values) => {
        await sleep(500); // simulate server latency
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }

}

export default AccountPage;
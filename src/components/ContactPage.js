import React from 'react'
import ContactForm from './ContactForm'

class ContactPage extends React.Component {
    handleSubmit = values => {
        console.log(values)
    };
    render() {
        return <ContactForm onSubmit={this.handleSubmit} />
    }
}

export default ContactPage;
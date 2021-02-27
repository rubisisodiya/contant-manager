import React from 'react'
import axios from'../../config/axios'
import ContactForm from "./Form"
class NewContact extends React.Component{
    handleSubmit = (formData) =>{
        console.log('contact new component',formData)
        axios.post('/contacts', formData)
            .then(() => this.props.history.push('/contacts'))
            .catch(err => console.log(err))
    }
    render(){
        return (
            <div className="container">
                <ContactForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default NewContact
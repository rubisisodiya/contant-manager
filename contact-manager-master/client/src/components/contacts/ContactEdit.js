import React from 'react'
import axios from'../../config/axios'
import ContactForm from "./Form"
class EditContact extends React.Component{
    constructor(){
        super()
        this.state={
            contact:{}
        }
    }
    handleSubmit = (formData) =>{
        console.log('contact edit component',formData)
        axios.put(`/contacts/${this.state.contact._id}`, formData)
            .then(() => this.props.history.push(`/contacts/${this.state.contact._id}`))
            .catch(err => console.log(err))
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/contacts/${id}`)
            .then(res=>this.setState(()=>({ contact : res.data })))
            .catch(err=>console.log(err))
    }
    render(){
        return (
            <div className="container">
                <ContactForm handleSubmit={this.handleSubmit} contact={this.state.contact} />
            </div>
        )
    }
}
export default EditContact
import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'
class ContactsList extends React.Component {
    constructor(){
        super()
        this.state={
            contacts:[]
        }
    }
    componentDidMount(){
        axios.get("/contacts")
            .then(res=> this.setState(()=>({ contacts:res.data })))
            .catch(err=> console.log(err))
    }
    render(){
        return (
                <div className="container ">
                    {    this.state.contacts.length === 0 ? (<p> No contacts found. Add your first Contact</p>) : 
                        (
                            <div> 
                                <h2 align="center">Listing Contacts - {this.state.contacts.length} </h2>
                                <ul className="list-group">
                                    { this.state.contacts.map(contact => {
                                        return (
                                            <div key={contact._id} >
                                            <Link to={`/contacts/${contact._id}`}><li  className="list-group-item list-group-item-dark m-1">{contact.name}</li></Link>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    }
                    <div  className="m-2">
                        <Link to="/contacts/new">Add Contact</Link>
                    </div>
                </div>
          )
    }
}
  export default ContactsList
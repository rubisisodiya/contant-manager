import React from 'react'
import axios from'../../config/axios'
import NoteForm from "./Form"
class EditNote extends React.Component{
    constructor(){
        super()
        this.state={
            note:{}
        }
    }
    handleSubmit = (formData) =>{
        axios.put(`http://localhost:3005/notes/${this.state.note._id}`, formData)
            .then(() => this.props.history.push(`/notes/${this.state.note._id}`))
            .catch(err => console.log(err))
    }
    componentDidMount(){
        const id = this.props.match.params.id
        console.log(id)
        axios.get(`http://localhost:3005/notes/${id}`)
            .then(res=>this.setState(()=>({ note : res.data })))
            .catch(err=>console.log(err))
    }
    render(){
        return (
            <div className="container">
                <NoteForm handleSubmit={this.handleSubmit} note={this.state.note} />
            </div>
        )
    }
}
export default EditNote
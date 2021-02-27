import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'
import { Card, CardBody, CardText, CardHeader} from 'reactstrap'
class ShowContact extends React.Component{
    constructor(){
        super()
        this.state={
            contact:{}
        }
    }
    handleDelete = () =>{
        const confirmDelete= window.confirm('Are you sure?')
        if(confirmDelete){
            axios.delete(`/contacts/${this.state.contact._id}`)
                .then(() => this.props.history.push('/contacts'))
                .catch(err=>window.alert(err))
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/contacts/${id}`)
            .then(res=>this.setState(()=>({ contact : res.data })))
            .catch(err=>console.log(err))
    }
    render(){
        return (
            <div className=" container text-danger">
                <Card className="text-center">
                    <CardHeader>Name- {this.state.contact.name}</CardHeader>
                    <CardBody>
                        <CardText>Email- {this.state.contact.email}</CardText>
                        <CardText>Mobile Number- {this.state.contact.mobile}</CardText>
                    </CardBody>
                    <Link to={`/contacts/edit/${this.state.contact._id}`}><button className="btn btn-primary btn-block">Edit</button></Link>
                    <button onClick={this.handleDelete}>Delete</button>
                    <Link to="/contacts"><button className="btn btn-primary btn-block">Back</button></Link>
                </Card>

            </div>
        )
    }
}
export default ShowContact
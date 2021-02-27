import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'
import { Card, CardBody,CardSubtitle, CardText, CardHeader} from 'reactstrap'
class ShowNote extends React.Component{
    constructor(){
        super()
        this.state={
            note:{}
        }
    }
    handleDelete = () =>{
        const confirmDelete= window.confirm('Are you sure?')
        if(confirmDelete){
            axios.delete(`http://localhost:3005/notes/${this.state.note._id}`)
                .then(() => this.props.history.push('/notes'))
                .catch(err=>window.alert(err))
        }
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
            <div className=" container text-dark">
                <Card   body inverse style={{ backgroundColor: '#222', borderColor: '#333' }} className="text m-1">
                    <CardHeader tag="h2">{this.state.note.title}</CardHeader>
                    <CardBody>
                        <CardText tag="h4">{this.state.note.body}</CardText>
                        <CardSubtitle >{this.state.note.tags}</CardSubtitle>
                    </CardBody>
                    <Link to={`/notes/edit/${this.state.note._id}`} className="btn btn-primary">Edit</Link>
                    <button onClick={this.handleDelete} className="btn btn-primary">Delete</button>
                    <Link to="/notes" className="btn btn-primary">Back</Link>
                </Card>

            </div>
        )
    }
}
export default ShowNote
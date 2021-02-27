import React from 'react'
import {Card, CardBody} from 'reactstrap'
class NotesForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:'',
            tags:[]
        }
    }
    componentWillReceiveProps(NextProps){
        console.log(NextProps)
        const { title, body, tags } = NextProps.note
        this.setState(()=>({
            title, body, tags
        }))
    }
    handleTitleChange = (e) => {
        const title= e.target.value
        this.setState(()=>({ title }))
    }
    handleBodyChange = (e) => {
        const body= e.target.value
        this.setState(()=>({ body }))
    }
    handleTagsChange = (e) => {
        const tags= e.target.value
        this.setState(()=>({ tags }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData ={
            title:this.state.title,
            body:this.state.body,
            tags:this.state.tags
        }
        this.props.handleSubmit(formData)
        this.setState(()=>({
            title:'', body:'', tags:[]
        }))
    }
    render(){
        return (
                <div>
                    <Card  className="m-5 bg-dark">
                        <form onSubmit={this.handleSubmit} className="form">
                            <CardBody>
                                <h2 className="m-3 text-center">Add New Note</h2>
                                <div className="form-group ml-5 mr-5">
                                    <label >Title:</label>
                                    <input className="form-control" type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title"/>
                                </div>

                                <div className="form-group ml-5 mr-5">
                                    <label >Body:</label>
                                    <textarea className="form-control"  rows="5" value={this.state.body} onChange={this.handleBodyChange} placeholder="Text goes here" />
                                </div>

                                <div className="form-group ml-5 mr-5">
                                    <label >Tags:</label>
                                    <input className="form-control" type="text" value={this.state.tags} onChange={this.handleTagsChange} placeholder="Enter tags"/>
                                </div>

                                <input type="submit" className="btn btn-primary ml-5"/>
                            </CardBody>
                        </form>
                    </Card>
                </div>
          )
    }
}
  export default NotesForm
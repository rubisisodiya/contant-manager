import React from 'react'
import {Card, CardBody} from 'reactstrap'
class ContactsForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            mobile:''
        }
    }
    componentWillReceiveProps(NextProps){
        const { name, email, mobile } = NextProps.contact
        this.setState(()=>({
            name, email, mobile
        }))
    }
    handleNameChange = (e) => {
        const name= e.target.value
        this.setState(()=>({ name }))
    }
    handleEmailChange = (e) => {
        const email= e.target.value
        this.setState(()=>({ email }))
    }
    handleMobileChange = (e) => {
        const mobile= e.target.value
        this.setState(()=>({ mobile }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData ={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
        this.props.handleSubmit(formData)
        this.setState(()=>({
            name:'', email:'', mobile:''
        }))
    }
    render(){
        return (
                <div>
                    <Card className="m-5 bg-dark" >
                        <form onSubmit={this.handleSubmit} className="form">
                            <CardBody>
                                <h2 className="m-3 text-center">Add Contact Information</h2>
                                <div className="form-group ml-5 mr-5">
                                    <label >Name:</label>
                                    <input className="form-control" type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="enter your name"/>
                                </div>

                                <div className="form-group ml-5 mr-5">
                                    <label >Email:</label>
                                    <input className="form-control" type="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="enter your email" />
                                </div>

                                <div className="form-group ml-5 mr-5">
                                    <label >Mobile:</label>
                                    <input className="form-control" type="text" value={this.state.mobile} onChange={this.handleMobileChange} placeholder="enter your mobile number"/>
                                </div>

                                <input type="submit" className="btn btn-primary ml-5"/>
                            </CardBody>
                        </form>
                    </Card>
                </div>
          )
    }
}
  export default ContactsForm
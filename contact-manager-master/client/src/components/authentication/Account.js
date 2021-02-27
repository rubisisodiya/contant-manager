import React from 'react'
import axios from '../../config/axios'
import  { MDBIcon }  from "mdbreact"
class Account extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            isLoaded:false
        }
    }
    componentDidMount(){
        axios.get("/users/account")
            .then(res=>{
                console.log(res.data.username)
                this.setState(()=> ({username:res.data.username,isLoaded:true}))
            })
            .catch(err=>console.log(err))        
    }
    render(){
        return(
            <div>{
                this.state.isLoaded && <h2 className="text-center" ><MDBIcon icon="user" /> {this.state.username}'s Profile </h2>
            }
            </div>
        )
    }
  }
  export default Account
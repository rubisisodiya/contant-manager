import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import  { MDBIcon }  from "mdbreact"
import Home from "./components/layouts/home"
import ContactList from "./components/contacts/ContactList"
import ContactNew from "./components/contacts/New"
import ContactShow from "./components/contacts/ContactShow"
import ContactEdit from "./components/contacts/ContactEdit"
import NoteList from "./components/notes/NoteList"
import NoteNew from "./components/notes/Notenew"
import NoteShow from "./components/notes/NotesShow"
import NoteEdit from "./components/notes/NotesEdit"
import Register from "./components/authentication/Register"
import Login from "./components/authentication/Login"
import Account from "./components/authentication/Account"
import axios from './config/axios'
import Logout from './components/authentication/Logout';
console.log(axios.defaults)
class App extends Component {
  constructor(){
    super()
    this.state={
      collapsed: true,
      isAuthenticated:!!localStorage.getItem('token')
    }
  }
  toggleNavbar =() =>{
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  handleIsAuthenticated=(bool)=>{
    this.setState(()=>({
      isAuthenticated:bool
    }))
  }
  render() {
    return (
      <BrowserRouter>
        <div className="jumbotron bg-warning text-center m-0 ">
          <h1></h1>
        </div>
        <div>
          <Navbar className="navbar navbar-expand-sm bg-dark navbar-dark ">
          <NavItem className="nav mr-4"><Link to="/" className="nav-link active" ><MDBIcon icon="home" /> Contact Manager </Link></NavItem>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                  <Collapse isOpen={!this.state.collapsed} navbar>
                  { this.state.isAuthenticated &&
                    <Nav navbar className="mr-auto">
                        <NavItem>
                          <Link to="/contacts" className="nav-link active" ><MDBIcon far icon="address-card" /> Contacts </Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/notes" className="nav-link active" ><MDBIcon icon="sticky-note" /> Notes </Link>
                        </NavItem>
                    </Nav>
                  }
                  { this.state.isAuthenticated ?

                        <Nav className='rightNav ml-auto' navbar>
                          <NavItem>
                            <Link to="/users/account" className="nav-link active" ><MDBIcon icon="user-alt" /> Account </Link>
                          </NavItem>
                          <NavItem>
                            <Link to="/users/logout" className="nav-link active" ><MDBIcon icon="sign-out-alt" /> Logout </Link>
                          </NavItem>
                        </Nav>
                        :
                        <Nav className='rightNav ml-auto' navbar>  
                          <NavItem>
                            <Link to="/users/login" className="nav-link active" ><MDBIcon icon="sign-in-alt" /> Login </Link>
                          </NavItem>
                          <NavItem>
                            <Link to="/users/register" className="nav-link active" ><MDBIcon icon="user-plus" /> Register </Link>
                          </NavItem>
                        </Nav>
                  }
                  </Collapse>
          </Navbar>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/contacts" component={ContactList} exact={true} />
            <Route path="/contacts/new" component={ContactNew} exact={true} />
            <Route path="/contacts/edit/:id" component={ContactEdit} />
            <Route path="/contacts/:id" component={ContactShow} />
            <Route path="/notes" component={NoteList} exact={true} />
            <Route path="/notes/new" component={NoteNew} exact={true} />
            <Route path="/notes/edit/:id" component={NoteEdit} exact={true} />
            <Route path="/notes/:id" component={NoteShow} />
            <Route path="/users/register" component={Register} exact={true} />
            <Route path="/users/login" render={()=><Login handleIsAuthenticated={this.handleIsAuthenticated} />} exact={true} />
            <Route path="/users/logout" render={(props)=><Logout props={props} handleIsAuthenticated={this.handleIsAuthenticated} />} exact={true}/>
            <Route path="/users/account" component={Account} exact={true} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;


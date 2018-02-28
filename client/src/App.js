import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import MapContainer from './components/MapContainer'
import Home from './components/Home'
import BusesList from './components/BusesList'
import ParentsList from './components/ParentsList'
import ParentNew from './components/ParentNew'
import ParentShow from './components/ParentShow'
import BusShow from './components/BusShow'
import LoginForm from './components/LoginForm'

import axios from 'axios'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  state = {
    parents: [],
    buses: [],
    isLoggedIn: false
  }

  componentWillMount(){
    this.getParents()
    this.getBuses()
  }

  isLoggedIn = () => {
    if (this.state.isLoggedIn === false){
      this.setState({isLoggedIn: true})
    }else{
      this.setState({isLoggedIn: false})
    }
  }

async getParents() {
    try{
      const res = await axios.get('/api/parents')
      const parents = res.data
      this.setState({parents: parents})
    }
    catch(err){
      console.log(err)
    }
  }
async getBuses() {
    try{
      const res = await axios.get('/api/buses')
      const buses = res.data
      this.setState({buses: buses})
    }
    catch(err){
      console.log(err)
    }
  }



  //(POST) Create a New Parent  
  async createParent(newParent) {

    try {
      const res = await axios.post('/api/parents', newParent)
      newParent = res.data
      const updatedParents = [...this.state.Parents]
      this.setState({ Parents: updatedParents })
    } catch (err) {
      console.log(err)
    }
  }

  addNewParent = async (newParent) => {
    try {
      await this.createParent(newParent)
      const Parents = [...this.state.Parents]
      Parents.push(newParent)
      this.setState({ Parents })
    }
    catch (err) {
      console.log(err)
    }

  }

  // addBusToParent(bus){
  //   newParentObject = parentObject.buses.push(BusObject)
  //   this.setState({parentObject: newParentObject})
  // }




  render() {

    const ParentsComponent = () => (<ParentsList parents={this.state.parents} />)
    const BusesComponent = () => (<BusesList buses={this.state.buses}/>)
    const NewParentComponent = () => (<ParentNew addNewParent = {this.addNewParent}/>)
    const ParentShowComponent = (props) => (<ParentShow {...props}/>)
    const BusShowComponent = (props) => (<BusShow {...props}/>)
    const LoginFormComponent = () => (<LoginForm isLoggedIn = {this.isLoggedIn}/>)


    return (
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/parents" component={ParentsComponent}/>
          <Route exact path="/parents/new" component={NewParentComponent}/>
          <Route exact path="/parents/:parent_id" component={ParentShowComponent}/>
          <Route exact path="/buses/:bus_id" component={BusShowComponent}/>
          <Route exact path="/buses" component={BusesComponent}/>
          <Route exact path="/login" component={LoginFormComponent} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App

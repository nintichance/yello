import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import BusesList from './components/BusesList'
import ParentsList from './components/ParentsList'
import ParentNew from './components/ParentNew'
import ParentShow from './components/ParentShow'
import BusShow from './components/BusShow'
import LoginForm from './components/LoginForm'
import DriverLogin from './components/DriverLogin'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  state = {
    parents: [],
    buses: [],
    currentParent: {
      buses: []
    },
    currentDriver: {}
  }

  componentWillMount(){
    this.getParents()
    this.getBuses()
  }

logInParent = async(username)=>{
  try{
  const res = await axios.get(`/api/parents/retrieve/${username}`)
  console.log("CALLED", res.data[0] )
  this.setState({currentParent: res.data[0]})
  }
  catch(error){
    console.log(error)
  }
  
}
//LOG IN BUS DRIVER
logInDriver = async(driver_username)=>{
  console.log(driver_username)
  try{
  const res = await axios.get(`/api/buses/retrieve/${driver_username}`)
  console.log("CALLED", res.data[0] )
  this.setState({currentDriver: res.data[0]})
  }
  catch(error){
    console.log(error)
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
      this.setState({ parents: updatedParents })
    } catch (err) {
      console.log(err)
    }
  }

  addNewParent = async (newParent) => {
    try {
      await this.createParent(newParent)
      const parents = [...this.state.parents]
      parents.push(newParent)
      this.setState({ parents })
    }
    catch (err) {
      console.log(err)
    }

  }


//UPDATE PARENT OBJECT WITH NEW BUS IN BUSES ARRAY
  updateParentWithBus = async (bus) => {
    try{

    const nowParent = {...this.state.currentParent}
    nowParent.buses.push(bus)
    await axios.patch(`api/parents/${this.state.currentParent.id}/buses/${bus.id}`, { parent: nowParent })
    this.setState({currentParent: nowParent})
    }
  catch(error){
  console.log(error)
  }
  }


  render() {

    const ParentsComponent = () => (<ParentsList parents={this.state.parents} />)
    //PASS UPDATEPARENTWITHBUS TO BUSESLIST
    const BusesComponent = () => (<BusesList updateParentWithBus={this.updateParentWithBus} buses={this.state.buses}/>)
    const NewParentComponent = () => (<ParentNew addNewParent = {this.addNewParent}/>)
    const ParentShowComponent = (props) => (<ParentShow logInParent={this.logInParent} {...props}/>)
    const BusShowComponent = (props) => (<BusShow {...props}/>)
    const LoginFormComponent = () => (<LoginForm currentParent={this.state.currentParent} logInParent={this.logInParent}/>)
    const DriverLoginComponent = () => (<DriverLogin logInDriver={this.logInDriver}/>)

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
          <Route exact path="/login/driver" component={DriverLoginComponent} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import MapContainer from './components/MapContainer'
import Home from './components/Home'
import ParentsList from './components/ParentsList'
import ParentNew from './components/ParentNew'
import ParentShow from './components/ParentShow'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  state = {
    parents: []
  }

  componentWillMount(){
    this.getParents()
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



  render() {

    const ParentsComponent = () => (<ParentsList getOneParent={this.getOneParent} parents={this.state.parents} />)
    const NewParentComponent = () => (<ParentNew addNewParent = {this.addNewParent}/>)
    const ParentShowComponent = (props) => (<ParentShow {...props}/>)
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/parents" component={ParentsComponent}/>
          <Route exact path="/parents/new" component={NewParentComponent}/>
          <Route exact path="/parents/:parent_id" component={ParentShowComponent}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App

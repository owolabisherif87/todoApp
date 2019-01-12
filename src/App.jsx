import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./App2.css"
import Todos from "./components/Todos"
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
// import uuid from "uuid"
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import axios from "axios";
import loader from './img/loader.gif';


class App extends React.Component{
    constructor() {
        super()
        this.state = {
          todos:  [],
          error: "",
          isLoaded: false
    }
}

    componentDidMount() {
        this.setState({isLoaded: true})
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({
            todos: res.data,
            isLoaded: false,
            isLoaded1: false
        }))
        .catch(err => this.setState({error: err}))
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        })
    }

    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        }))
        
    }

    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
        .then(res => this.setState({todos: [...this.state.todos, res.data]})) 
    }

    render(){
       
        return(
            <Router>
                <div className="container">
                    <Header/>
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                    {this.state.isLoaded ? 
                        <p style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                            }}>
                            <img src={loader} alt="Loading..." className="loader"/>
                            <span>Loading Todos</span>
                        </p> :
                        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> }
                        </React.Fragment>
                    )}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </Router>
        )
    }
}


export default App
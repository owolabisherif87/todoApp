import React, { Component } from 'react';
import PropTypes from "prop-types"

class TodoItem extends Component {
    state = {  }

    getStyle = () => {
        return {
            background: "#f4f4f4",
            textDecoration: this.props.todo.completed? "line-through" : 'none',
            borderBottom: "1px solid #ccc",
            padding: "10px 8px"
        }
    }

    render() { 
        const {id, title, completed} = this.props.todo
        return ( 
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" name="completed" onChange={this.props.markComplete.bind(this, id)} checked={completed}/> {' '}
                    {title}
                    <button className="btndel" onClick={this.props.delTodo.bind(this, id)}>&times;</button>
                </p>
            </div>
         );
    }
}
 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
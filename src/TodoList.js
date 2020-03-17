import React, { Component } from 'react'
import store from './store'
import TodoListUI from './TodoListUI'
import { getInputChangeAction, getAddItemAction, deleteItemAction, initListAction } from './store/actionCreators'
import axios from 'axios'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteClick={this.handleDeleteClick}/>
    }
    componentDidMount(){
        axios.get('api/todoList').then((res) => {
            console.log('res', res.data)
            const data = res.data
            const action =  initListAction(data)
            store.dispatch(action)
        })
    }
    handleStoreChange(){
        console.log("store change")
        this.setState(store.getState())
    }
    handleInputChange(e){
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleBtnClick(){
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleDeleteClick(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList;
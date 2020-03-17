import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
//  无状态组件
const TodoListUI = (props) => {
  return (
    <div style={{marginTop: 10, marginLeft: 10}}>
      <Input 
        value={props.inputValue} 
        placeholder="todoitem" 
        style={{width: 300, marginRight: 20}}
        onChange={props.handleInputChange}></Input>
      <Button 
        type="primary"
        onClick={props.handleBtnClick}
      >提交
      </Button>
      <List
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        style={{marginTop: 10, width: 300}}
        dataSource={props.list}
        renderItem={(item, index) => (
        <List.Item 
        onClick={() => {props.handleDeleteClick(index)}}>
        {item}
        </List.Item>)}>
      </List>
    </div>
  )
}
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{marginTop: 10, marginLeft: 10}}>
//                 <Input 
//                     value={this.props.inputValue} 
//                     placeholder="todoitem" 
//                     style={{width: 300, marginRight: 20}}
//                     onChange={this.props.handleInputChange}></Input>
//                 <Button 
//                     type="primary"
//                     onClick={this.props.handleBtnClick}>提交</Button>
//                 <List
//                     size="small"
//                     header={<div>Header</div>}
//                     footer={<div>Footer</div>}
//                     bordered
//                     style={{marginTop: 10, width: 300}}
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (
//                     <List.Item 
//                     onClick={() => {this.props.handleDeleteClick(index)}}>
//                     {item}
//                     </List.Item>)}></List>
//             </div>
//         )
//     }
// }
export default TodoListUI;
import React, { Component } from 'react'



class EditableCell extends Component {

    render() {
      return (
        <td>
          <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onCostsTableUpdate}/>
        </td>
      );
  
    }
  
  }

  export default EditableCell;
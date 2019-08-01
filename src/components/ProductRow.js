import React, { Component } from 'react'
import EditableCell from './EditableCell'




class ProductRow extends Component {
    onDelEvent() {
      this.props.onDelEvent(this.props.product);
  
    }
    render() {
  
      return (
        <tr className="eachRow">
          <EditableCell onCostsTableUpdate={this.props.onCostsTableUpdate} cellData={{
            "type": "name",
            value: this.props.product.name,
            id: this.props.product.id
          }}/>
          <EditableCell onCostsTableUpdate={this.props.onCostsTableUpdate} cellData={{
            type: "price",
            value: this.props.product.price,
            id: this.props.product.id
          }}/>
          <EditableCell onCostsTableUpdate={this.props.onCostsTableUpdate} cellData={{
            type: "category",
            value: this.props.product.category,
            id: this.props.product.id
          }}/>
          <td className="del-cell">
            <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
          </td>
        </tr>
      );
  
    }
  
  }

  export default ProductRow;
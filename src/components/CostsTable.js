import React, { Component } from 'react'
import ProductRow from './ProductRow'



class CostsTable extends Component {

    render() {
      var onCostsTableUpdate = this.props.onCostsTableUpdate;
      var rowDel = this.props.onRowDel;
      var filterText = this.props.filterText;
      var product = this.props.products.map(function(product) {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        return (<ProductRow onCostsTableUpdate={onCostsTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
      });
      return (
        <div>
  
  
        <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add Cost</button>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>price</th>
                <th>category</th>
              </tr>
            </thead>
  
            <tbody>
              {product}
  
            </tbody>
  
          </table>
        </div>
      );
  
    }
  
  }
  

  export default CostsTable;
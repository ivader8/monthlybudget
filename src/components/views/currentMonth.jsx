import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import CostsTable from '../CostsTable';


class CurrentMonth extends Component {
    constructor(props) {
        super(props);
    
        //  this.state.products = [];
        this.state = {};
        this.state.filterText = "";
        this.state.products = [
          {
            id: 1,
            category: 'Sporting Goods',
            price: '49.99',
            name: 'football'
          }
        ];
    
      }
      handleUserInput(filterText) {
        this.setState({filterText: filterText});
      };
      handleRowDel(product) {
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
      };
    
      handleAddEvent(evt) {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var product = {
          id: id,
          name: "",
          price: "",
          category: ""
        }
        this.state.products.push(product);
        this.setState(this.state.products);
    
      }
    
      handleCostsTable(evt) {
        var item = {
          id: evt.target.id,
          name: evt.target.name,
          value: evt.target.value
        };
    var products = this.state.products.slice();
      var newProducts = products.map(function(product) {
    
        for (var key in product) {
          if (key === item.name && product.id === item.id) {
            product[key] = item.value;
    
          }
        }
        return product;
      });
        this.setState({products:newProducts});
      //  console.log(this.state.products);
      };
      render() {
    
        return (
          <div>
            <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
            <CostsTable onCostsTableUpdate={this.handleCostsTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
          </div>
        );
    
      }
};


export default CurrentMonth;
// state = {
    //     rows: ['row1', 'row2', 'row3'],
    //     item: '',
    //     name: '',
    //     email: ''
    // }
    // handleChange = ({ target }) => {
    //     this.setState({
    //         [target.name]: target.value
    //     })
    // }

    // addRow = () => {
    //     //TODO change state rows to be array of arrays with td values 

    //     var rows = this.state.rows
    //     rows.push(this.state.item)
    //     rows.push(this.state.name)
    //     rows.push(this.state.email)
    //     this.setState(({ rows: rows }))

    // }

    // render() {

    //     const { rows, item, name, email } = this.state;

    //     return (
    //         <div>
    //             <h1>Current Month</h1>

    //             <table>
    //                 <thead class="thead-dark ">
    //                     <tr>
    //                         <th>Item</th>
    //                         <th>Name</th>
    //                         <th>Email</th>
    //                     </tr>
    //                 </thead>

    //                 <tr>
    //                     <td><input name="item" onChange={this.handleChange} value={item}></input></td>
    //                     <td><input name="name" onChange={this.handleChange} value={name}></input></td>
    //                     <td><input name="email" onChange={this.handleChange} value={email}></input></td>
    //                 </tr>
    //                 <tr>

    //                     {
                            
    //                         rows.map((r) => (

    //                         <td>{r}</td>

    //                     ))
                        
    //                     }
    //                 </tr>
    //             </table>
    //             <button id="addBtn" onClick={this.addRow}>ADD</button>
    //         </div>
    //     )
    // }


// <div>
            //     <p>Current Month</p>

            //     <div class="table-responsive">
            //         <table class="table table-striped table-sm table-hover">
            //             <thead class="thead-dark ">
            //                 <tr>
            //                     <th>Row</th>
            //                     <th>First Name</th>
            //                     <th>Last Name</th>
            //                     <th>Email</th>
            //                     <th>Biography</th>
            //                     <th></th>
            //                 </tr>
            //             </thead>
            //             <tbody>
            //             <tr>
            //                     <td>1</td>
            //                     <td>Clark</td>
            //                     <td>Kent</td>
            //                     <td>clarkkent@mail.com</td>
            //                     <td>Lorem ipsum dolor sit amet...</td>
            //                     <td>
            //                         <div class="inline-block"><button type="button">Click Me!</button><button type="button">Remove</button></div>
            //                         </td>
            //                 </tr>
            //                 <tr>
            //                     <td>2</td>
            //                     <td>John</td>
            //                     <td>Carter</td>
            //                     <td>johncarter@mail.com</td>
            //                     <td>Vestibulum consectetur scelerisque...</td>
            //                     <td>Vestibulum consectetur scelerisque...</td>
            //                 </tr>
            //                 <tr>
            //                     <td>3</td>
            //                     <td>Peter</td>
            //                     <td>Parker</td>
            //                     <td>peterparker@mail.com</td>
            //                     <td>Integer pulvinar leo id risus...</td>
            //                     <td>Integer pulvinar leo id risus...</td>
            //                 </tr><tr>
            //                     <td>1</td>
            //                     <td>Clark</td>
            //                     <td>Kent</td>
            //                     <td>clarkkent@mail.com</td>
            //                     <td>Lorem ipsum dolor sit amet...</td>
            //                     <td>Lorem ipsum dolor sit amet...</td>
            //                 </tr>
            //                 <tr>
            //                     <td>2</td>
            //                     <td>John</td>
            //                     <td>Carter</td>
            //                     <td>johncarter@mail.com</td>
            //                     <td>Vestibulum consectetur scelerisque...</td>
            //                     <td>Vestibulum consectetur scelerisque...</td>
            //                 </tr>
            //                 <tr>
            //                     <td>3</td>
            //                     <td>Peter</td>
            //                     <td>Parker</td>
            //                     <td>peterparker@mail.com</td>
            //                     <td>Integer pulvinar leo id risus...</td>
            //                     <td>Integer pulvinar leo id risus...</td>
            //                 </tr>
            //             </tbody>
            //         </table>
            //     </div>
            
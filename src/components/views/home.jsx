import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createEmail} from '../../actions/postActions';
import NextMonth from '../NextMonth';

class Home extends Component {
    state = {
        email: '',
        ex:''
    };

   handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state.email) 
    console.log(this.state.ex)   
    this.props.createEmail(this.state.email)   
    }

    handleChange = ({target}) => {
      this.setState({
          [target.name]: target.value
      })
    //call action dispatch to reducer 
         
    }

    render() {

        const {email,ex} = this.state;

        return (
            <div>
                <h1>This is the Home page </h1>
            
                <form onSubmit={this.handleSubmit}>
                    <input type="email" 
                    value={email}
                    onChange = {this.handleChange}
                    name="email" id="" 
                    />
                    <button type="submit" 
                    >Submit</button>
                </form>

                <br/>
                <NextMonth/>
            
            </div>

            
        )
    }
}


export default connect(null, {createEmail})(Home )

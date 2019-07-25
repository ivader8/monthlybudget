import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        email: '',
        ex:''
    };

   handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state.email) 
    console.log(this.state.ex)   
    }

    handleChange = ({target}) => {
      this.setState({
          [target.name]: target.value
      })
      
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
            
            </div>

            
        )
    }
}



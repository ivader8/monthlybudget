import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createEmail } from '../../actions/postActions';
import NextMonth from '../NextMonth';
import piggyBank from '../../images/HomePage Graphic.svg'
import scroll from '../../images/scroll.svg'
import BlueContainer from '../BlueContainer';
import GreyContainer from '../GreyContainer';

class Home extends Component {
    state = {
        email: '',
        ex: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.email)
        console.log(this.state.ex)
        this.props.createEmail(this.state.email)
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
        //call action dispatch to reducer  
    }

    render() {

        const { email, ex } = this.state;

        return (

            <Fragment>
                <div className="container">
                    <img src={piggyBank} alt="piggyBank graphic" className="piggyBank"></img>

                    <h1> Budget Planning for the Modern Era</h1>

                    <p className="subhead">Enjoy the Most Intuitive App!</p>

                    <img src={scroll} className="scroll hide-mobile show-desktop" alt="scroll down"></img>


                </div>

                <BlueContainer />

                <GreyContainer/>

                <div className="container">
                    <h2>Start calculating your budget here!</h2>
                    <a href="#" className="cta">Get Started</a>
                </div>
                
            </Fragment>





            // <div>
            //     <h1>This is the Home page </h1>

            //     <form onSubmit={this.handleSubmit}>
            //         <input type="email" 
            //         value={email}
            //         onChange = {this.handleChange}
            //         name="email" id="" 
            //         />
            //         <button type="submit" 
            //         >Submit</button>
            //     </form>

            //     <br/>
            //     <NextMonth/>

            // </div>


        )
    }
}


export default connect(null, { createEmail })(Home)

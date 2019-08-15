import React, { Component } from 'react'
import income from '.././images/income.svg'
import costs from '.././images/cost.svg'
import savings from '.././images/savings.svg'


 class BlueContainer extends Component {
    render() {
        return (
            <div className = "blue-container">
                <div class = "container">
                    <ul>
                        <li>
                            <img src={income} alt="income icon"/>
                            <p>Record and edit with ease all your income</p>
                        </li>
                        <li>
                        <img src={costs} alt="income icon"/>
                            <p>Record and edit with ease all your expenditures</p>
                        </li>
                        <li>
                        <img src={savings} alt="income icon"/>
                            <p>See how much you save and compare it to your goal</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }   
}

export default BlueContainer
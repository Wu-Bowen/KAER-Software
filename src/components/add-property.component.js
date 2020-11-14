import React, {Component} from 'react';

export default class addProperty extends Component{
    constructor(props) {
        super(props);


        this.state = {
            add_description: '',
            add_responsible: '',
            add_priority: '',
            add_completed: false
        }
    }
    render(){
        return(
            <div>
                <p> Welcome to add Property Component </p>
            </div>
        )
    }
} 
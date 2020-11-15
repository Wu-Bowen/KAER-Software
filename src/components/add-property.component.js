import React, {Component} from 'react';
import axios from 'axios';

export default class addProperty extends Component{
    constructor(props) {
        super(props);

        this.onChangePropertyName = this.onChangePropertyName.bind(this);
        this.onChangePropertyDescription = this.onChangePropertyDescription.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeZip = this.onChangeZip.bind(this);
        this.onChangePropertyResponsible = this.onChangePropertyResponsible.bind(this);
        this.onChangePropertyPriority = this.onChangePropertyPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            add_propertyName: '',
            add_description: '',
            add_city: '',
            add_state: '',
            add_zip: '',
            add_responsible: '',
            add_priority: '',
            add_completed: false
        }
    }


    onChangePropertyName(e) {
        this.setState({
           add_propertyName : e.target.value
        })
    }
    onChangePropertyDescription(e) {
        this.setState({
            add_description: e.target.value
        })
    }
    onChangeCity(e) {
        this.setState({
            add_city: e.target.value
        })
    }
    onChangeState(e) {
        this.setState({
            add_state: e.target.value
        })
    }
    onChangeZip(e) {
        this.setState({
            add_zip: e.target.value
        })
    }
    onChangePropertyResponsible(e) {
        this.setState({
            add_responsible: e.target.value
        })
    }
    onChangePropertyPriority(e) {
        this.setState({
            add_priority: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()

        console.log(`Form submitted`);
        console.log(`add Property Name: ${this.state.add_propertyName}`)
        console.log(`add Description: ${this.state.add_description}`)
        console.log(`city Completed: ${this.state.add_city}`)
        console.log(`state Completed: ${this.state.add_state}`)
        console.log(`zip Completed: ${this.state.add_zip}`)
        console.log(`add Responsible: ${this.state.add_responsible}`)
        console.log(`add Priority: ${this.state.add_priority}`)
        console.log(`add Completed: ${this.state.add_completed}`)


        this.setState({
            add_propertyName: '',
            add_description: '',
            add_responsible: '',
            add_priority: '',
            add_completed: false
        })
    }
    render(){
        return(
            <div style={{marginTop: 20}}>
                <h3> Create New Property </h3>
                <form onSubmit = {this.onSubmit}>
                <div className = "form-group">
                        <label> Property Name: </label>
                        <input  type = "text" 
                                className = "form-control" 
                                value = {this.state.add_propertyName} 
                                onChange = {this.onChangePropertyName}
                                />
                    </div>
                    <div className = "form-group">
                        <label> Description: </label>
                        <input  type = "text" 
                                className = "form-control" 
                                value = {this.state.add_description} 
                                onChange = {this.onChangePropertyDescription}
                                />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input  type="text" 
                                    className="form-control" 
                                    id="inputCity"
                                    value = {this.state.add_city}
                                    onChange = {this.onChangeCity}
                                    />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputCity">State</label>
                            <select id="inputState" class="form-control" onChange = {this.onChangeState}>
                                <option selected>Choose...</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="District of Columbia">District of Columbia</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Guam">Guam</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New Hampshire">New Hampshire</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="New Mexico">New Mexico</option>
                                <option value="New York">New York</option>
                                <option value="North Carolina">North Carolina</option>
                                <option value="North Dakota">North Dakota</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="Rhode Island">Rhode Island</option>
                                <option value="South Carolina">South Carolina</option>
                                <option value="South Dakota">South Dakota</option>
                                <option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="West Virginia">West Virginia</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>
                            </select>
                        </div>
                        <div class ="form-group col-md-2">
                            <label for ="inputZip">Zip</label>
                            <input  type ="text" 
                                    className ="form-control" 
                                    id = "inputZip"
                                    value = {this.state.add_zip}
                                    onChange = {this.onChangeZip}
                                    />
                        </div>
                    </div>
                    <div className = "form-group">
                        <label> Responsible: </label>
                        <input  type = "text" 
                                className = "form-control" 
                                value = {this.state.add_responsible} 
                                onChange = {this.onChangePropertyResponsible}
                                />
                    </div>
                    <div className = "form-group">
                        <div className = "form-check form-check-inline">
                            <input  className = "form-check-input"
                                    type ="radio"
                                    name = "priorityOptions"
                                    id = "priorityLow"
                                    value = "Low"
                                    checked = {this.state.add_priority==='Low'}
                                    onChange = {this.onChangePropertyPriority}
                                    />
                            <label className = "form-check-label"> Low </label>
                        </div>
                        <div className = "form-check form-check-inline">
                            <input  className = "form-check-input"
                                    type ="radio"
                                    name = "priorityOptions"
                                    id = "priorityMedium"
                                    value = "Medium"
                                    checked = {this.state.add_priority==='Medium'}
                                    onChange = {this.onChangePropertyPriority}
                                    />
                            <label className = "form-check-label"> Medium </label>
                        </div>
                        <div className = "form-check form-check-inline">
                            <input  className = "form-check-input"
                                    type ="radio"
                                    name = "priorityOptions"
                                    id = "priorityHigh"
                                    value = "High"
                                    checked = {this.state.add_priority==='High'}
                                    onChange = {this.onChangePropertyPriority}
                                    />
                            <label className = "form-check-label"> High </label>
                        </div>
                    </div>
                    <div className = "form-group">
                        <input type = "submit" value = "Add Property" className = "btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
} 
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./Pet.css";


class Pet extends Component {

    render(){
        let name = this.props.match.params.name;
        let age = this.props.dog.age;
        let facts = this.props.dog.facts.map(fact => 
            <li>{fact}</li>)

        return(            
            <div className="text-center">
                <h4> Hi my name is {name}! I am {age} years old! That's {age * 7} in human years! </h4>
                <h5>Here is my favorite picture of me:</h5>
                <img className="petImage" src={this.props.dog.src} alt={name} />
                <h5>Wanna get to know me more?</h5>
                {facts}
                <Link to="/" className="btn btn-info">Go Back</Link>
            </div>
            
        )
    }
}

export default Pet;


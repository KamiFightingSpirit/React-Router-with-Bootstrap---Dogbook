import React, {Component} from 'react';
import "./PetList.css";
import {Link } from "react-router-dom";

class PetList extends Component {

    render(){
        const oneDog = this.props.dogs.map(dog =>
            <div key={dog.name} className="col-lg-4 col-md-6 text-center">
                <Link to={`/pet/${dog.name}`}>
                    <h3>{dog.name}</h3>
                    <img className="petListImage" src={dog.src} alt={dog.name} />
                </Link>
            </div>)
        
        return(            
            <div>
                <div className="display-4 text-center petListTitle">Check out Some of Our Fluffiest Members!</div>
                <div className="container">
                    <div className="row">                        
                        {oneDog}                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default PetList;


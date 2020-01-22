import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';



class Navbar extends Component {

    render(){
        const petNavLink = this.props.dogs.map(dogInfo => 
            <li className="nav-item">
              <NavLink exact activeClassName="active-link" 
                //Sets the URL to the dog's name
                to={`/pet/${dogInfo.name}`}
                //Used to import individual images 
                src={dogInfo.src} 
                //Bootstrap class
                className="nav-link">
                  {/*Writes the dog's name for the NAVBAR */}
                  {dogInfo.name} 
              </NavLink>
            </li>
          )


        return(            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">                    
            <Link className="navbar-brand" to="/">Dogbook</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  {petNavLink}
                </ul>
            </div>
        </nav>
            
        )
    }
}

export default Navbar;


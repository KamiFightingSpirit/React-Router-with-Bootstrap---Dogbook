import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import "./App.css";
import Pet from './Pet.js';
import PetList from './PetList.js';

class Routes extends Component {
    render() {
        const getDog = props => {
          let name = props.match.params.name;
          let currentDog = this.props.dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
          );
          return <Pet {...props} dog={currentDog} />;
        }
      return (
          <Switch>
              <Route 
                exact
                path='/'
                render={() => <PetList dogs={this.props.dogs} /> } />
              <Route
                exact
                path='/pet/:name'
                render={getDog}  />      
              <Redirect to="/"/>            
          </Switch> 
      );
    }
}

export default Routes;




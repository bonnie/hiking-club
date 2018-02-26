import React, { Component } from 'react';
import axios from 'axios';
import MyMapComponent from '../Map/Map'
import Trail from './trail';
import './trails.scss';


export default class Trails extends Component {
  constructor(props){
    super(props)
    this.state ={
      pins: [],
      trails: [],
    }
  }
  getAllTrails() {
    const fakeTrails = [{
      id: 1,
      name: 'Coastal Trial: Lands End',
      lat: 37.7807,
      lng: -122.5117,
      distance: 2.9,
      duration: 1.5,
      elevation: 192,
      trail_image: 'https://californiathroughmylens.com/wp-content/uploads/2016/08/lands-end-1.jpg',
    }];
    this.setState({
      trails: fakeTrails,
    });
}
    componentDidMount() {
      this.getAllTrails();
    }
  render() {

    let trailList = (
      <div>
      {this.state.trails.map((trail) =>
      <Trail
        key={trail.id}
        trailName={trail.name}
      />
      )}
    </div>
    );

    return (
      <div>
        <h1>Trails Component</h1>
        <MyMapComponent />
        {trailList}
      </div>
    )
  }
}

import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Map.scss';
import config from '../../../api.config';

const GOOGLE_API_SECRET = config.GOOGLE_API_SECRET

class ReallyBadNameComponent extends Component {

  renderMarkers() {
    return this.props.coordinates.map(coordinate =>
      <Marker key={coordinate.lat +  coordinate.lng} position={{lat: coordinate.lat,lng: coordinate.lng}}
              onClick={this.props.onMarkerClick} />
    )
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={9}
        defaultCenter={{lat: 37.7749295,lng: -122.4194155}}>
        {this.props.isMarkerShown && this.renderMarkers()}
      </GoogleMap>
    )
  }
}

const Map = compose(
  withProps({
    googleMapURL:`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_SECRET}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement:<div style={{height: `100%` }} />,
    containerElement:<div style={{height: `400px`}}/>,
    mapElement:<div style={{height: `100%`}}/>,
  }),
  withScriptjs,
  withGoogleMap
)(ReallyBadNameComponent)

class MyMapComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      isMarkerShown: false,
    }
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker () {
    setTimeout(() => {
      this.setState({ isMarkerShown: true})
    }, 3000)
  }

  handleMarkerClick () {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    // return (
    //   <Map
    //     isMarkerShown={this.state.isMarkerShown}
    //     onMarkerClick={this.handleMarkerClick}
    //   />
    // )
    return (
      <Map
        isMarkerShown={true}
        onMarkerClick={this.handleMarkerClick}
        coordinates={[{lat: 37.7749295,lng: -122.4194155}, {lat: 37.7749295,lng: -122.5194155}]}
      />
    )
  }
}


export default MyMapComponent;

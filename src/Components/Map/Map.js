import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './Map.scss';

const Map = compose(
  withProps({
    googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement:<div style={{height: `100%` }} />,
    containerElement:<div style={{height: `400px`}}/>,
    mapElement:<div style={{height: `100%`}}/>,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{lat: 37.7749295,lng: -122.4194155}}
  >
    {props.isMarkerShown && <Marker position={{lat: 37.7749295,lng: -122.4194155}} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class MyFancyComponent extends React.Component {
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
    return (
      <Map
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}


export default MyFancyComponent;

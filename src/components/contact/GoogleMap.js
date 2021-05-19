import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GoLocation } from 'react-icons/go';
import { KEY } from "../../constants/api";
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.051121831520526, 
      lng: 10.008143135200116
    },
    zoom: 17
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '400px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          
        >
          <GoLocation/>
          <AnyReactComponent
            lat={59.051121831520526}
            lng={10.008143135200116}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
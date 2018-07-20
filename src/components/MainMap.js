import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          title: "The marker`s title will appear as a tooltip.",
          name: "My Location",
          position: { lat: 46.475665, lng: 30.759424 }
        }
      ]
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState(previousState => {
      return {
        markers: [
          ...previousState.markers,
          {
            title: "",
            name: "",
            position: { lat, lng }
          }
        ]
      };
    });
  }

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          style={{ width: "80%", margin: "auto" }}
          className={"map"}
          zoom={12}
          initialCenter={initMap()}
          onClick={this.onClick}
        >
          {this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              title={marker.title}
              name={marker.name}
              position={marker.position}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDxEmlPC-lw5j-iDxsuXBV_TKvQaEChpoM"
})(MainMap);

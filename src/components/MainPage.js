import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



class MainPage extends Component {
    render() {
        return (
            <div>
                <h2 className="text-center">Main Page</h2>

                <Map const style = {{width: '80%',margin: 'auto'}} google={this.props.google} zoom={14} initialCenter={{lat: 42.39, lng: -72.52}} >

                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                    </InfoWindow>
                </Map>

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDxEmlPC-lw5j-iDxsuXBV_TKvQaEChpoM")
})(MainPage)
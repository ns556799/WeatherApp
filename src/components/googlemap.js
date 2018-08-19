import React, {Component} from 'react'

class GoogleMap extends Component {
    componentDidMount() {
        console.log(this.props)
        const lat = parseFloat(this.props.lat);
        const lng = parseFloat(this.props.lon);
        new google.maps.Map(this.refs.map, {
           zoom: 12,
           center: {
               lat: lat,
               lng: lng
           }
        });
    }
    render() {
        return(
            <div ref="map" className="googlemap__container"/>
        );
    }
}

export default GoogleMap;
import React from "react";
import GoogleMap from "./GoogleMap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Location extends React.Component {

    render() {

        const handleApiLoaded = (map, maps) => {
            // use map and maps objects
          };

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMap></GoogleMap>
            </div>
        );
    }
}

Location.defaultProps = {
    center: {
        lat: 10.99835602,
        lng: 77.01502627
    },
    zoom: 11
};

export default Location;
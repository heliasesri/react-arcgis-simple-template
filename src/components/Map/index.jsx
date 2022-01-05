import React, { Component } from "react";
import "./component.css";
//import PropTypes from "prop-types";

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

class MapComponent extends Component {
    static propTypes = {
        //to check if prop value is present and correct
        /*    prop: PropTypes.object.isRequired */
    };

    constructor(props) {
        console.log("constructor");
        super(props);

        this.state = { map: undefined, view: undefined };
        /* this.handleClick = this.handleClick.bind(this); */
    }

    componentDidMount() {
        console.log("componentDidMount");
        const map = new Map({
            basemap: "topo-vector",
        });

        const view = new MapView({
            container: "mapContainer",
            map: map,
            zoom: 4,
            center: [15, 65], // longitude, latitude
        });

        this.setState({ map: map, view: view });
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    updateSomething = () => {
        /* this.setState({
            property: value
        }); */
    };

    render() {
        return (
            <React.Fragment>
                <div id="mapContainer" />
            </React.Fragment>
        );
    }
}

export default MapComponent;

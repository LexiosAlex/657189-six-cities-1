import React, {Component} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

const city = [52.38333, 4.9];

let LeafIcon = leaflet.Icon.extend({
  options: {
    iconSize: [30, 30]
  }
});

const standartIcon = new LeafIcon({
  iconUrl: `./img/mapPin.svg`
});


const activeIcon = new LeafIcon({
  iconUrl: `./img/mapPin-active.svg`
});

leaflet.icon = function (options) {
  return new leaflet.Icon(options);
};

const mapZoom = 12;

const mapStyle = {
  width: `100%`,
  height: `100%`,
  zIndex: `1`,
};

export class Map extends Component {
  constructor(props) {
    super(props);
    this.renderedMap = null;
    this.mapPinsGroup = null;
    this.activeMapPin = null;

    this.state = {
      activePin: null,
    };
  }
  unRenderMarkers(map) {
    if (this.mapPinsGroup) {
      this.mapPinsGroup.clearLayers();
      this.mapPinsGroup = null;
    }

    if (this.activeMapPin) {
      map.removeLayer(this.activeMapPin);
      this.activeMapPin = null;
    }
  }

  renderMarkers(map) {
    let mapPins = [];

    if (this.props.activeCard) {
      this.props.places.forEach((it)=> {
        if (it.id !== this.props.activeCard.id) {
          const mapMarker = leaflet.marker(it.mapCoordinates, {icon: standartIcon});
          mapPins.push(mapMarker);
        }
      });

      this.activeMapPin = leaflet.marker(this.props.activeCard.mapCoordinates, {icon: activeIcon});
      this.activeMapPin.addTo(map);
    } else {

      this.props.places.forEach((it)=> {
        const mapMarker = leaflet.marker(it.mapCoordinates, {icon: standartIcon});
        mapPins.push(mapMarker);
      });

    }
    this.mapPinsGroup = leaflet.layerGroup(mapPins);
    this.mapPinsGroup.addTo(map);
  }

  componentDidMount() {
    this.renderedMap = leaflet.map(`map`, {
      center: city,
      zoom: mapZoom,
      zoomControl: false,
      marker: true
    });
    this.renderedMap .setView(city, mapZoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.renderedMap);

    this.renderMarkers(this.renderedMap);
  }

  componentDidUpdate() {
    this.unRenderMarkers(this.renderedMap);
    this.renderMarkers(this.renderedMap);
  }

  render() {
    return <div id="map" style={mapStyle}></div>;
  }
}

Map.propTypes = {
  places: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    premium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mapCoordinates: PropTypes.array.isRequired,
  })).isRequired,
  activeCard: PropTypes.shape({
    id: PropTypes.number,
    premium: PropTypes.bool,
    img: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    mapCoordinates: PropTypes.array,
  }),
};

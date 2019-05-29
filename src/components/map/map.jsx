import React, {Component} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

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

  }

  unRenderMarkers() {
    if (this.mapPinsGroup) {
      this.mapPinsGroup.clearLayers();
      this.mapPinsGroup = null;
    }

    if (this.activeMapPin) {
      this.renderedMap.removeLayer(this.activeMapPin);
      this.activeMapPin = null;
    }
  }

  renderMarkers() {
    const {hoveredCard, offers} = this.props;
    let mapPins = [];

    if (hoveredCard) {
      offers.forEach((it)=> {
        if (it.id !== hoveredCard.id) {
          const mapMarker = leaflet.marker(it.mapCoordinates, {icon: standartIcon});
          mapPins.push(mapMarker);
        }
      });

      this.activeMapPin = leaflet.marker(hoveredCard.mapCoordinates, {icon: activeIcon});
      this.activeMapPin.addTo(this.renderedMap);
    } else {

      offers.forEach((it)=> {
        const mapMarker = leaflet.marker(it.mapCoordinates, {icon: standartIcon});
        mapPins.push(mapMarker);
      });

    }
    this.mapPinsGroup = leaflet.layerGroup(mapPins);
    this.mapPinsGroup.addTo(this.renderedMap);
  }

  renderMap() {
    const {city} = this.props;
    this.renderedMap = leaflet.map(`map`, {
      center: city.mapCoordinates,
      zoom: mapZoom,
      zoomControl: false,
      marker: true
    });
    this.renderedMap.setView(city.mapCoordinates, mapZoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.renderedMap);
  }

  changeMapCoords() {
    const {city} = this.props;
    this.renderedMap.panTo(new leaflet.LatLng(city.mapCoordinates[0], city.mapCoordinates[1]));
  }

  componentDidMount() {
    this.renderMap();
    this.renderMarkers();
  }

  componentDidUpdate() {
    this.changeMapCoords();
    this.unRenderMarkers();
    this.renderMarkers();
  }

  render() {
    return <div id="map" style={mapStyle}></div>;
  }
}

Map.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    mapCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    mapCoordinates: PropTypes.arrayOf(PropTypes.number),
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      mapCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
  })).isRequired,
  hoveredCard: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    mapCoordinates: PropTypes.arrayOf(PropTypes.number),
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      mapCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
  })
};

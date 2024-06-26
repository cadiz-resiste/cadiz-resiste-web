import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/leaflet.markercluster.js';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import UTMConverter from "utm-latlng";
import type { CustomPoint } from '../lib/types';
import data from "../lib/openrta-cadiz.json";

// added openstreetmap layer
const m_mono = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})

// creating map with some properties
const map = L.map('map', {
    center: [36.51710422176086, -6.280138483007821],
    zoom: 14,
    zoomControl: true,
    layers: [m_mono]
});

L.control.scale({
    imperial: false,
    maxWidth: 300
}).addTo(map);

// utility to convert utm coords to lat, lng
const utmConverter = new UTMConverter();
const utmZone = 30;
const hemisphere = "N";

// grouping markers to improve map performance
const markers = L.markerClusterGroup({
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: true,
  zoomToBoundsOnClick: true,
  removeOutsideVisibleBounds: true,
  disableClusteringAtZoom: 19
});

// read data of points from file
const points: CustomPoint[] = data as CustomPoint[];

points.forEach(point => {

  if (point.COORD_X && point.COORD_Y) {
    const coordX = parseFloat(point.COORD_X);
    const coordY = parseFloat(point.COORD_Y);

    // @ts-ignore
    // convert utm to lat, lng
    const { lat, lng } = utmConverter.convertUtmToLatLng(coordX, coordY, utmZone, hemisphere);

    // add marker tu cluster layer
    let marker = L.marker([lat, lng]);
    markers.addLayer(marker);
  }
})

// add cluster layer to map
map.addLayer(markers)
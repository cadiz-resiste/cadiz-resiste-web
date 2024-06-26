import type { CustomPoint } from "../lib/types";
import points from "../lib/openrta-cadiz.json";
import L, { Icon, MarkerClusterGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/leaflet.markercluster.js';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import UTMConverter from "utm-latlng";

export default class CustomMap {

    mapObject: L.Map;

    points: CustomPoint[];
    markersGroup: MarkerClusterGroup;

    constructor() {
        this.points = points as CustomPoint[];
        this.init();
    }

    init() {
        // añadir openstreetmap layer
        const m_mono = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 25,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        })

        // crear objeto del mapa
        this.mapObject = L.map('map', {
            center: [36.51710422176086, -6.280138483007821],
            zoom: 14,
            zoomControl: true,
            layers: [m_mono]
        });

        // crear y configurar clusters de puntos
        this.markersGroup = new MarkerClusterGroup({
            spiderfyOnMaxZoom: true,
            showCoverageOnHover: true,
            zoomToBoundsOnClick: true,
            removeOutsideVisibleBounds: true,
            disableClusteringAtZoom: 19
        });

        // añadir escala
        L.control.scale({
            imperial: false,
            maxWidth: 200
        }).addTo(this.mapObject);

        this.renderPoints();
    }

    // renderiza los puntos que se le pasen
    // en caso de no recibir parámetro renderiza los almacenados en this.points
    renderPoints(points?: CustomPoint[]) {
        let currentPoints = [] as CustomPoint[];

        currentPoints = !points ? this.points : points;

        currentPoints.forEach(point => {

            // renderizar solo si tenemos datos de coordenadas
            if (point.COORD_X && point.COORD_Y) {
                const coordX = parseFloat(point.COORD_X);
                const coordY = parseFloat(point.COORD_Y);

                const { lat, lng } = MapExtensions.convertUtmToLatLng(coordX, coordY);

                // crear marker
                let marker = L.marker([lat, lng], {
                    icon: new Icon({
                        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                    })
                });

                // crear popup
                const popupContent = `
                    <strong>Código Postal:</strong> ${point.CODIGO_POSTAL}<br>
                    <strong>Calle:</strong> ${point.NOMBRE_VIA}<br>
                    <strong>Número:</strong> ${point.KM_NUM || 'N/A'}
                `;

                // aádir popup al marker
                marker.bindPopup(popupContent);

                // añadir marker al cluster
                this.markersGroup.addLayer(marker);
            }
        });

        // añadir cluster al mapa
        this.mapObject.addLayer(this.markersGroup);
    }
}


class MapExtensions {

    static utmConverter: UTMConverter = new UTMConverter();
    static utmZone: number = 30;
    static utmHemisphere: string = "N";

    // convertir de coordenadas utm a lat, lng
    static convertUtmToLatLng(coordX, coordY): { lat: number, lng: number } {
        // @ts-ignore
        const { lat, lng } = this.utmConverter.convertUtmToLatLng(coordX, coordY, this.utmZone, this.utmHemisphere);
        return { lat: lat, lng: lng }
    }
}


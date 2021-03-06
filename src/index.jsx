import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam96ZWVuZSIsImEiOiJjanNhZDB6Y2Qwb2J5NDlxZDBxZXB2OGg5In0.WxREDwEXoEMYhuB-9j1bvQ';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        lng: -61.198303, 
        lat: 12.911204,
        zoom: 9
        };
        }
    componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/jozeene/ckgsh1i0709c619o1kphw6w11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        });
        map.on('move', () => {
            this.setState({
            lng: map.getCenter().lng.toFixed(4),
            lat: map.getCenter().lat.toFixed(4),
            zoom: map.getZoom().toFixed(2)
            });
            });
        }
    render() {
        return (
            <div>
                <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                    </div>
            <div ref={el => this.mapContainer = el} className="mapContainer"/>
            </div>
        )
        }
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));
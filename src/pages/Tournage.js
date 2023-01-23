import { useParams } from 'react-router-dom';
import { data } from "../data";
import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

function Tournage() {
    const { id } = useParams();
    const tournage = data.find((tournage) => tournage.id_lieu === id);
    const position = [tournage.coord_y, tournage.coord_x];

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    return (
        <body>
            <div className="page">
                <div className="page_header">
                    <h1>Toutes les Infos du Tournage {tournage.id_lieu}</h1>
                </div>
                <div className="page_body">
                    <div className="page_sub_body">
                        <p><b>ID_LIEU :</b> {tournage.id_lieu}</p>
                        <p><b>ANNEE :</b> {tournage.annee_tournage}</p>
                        <p><b>TYPE :</b> {tournage.type_tournage}</p>
                        <p><b>NOM :</b> {tournage.nom_tournage}</p>
                        <p><b>REALISATEUR :</b> {tournage.nom_realisateur}</p>
                        <p><b>PRODUCTEUR :</b> {tournage.nom_producteur}</p>
                        <p><b>ADRESSE :</b> {tournage.adresse_lieu}</p>
                        <p><b>ARONDISSEMENT :</b> {tournage.ardt_lieu}</p>
                        <p><b>DATE_DEBUT :</b> {tournage.date_debut}</p>
                        <p><b>DATE_FIN :</b> {tournage.date_fin}</p>
                        <p><b>COORD_X :</b> {tournage.coord_x}</p>
                        <p><b>COORD_Y :</b> {tournage.coord_y}</p>
                        <p><b>GEO_SHAPE_COORD :</b> {tournage.geo_shape.geometry.coordinates}</p>
                        <p><b>GEO_POINT_2D: LON:</b> {tournage.geo_point_2d.lon}<b>, LAT:</b> {tournage.geo_point_2d.lat}</p>
                    </div>
                    <div className="page_map">
                        <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '50vh', width: '50wh'}}>
                            <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                            />
                            <Marker position={position}>
                                <Popup>
                                    {tournage.adresse_lieu}
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </body>
    );  
}

export default Tournage;
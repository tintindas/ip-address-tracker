import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet-defaulticon-compatibility'

const Map = () => {
	return (
		<MapContainer
			center={[28.6448, 77.216721]}
			zoom={10}
			scrollWheelZoom={false}
			style={{ height: '100%', width: '100%' }}
			className='z-0'
		>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={[28.6448, 77.216721]}>
				<Popup>Hey ! you found me</Popup>
			</Marker>
		</MapContainer>
	)
}

export default Map

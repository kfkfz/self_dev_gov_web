import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default ({ app }, inject) => {
  inject('L', L)
}

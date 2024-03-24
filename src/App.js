import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TelephoneFill } from 'react-bootstrap-icons';
import './components/Homepage/Menu.js'
import Menu from './components/Homepage/Menu.js';
import ImageSlider from './components/Homepage/ImageSlider.js';
import CleaningServiceComponent from './components/Homepage/CleaningServiceComponent.js';
import ServicesList from './components/Homepage/ServicesList.js';
function App() {
  return (
    <div className="App">
      <Menu />
      <ImageSlider />
      <CleaningServiceComponent />
      <ServicesList />
    </div>
  );
}

export default App;

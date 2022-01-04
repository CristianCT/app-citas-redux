
import { Provider, connect } from 'react-redux';
import { store } from "./config/store";
import CitasActios from "./actions/citas"
import PrincipalPage from './pages/PrincipalPage';
import "./App.css"

const mapStateToProps = ({citas}) => ({
  citas
});

const mapDispatchToProps = () => ({
  ...CitasActios,
});

// Se pasa el componente y los diferentes Maps
const ConnectedCitasComponent = connect(mapStateToProps, mapDispatchToProps)(PrincipalPage);

function App() {
  return (
    <Provider store = {store}>
        <ConnectedCitasComponent/>
    </Provider>
  );
}

export default App;

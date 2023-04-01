
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'BIENVENIDOS - Pronto estará 100% funcional este sitio web'} />
    </div>
  );
}

export default App;

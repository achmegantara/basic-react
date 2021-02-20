import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo name="Purple Swag" category="LEBARAN"/>
    </div>
  );
}

function FotoProduk(){
  return (
    <div className="Foto">
    <img src="foto-sneakers.jpeg"></img>
    </div>
  );
}

function ProdukInfo(props) {
  //object destruction =
  const { category, name } = props;
  const price = 74000000;
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR {price}</p>
        <p className="info">
          One of the most recognizable shoes in the AJ collections, the Air Jordan Retro features lightweight, visible cushioning just like the original from '88. 
        </p>
      </div>
    </div>
  );
}

export default App;

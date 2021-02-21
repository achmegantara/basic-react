import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="coming" name="Purple Swag" category="LEBARAN"/>
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

function CheckDiscount(props){
  const { isDiscount } = props;
  if(isDiscount === "yes"){
    return (
      <p>Diskon 50%</p>
    );
  } 
  else if (isDiscount === "coming") {
    return (
    <p>Akan ada diskon...</p>
    );
  }
  else {
    return (
    <p>Belum ada diskon</p>
    );
  }
}

function ProdukInfo(props) {
  //object destruction
  const { category, name, isDiscount } = props;
  const price = 74000000;
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR {price}</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="info">
          One of the most recognizable shoes in the AJ collections, the Air Jordan Retro features lightweight, visible cushioning just like the original from '88. 
        </p>
        <a onClick={(e) => TambahCart(name,e)} href="#">Add to Cart</a>
      </div>
    </div>
  );
}

function TambahCart(e){
return console.log("Membeli produk " + e);
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="coming" name="Purple Swag" category="LEBARAN"/>

    <div className="Review-box">
      <h2>Reviews</h2>
      <div className="Item">
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"></img>
      <div className="User">
        <h3>Masayoshi Setiawan</h3>
        <p>Harganya murah tapi kualitas bukan kaleng-kaleng nih.</p>
      </div>
      </div>
    </div>

    </div>
  );
}

function ReviewItems(){
  // mempersiapkan data dummy JSON
  const users = [
    {
      "id": 1,
      "name": "Masayoshi",
      "review": "Harganya murah, kualitas bagus"
    },
    {
      "id": 2,
      "name": "Achmad",
      "review": "Harganya merakyat"
    },
    {
      "id": 3,
      "name": "Akbar",
      "review": "Hbarangnya bagus, perngiriman cepat."
    }
  ];
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
  const benefit = ["Tidak kusut terkena air", "Bahan lebih halus", "Tidak gerah"];
  const listBenefits = benefit.map((itemBenefit) => 
    <li>{itemBenefit}</li>
  );

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
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => TambahCart(name,e)} href="#">Add to Cart</a>
      </div>
    </div>
  );
}

function TambahCart(e){
return console.log("Membeli produk " + e);
}

export default App;

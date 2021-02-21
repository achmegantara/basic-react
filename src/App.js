import logo from './logo.svg';
import './App.css';
import ReviewItems from './reviews.js';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Purple Swag" category="LEBARAN"/>
      <ReviewItems />
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
  const { isDiscount, discount } = props;
  if(isDiscount === "yes"){
    return (
      <p>Diskon {discount}%</p>
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
    <li key={itemBenefit}>{itemBenefit}</li>
  );

  const price = 74000000;
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR {price}</p>
        <CheckDiscount isDiscount={isDiscount} discount={40}  />
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

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;

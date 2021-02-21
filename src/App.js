import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="coming" name="Purple Swag" category="LEBARAN"/>
      <ReviewItems />
    </div>
  );
}

function ReviewItems(){
  // mempersiapkan data dummy JSON
  const reviews = [
    {
      "id": 1,
      "name": "Masayoshi",
      "review": "Harganya murah, kualitas bagus",
      "link" : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    },
    {
      "id": 2,
      "name": "Achmad",
      "review": "Harganya merakyat",
      "link" : "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      "id": 3,
      "name": "Akbar",
      "review": "barangnya bagus, perngiriman cepat.",
      "link" : "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ];
  const ListReviews = reviews.map((itemReview) => 
  <div className="Item">
  <img src={itemReview.link}></img>
  <div className="User">
    <h3>{itemReview.name}</h3>
    <p>{itemReview.review}</p>
  </div>
  </div>
);
  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {ListReviews}
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

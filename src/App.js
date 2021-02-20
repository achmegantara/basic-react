import logo from './logo.svg';
import './App.css';

function App() {

  const category = "RUNNING";
  const price = 74000000;

  return (
    <div class="Parentbox">
      <div class="Foto">
      <img src="foto-sneakers.jpeg"></img>
      </div>
      <div class="Deskripsi">
        <p class="Cate">{category}</p>
        <h1 class="Title">Pinky Swagg</h1>
        <p class="Price">IDR {price}</p>
        <p class="info">
          One of the most recognizable shoes in the AJ collections, the Air Jordan Retro features lightweight, visible cushioning just like the original from '88. 
        </p>
      </div>
    </div>
  );
}

export default App;

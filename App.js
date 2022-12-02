import './App.css';
import Products from './Products';

let produqcia = ["Dresses","T-Shirts andTops","Shirts","Jeans","Blouses","Trousers","Skirts","Sweatshirts","Cardigans","Jumpers","Shorts","Shoes" ]

function App() {

  return (
    <div className='App'>
      <header>
        <nav>
          <button href="#">მთავარი გვერდი</button>
          <button href="#">შეკვეთის გაფორმება </button>
          <button href="#">კონტაქტი</button>
        </nav>
      </header>
      <table>
        <tr>
          <th>ქალი</th>
          <th>მამაკაცი</th>
          <th>ბავშვი</th>
        </tr>
        <tr>
          <Products title={produqcia[0]}></Products>
          <Products title={produqcia[1]}></Products>
          <Products title={produqcia[2]}></Products>
        </tr>
        <tr>
          <Products title={produqcia[3]}></Products>
          <Products title={produqcia[4]}></Products>
          <Products title={produqcia[5]}></Products>
        </tr>
        <tr>
          <Products title={produqcia[6]}></Products>
          <Products title={produqcia[7]}></Products>
          <Products title={produqcia[8]}></Products>
        </tr>
      </table>
     
    </div>
    );
   
   
}

export default App;

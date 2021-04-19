import UserCard from "./components/UserCard";
import Header from "./components/Header";

import './App.css';
import HouseList from "./components/HouseList";
import Card from "./components/Card";
import list from "./houseList.json";
import ProductCard from "./components/ProductCard";

const user1 = {
  name: "Джейме Ланнистер",
  word: "Услышь мой рёв!",
  wife: "Серсея Ланнистер"
};
const user2 = {
  name: "Станнис Баратеон",
  word: "Нам ярость!",
  wife: "жрица Р'глора"
};

function App() {
  return (
    <div className="App">
      <ProductCard title="Lenovo X120S" price="14500" stockPrice="13000" />
      <ProductCard title="MacBook Air" price="34500" />
      <ProductCard title="" price="34500" />
      {/* <Card>
        <h3>Product name</h3>
        <p>product description</p>
      </Card>
      <Card>
        <h3>User name</h3>
        <p>Email: </p>
      </Card> */}
      {/* <HouseList list={list} /> */}
      {/* <UserCard name={user1.name} word={user1.word} wife={user1.wife} />
      <UserCard {...user2} /> */}
      {/* <Header /> */}
    </div>
  );
}

export default App;

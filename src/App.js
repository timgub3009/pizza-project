import "./App.css";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from './components/PizzaBlock';

import pizzaCatalogue from './assets/pizzas.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzaCatalogue.map((pizzaItem) => (
                        <PizzaBlock 
                        key={pizzaItem.id}
         {... pizzaItem}
                        />
                        ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

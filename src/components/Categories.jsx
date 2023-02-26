import React from "react";

function Categories() {

const [isActive, setIsActive] = React.useState(0);

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const onClickChooseCategory = (index) => {
  setIsActive(index);
}

//мы задаем значение в колбэке он кликчузкэтегори. к примеру, 2 при клике по вегетарианской. эта цифра идет в онкликликчузкэтегори наверх в функцию. далее, эта цифра 2 уходит в сэтизэктив. а из сэтизэктив уходит уже в значение переменной изэктив. а та в свою очередь проверяется на соответствие условию и если ===, то присваивается статус изэктив и элемент чернеет. то есть происходит перерендерминг и меняется юзстейт. 

  return (
    <div className="categories">
      <ul>
      {categories.map((value, index) => (
        <li className={isActive === index ? 'active' : ''} onClick={() => {onClickChooseCategory(index)}}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

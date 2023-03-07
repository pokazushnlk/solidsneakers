function App() {
  return( 
<div className="wrapper-header">
    <header>
      <div className="header-left">
      <img width={40} height={40} src="/img/image.svg"></img>
        <div className="header-info">
          <h3>Solid Sneakers</h3>
          <p>Брендовые кроссовки</p>
        </div>
        </div>
        <ul className="header-right">
          <li>
              <img width={18}  height={18} src="/img/cart.svg"></img>
              <span>1205 руб.</span>
          </li>
          <li>
              <img width={18}  height={18} src="/img/profile.svg"></img>
          </li>
        </ul>
    </header>
    <div className="content">
      <h1 className="mb-40">Все кроссовки</h1>
     

      <div className="sneakers">
      <div className="card">
        <img width={133} height={112} src="/img/sneakers/1.jpg"></img>
        <h5>
          Мужские Кроссовки Under Armour Curry 8
        </h5>
        <div className="card-bottom">
          <div className="card-content">
            <span>
              Цена: 
            </span>
            <b>12990 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/addbutton.svg"></img>
          </button>
        </div>
      </div>
     

      <div className="card">
        <img width={133} height={112} src="/img/sneakers/2.jpg"></img>
        <h5>
          Мужские Кроссовки Under Armour Curry 8
        </h5>
        <div className="card-bottom">
          <div className="card-content">
            <span>
              Цена: 
            </span>
            <b>12990 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/addbutton.svg"></img>
          </button>
        </div>
      </div>
     

      <div className="card">
        <img width={133} height={112} src="/img/sneakers/3.jpg"></img>
        <h5>
          Мужские Кроссовки Under Armour Curry 8
        </h5>
        <div className="card-bottom">
          <div className="card-content">
            <span>
              Цена: 
            </span>
            <b>12990 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/addbutton.svg"></img>
          </button>
        </div>
      </div>

      
      <div className="card">
        <img width={133} height={112} src="/img/sneakers/4.jpg"></img>
        <h5>
          Мужские Кроссовки Under Armour Curry 8
        </h5>
        <div className="card-bottom">
          <div className="card-content">
            <span>
              Цена: 
            </span>
            <b>12990 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/addbutton.svg"></img>
          </button>
        </div>
      </div>
      
      
      </div>
   
    </div>

</div>
  );
}

export default App;

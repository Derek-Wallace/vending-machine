import { ProxyState } from "../AppState.js";
import { moneyService } from "../Services/MoneyService.js";

function _drawMoney(){
  let template = /*html*/ `
  <div>
    <h3>$${ProxyState.money.amount}</h3>
    <img src="https://images-na.ssl-images-amazon.com/images/I/51PWs1rlEyL._AC_SY355_.jpg" onclick=(app.customerController.newMoney()) height = 100px>
  </div>
  `
  document.getElementById("money").innerHTML = template
}

export class CustomerController{
  constructor(){
    ProxyState.on("money", _drawMoney)
    _drawMoney()
  }
  
  newMoney(){
    moneyService.addMoney()
  }
}


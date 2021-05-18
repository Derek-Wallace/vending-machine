import { ProxyState } from "../AppState.js";

class MoneyService{
  addMoney(){
    ProxyState.money.amount += .25
    ProxyState.money = ProxyState.money
  }
}

export const moneyService = new MoneyService()
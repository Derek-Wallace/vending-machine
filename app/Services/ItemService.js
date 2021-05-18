import { ProxyState } from "../AppState.js";

class ItemService{
  addItem(itemName){
    let item = ProxyState.items[itemName]
    if (!item){
      throw new Error ("No item by that name")
    }
    if (ProxyState.money.amount >= item.price){
    ProxyState.money.amount -= item.price
    ProxyState.money = ProxyState.money
    alert(`You bought ${itemName}`)
    } 
    else {alert("insufficent Money")}
  }
}

export const itemService = new ItemService()
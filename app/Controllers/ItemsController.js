import { ProxyState } from "../AppState.js";
import { itemService } from "../Services/ItemService.js";


function _drawItem(){
  let template = ''
  Object.values(ProxyState.items)
  .forEach(item =>{
    template += /*html*/ `
    <div class="text-center">
      <img src= ${item.img} onclick ="app.itemsController.buyItem('${item.name}')" height = "200px">
      <h5>$${item.price}</h5>
    </div>
    ` 
  })
  document.getElementById("app").innerHTML = template
}
export class ItemsController{
  constructor(){
    ProxyState.on('items', _drawItem)
    _drawItem()
  }
  buyItem(itemName){
    itemService.addItem(itemName)
  }
}
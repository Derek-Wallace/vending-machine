
import { Item } from "./Models/Item.js"
import { Money } from "./Models/Money.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
items = {
  Chips: new Item("Chips", 1.50, "https://images.heb.com/is/image/HEBGrocery/001865756"),
  Soda: new Item("Soda", 2, "https://i5.walmartimages.com/asr/21ee5be0-6b42-463a-bb65-c730e4a9bf4d_1.b6280b1e3a71d085bc6f07c2ef3a9fde.jpeg"),
  Cookies: new Item("Cookies", 5, "https://images-na.ssl-images-amazon.com/images/I/81YMn2YZ0uL._SL1125_.jpg")
}
money = new Money(0)
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

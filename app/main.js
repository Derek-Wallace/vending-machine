import { CustomerController } from "./Controllers/CustomerController.js";
import { ItemsController } from "./Controllers/ItemsController.js";


class App {
itemsController = new ItemsController
customerController = new CustomerController
}

window["app"] = new App();

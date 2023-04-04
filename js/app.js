let item_names = ["Item1", "Item2", "Item3"];
let item_prices = [9.99, 19.99, 29.99];
let in_stock = [true, false, true];

let first_item_name = item_names[0];
let first_item_price = item_prices[0];

item_names.push("Item4");
item_prices.push(39.99);
in_stock.push(false);

let last_item_name = item_names.pop();
let last_item_price = item_prices.pop();
let last_item_stock = in_stock.pop();
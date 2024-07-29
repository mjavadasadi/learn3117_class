let ShopingList = [
  { name: "سیب", price: 3000, quantity: 2 }, //0
  { name: "نان", price: 2000, quantity: 1 }, //1
  { name: "شیر", price: 1000, quantity: 3 }, //2
];

// push

//splice

//forEach
//map

//filter

//reduce

let totalCost = ShopingList.reduce((total, item) => 
  total +(item.price*item.quantity),0);

// ShopingList.push({ name: "تخم مرغ", price: 4000, quantity: 12 });//3

// ShopingList.splice(2,1)

// splice(start,number)

// ShopingList.forEach(item=>console.log('item+++++>',item))

// let productName=ShopingList.map(item=>item.quantity)

// console.log('productName==========>',productName);

// let expensiveItems =ShopingList.filter(item=>item.price<3000)

console.log("totalCost====>", totalCost);

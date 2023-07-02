'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birhday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}
console.log(typeof (Object.keys(user)[0]));

const userMap = new Map(Object.entries(user));

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

const shops = [
    { rice: 500 },
    { oil: 200 },
    { bread: 50 }
]

const budget = [5000, 15000, 25000];

const map = new Map([
    [{ paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
})

console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
//map.keys();

// const goods = [];
// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0])
// }
// console.log(goods)

// for (let price of map.values()) {
//     console.log(price);
// }

// for (let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

// map.forEach((value, key, map) => {
//     console.log(key, value);
// });


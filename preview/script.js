'use strict';

// const bigint = 46456546654654621651654621313541654516516516546546546556516416n;

const sameBigint = BigInt(46456546654654621651654621313541654516516516546546546556516416);

// console.log(Math.round(2n +++ 2));

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);
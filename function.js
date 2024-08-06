// function geet(name ) {
//     return `سلام ${name} `
// }

// console.log(geet('علی','جواد'))

function riskyFunction(name) {
//  throw new Error('این خطا تست است')
console.log(name);
}



try {
  let result = riskyFunction('ahmad');
  console.log(result);
} catch (error) {
    console.log(`خطای رخ داده==>`,error)
}

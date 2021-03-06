// Spread object and array
const item = { type: 'π', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

// bad code
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = item.price;
newObject['made'] = item.made;
newObject['gender'] = item.gender;

// good code
const shirt0 = Object.assign(item, detail);

const shirt = { ...item, ...detail };
const shirt = { ...item, ...detail, price: 40 };  // deatil μ price λ§ 40 μΌλ‘ λ³κ²½

// spread syntax - array
let fruites = ['π', 'π', 'π']
// fruits.push('π')
fruits = [...fruites, 'π']
// fruits.unshift('π')
fruits = ['π', ...fruites]

const fruits2 = ['π', 'π', 'π'];
let combined = fruits.concat(fruits2);
combined = [...fruits, ... fruits2];
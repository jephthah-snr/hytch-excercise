//understanding the spread operator with res and destructuring 


const [lastitem, ...rest] = { id: 1, name: 'Ben', isLoggedIn: true }

console.log(lastitem)
console.log(rest)
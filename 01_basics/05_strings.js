const name="shaunak"

console.log(name +" "+ "suryawanshi");
// But this is actually outdated new method has been introduced

console.log(`hello my name is ${name} and surname is ${"suryawanshi"}`)//=>this is the modern method

const gameName = new String("shaunak")
console.log(gameName[0])

console.log(gameName.toUpperCase())
console.log(gameName.indexOf('u'))
console.log(gameName.charAt(5))
console.log(gameName.substring(0,5))
console.log(gameName.slice(-5))

const Man= new String("      shaunakkk    ")
console.log(Man.trimStart())
console.log(Man.trimEnd())

console.log(gameName.includes("x"))
//=>false

console.log(gameName.split('-'))




let num = [98, 54, 12, 28, 1]
num.sort()
console.log(num)
num.push(16)

console.log(`O array num tem ${num.length} elementos, sendo que o último deles, possui o valor igual a ${num[5]}.`)

//Colocando os elementos na ordem crescente com o método .sort()

console.log(num)
num.sort()
console.log(num)

//Percurso simplificado em vetores

for(let pos in num) {
    console.log(`A posição ${pos} possui o valor ${num[pos]}`)
}

//Buscando Valores com o método .indexOf()

let posicao = num.indexOf(9)

if(posicao == -1) {
    console.log("O valor não foi encontrado!")
}

else {
    console.log(`O valor foi encontrado na posição ${posicao}`)
}



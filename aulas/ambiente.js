let num = [5, 9 ,2 ,3, 4, 6]
num.sort()
/*for(let pos ; pos < num.length; pos++){
    console.log(`vetor na posição ${pos} é ${num[pos]}`)
}

console.log(`Nosso vetor é ${num} e tem ${num.length} elementos`)*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor de ${num[pos]}`)
}

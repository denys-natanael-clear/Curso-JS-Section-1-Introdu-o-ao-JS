// estrutura de controle switch

    let cor = 'vermelho'
    
    switch(cor){

        case "verde":
        console.log('siga')
        break

        case "amarelo":
        console.log('atenção')
        break

        case "vermelho":
        console.log('pare')
        break

        default:
            console.log('não sei')
    }

// laço de repetição for

    let n = 5

    for (let i = 0; i <= 10; i++){

        console.log(`${i} x ${n} = ${i*n}`)
        console.log(i + " X " + n + " = " + (i * n))

    }
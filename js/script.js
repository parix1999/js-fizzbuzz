// inizio programma, deve contare fino a 100 magari con il for e
// per i multipli di 3 deve scrivere "Fizz" per i multipli di 5 deve
// scrivere invece "Buzz" e per quelli sia di 3 che di 5 "FizzBuzz".

// per riconoscere i numeri multipli di 3 e 5 devono essere divisibili per essi
// usando il segno modulo posso sapere se lo sono, una volta divisi
// e non procurano alcun resto lo dovrebbero essere.

// variabile di stampa:
var outPut = document.getElementById('result');

// inizio conta


var conto = 0;
for (var x = 1; x <=100; x++) {
    parseInt(conto) + parseInt(x); 
    outPut.innerHTML += "<br>"+ parseInt(x) ;
    
    if (x % 3 === 0 && x % 5 === 0) {
        outPut.innerHTML += 'FizzBuzz' ;
      
    }else if (x % 3 === 0) {
        outPut.innerHTML += 'Fizz' ;
    
    }else if (x % 5 === 0){
        outPut.innerHTML += 'Buzz' ;
    
    }

}



// inizio programma, deve contare fino a 100 magari con il for e
// per i multipli di 3 deve scrivere "Fizz" per i multipli di 5 deve
// scrivere invece "Buzz" e per quelli sia di 3 che di 5 "FizzBuzz".

// per riconoscere i numeri multipli di 3 e 5 devono essere divisibili per essi
// usando il segno modulo posso sapere se lo sono, una volta divisi
// e non procurano alcun resto lo dovrebbero essere.

// variabile di stampa:


// inizio conta


var conto = 0;
for (var x = 1; x <=100; x++) {
    var somma = conto + x;
    document.getElementById('result').innerHTML += "<br>" + somma;
}



// function sprawdz(){
//     let liczba= document.getElementById("pole").value;

//     if(liczba>0) document.getElementById("wynik").innerHTML="dodatnia";
//     else if (liczba<0) document.getElementById("wynik").innerHTML="ujemna";
//     else if (liczba===0)document.getElementById("wynik").innerHTML="zero";
//     else document.getElementById("wynik").innerHTML="to nie liczba";
// }

function wypisz(){
    var liczba1 = document.getElementById("pole1").value;
    var liczba2 = document.getElementById("pole2").value;
    var napis="";

    // if (liczba1 || liczba2 != "number" ) document.getElementById("pod").innerHTML = "Wprowadz liczbe";
    // if (typeof liczba1 || typeof liczba2 != "number" ) document.getElementById("pod").innerHTML = "Wprowadz liczbe";
    // if (typeof liczba1 != 'number' || typeof liczba2 != 'number' ){
    //     document.write("dlaczego tak to dziala a jak wrzucam innerhtml to nie? :D");
   
   
   
    // if (typeof liczba1 != 'number' || typeof liczba2 != 'number' ){
    //     document.getElementById("pod").innerHTML = "To nie byla liczba";
    //     throw new Error("Bledna wartosc, przeladuj strone");
    // }
    // else if (liczba1 >= liczba2){
    //     document.getElementById("pod").innerHTML = "Pierwsza liczba musi byc mniejsza od drugiej omg";
    //     throw new Error("NO heloł");
    // }
    // else{
    //     for(i=liczba1; i<=liczba2; i++){
    //         napis += i +" ";
    //     }
    //     document.getElementById("pod").innerHTML = napis;
    // }

    
    // powyższe działało do momentu dodania warunku o liczba1 >= liczba 2--> jak poniżej (po próbie ofc przestało działać, ale nvm)
    
    // if (typeof liczba1 != 'number' || typeof liczba2 != 'number' ){
    //     document.getElementById("pod").innerHTML = "To nie byla liczba";
    //     throw new Error("Bledna wartosc, przeladuj strone");
    // }
    // for(i=liczba1; i<=liczba2; i++){
    //             napis += i +" ";
    // }
    //     document.getElementById("pod").innerHTML = napis;

    var numer = Math.floor(Math.random()*5)+1;

    function zmienSlajd(){
        numer++; 
        if (numer>5) numer=1;

        var plik = "<img src=\"slajdy/slajd" + numer + ".png\"/>"; // definiujemy ktory plik bedzie wyswietlony przez ponizsza funkcje
        document.getElementById("slider").innerHTML=plik;
        setTimeout("zmienSlajd", 5000); // po 5 sekundach nastapi zmiana.
    }
    // W tym momencie Pan Zelent ciśnie w jQuery, którego jeszcze nie chcę poznać :) Pozatym animacja "pojawiania się obrazka "fadein/fadeout" pewnie da się jakoś inaczej zrobic niż jQ
    // 




}
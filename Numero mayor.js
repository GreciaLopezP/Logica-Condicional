//Numero mayor
var n1= prompt("Escribe un numero: ");
var n2= prompt("Escribe un numero: ");
var n3= prompt("Escribe un numero: ");
alert(n1,n2,n3);
if (n1>n2 && n1>n3) {
    alert("De " + n1+" " + n2+ " " + n3+ " El número mayor es: " + n1);
} else if (n2>n1 && n2>n3) {
    alert("De " + n1+" " + n2+ " " + n3+ " El número mayor es: " + n2);
} 
else{
    alert("De " + n1+" " + n2+ " " + n3+ " El número mayor es: " + n3);
}


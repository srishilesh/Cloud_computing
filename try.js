function change(){
    document.getElementById('jsdemo').innerHTML='Hello';
    var a = 1;
    var b = 2;
    var c = a + b;var d;
    if(c%2==0)
    d = "even";
    else
    d = "odd";

    document.getElementById('jsdemo').innerHTML=d;
}

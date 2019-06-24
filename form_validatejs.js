function validate()
{
var addr = document.getElementById("addr").value;
var addr2 = document.getElementById("addr2").value;
var city = document.getElementById("city").value;
var state = document.getElementById("state").value;
var zip = document.getElementById("zip").value;
if(addr=="")
alert("Enter your Address");
if(addr2=="")
alert("Enter your Address2");
if(city=="")
alert("Enter your city");
if(state=="")
alert("Enter your state");
if(zip=="")
alert("Enter your zip code");
}

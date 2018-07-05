function printFunction(){
var data=document.getElementById('box').value;
document.getElementById('demo').innerHTML=data;
}

function uppercase(){
	var text=document.getElementById("box").value;
	if(text!=""){
	text=text.toUpperCase();
	document.getElementById("demo").innerHTML=text;
}
else{
	alert("Enter Something")
}
}


function lowercase(){
	var text=document.getElementById("box").value;
	if(text!=""){
	text=text.toLowerCase();
	document.getElementById("demo").innerHTML=text;
}
else{
	alert("Enter Some Text..")
}
}




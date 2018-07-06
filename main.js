
var list=[];
var temp;

function validate(){
	temp=document.getElementById('box').value.toUpperCase();
	if(temp==""){
		alert("Type something!");
		return false;
	}
	else{
		return true;
	}
}



function add(){
if(validate()){
list.push(temp);
console.log(list);
display();
document.getElementById('box').value="";
document.getElementById('box').focus();
}
else
return false;
}



function display(){
/*var str="";
for (var a=list.length-1;a>=0;a--){
str+="<br>"+list[a];
}
document.getElementById('demo').innerHTML=str;*/
var text="<ul>";
for (var a=list.length-1;a>=0;a--){
text+="<li id='"+a+"'>"+list[a]+"</li>";
}
text+="</ul>";
document.getElementById('list').innerHTML=text;
}


function del(){

	if(list.length==0){
		alert("There are no elements inside stack!");
	}
	else{
	list.pop();
	display();
	}
}
var list=[];

function validate(str,focusBox){
	
	var exp=new RegExp('^[A-Z]+$','i');
	if(str==""){
	alert("Type something");
	document.getElementById(focusBox).focus();
	return false;
	}
	else if(exp.test(str)){
		return true;
	}
	else{
		alert("Enter only words which contain alphabets!");
		document.getElementById(focusBox).focus();
		document.getElementById(focusBox).value="";
		return false;
	}
}


function myFunction(){
var inp=document.getElementById('uinput').value;
var re=new RegExp('^A','i');// i flags helps in case in sesitive matching
//var re2=new RegExp('^a');

if(validate(inp,"uinput"))
{
	if(re.test(inp))
	{
	
		document.getElementById("demo").innerHTML=inp;
		document.getElementById('uinput').focus();
		document.getElementById("uinput").value="";
		return true;
	}	
	else{
		alert("NO! Type a String that starts with A or a");
		document.getElementById('uinput').focus();
		document.getElementById("uinput").value="";
		return false;
	}
}

}

function secondFunction(){
	var box2=document.getElementById('box2').value;
	var exp=new RegExp('(at)$','i');
	if(validate(box2,'box2')){
		if(exp.test(box2))
		{
			
			document.getElementById("demo").innerHTML=box2;
			document.getElementById('box2').focus();
			document.getElementById("box2").value="";
			return true;
		}	
		else{
		alert("NO! Type a String that ends with at");
		document.getElementById('box2').focus();
		document.getElementById("box2").value="";
		return false;
		}
}
}


function add(){
	var str=document.getElementById('word').value;
		if(validate(str,'word')){
			list.push(str);
			document.getElementById('word').focus();
			document.getElementById('word').value="";
			console.log(list);
		}
}


function searchFunction(){
var letter=document.getElementById('search').value;
//var ar=['apple','ant','art','ankle','antic','banana','bat','car','cat'];
if(letter!="")
{
if(list.length!=0)
{
var str="";
var exp=new RegExp('^'+(letter),'i');
for(var i=0;i<list.length;i++){
	if(exp.test(list[i])){
		str+=list[i]+"<br>";
	}
}
document.getElementById('list').innerHTML=str;
}
else{
	alert("First Enter some words into list");
	document.getElementById('search').value="";
	document.getElementById('word').focus();
	document.getElementById('word').value="";
}
}
else{
	
	document.getElementById('list').innerHTML="";
}
}

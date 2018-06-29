      
      var a;      //global variables a and b
  		var b;
  		function validate(){
  			a=Number(document.getElementById('a').value);
  			b=Number(document.getElementById('b').value);
  		  if(a==""||b==""){
  			   alert("Please enter two numbers");
  			   return false;
  		  }
  		  else 
  			   return true;
  		}

      //Function to add the two numbers
  		function add(){

  		 // var a=Number(document.getElementById('a').value);
  		 // var b=Number(document.getElementById('b').value);
  		  if(validate()){
  		      document.getElementById("demo").innerHTML="Sum is: "+(a+b);	
  	     }
  }

    //Function to subtract two numbers
		function subract(){
      
  		if(validate()){
  		    document.getElementById("demo").innerHTML="Difference is: "+(a-b);
  	   }
}
    //Function to multiply two numbers
		function multiply(){ 

  		if(validate()){
  		    document.getElementById("demo").innerHTML="Product is: "+(a*b);
  	   }
}

    //Function to divide two numbers and get quotient
		function quotient(){

  		if(validate()){
  		    document.getElementById("demo").innerHTML="Quotient is: "+(a/b);
  	   }
}


    //Function to get remainder after division
		function remainder(){

  		// var a=document.getElementById('a').value;
  		// var b=document.getElementById('b').value;
  		if(validate()){
  		    document.getElementById("demo").innerHTML="Remainder is: "+(a%b);
  	   }
}
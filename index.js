function stringGen()

{
  
 //Type your code here.
  
 var inp=document.getElementById("num").value;

   var alphabets='a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
	
	
   var array=alphabets.split(',');
	var allowedIndex=array.length-1;
	
   var str="";

   for(var i=0;i<inp;i++)
{
      
 str+=array[Math.floor(Math.random()*allowedIndex)];
   }
   
document.getElementById("result").innerHTML=str;

    return str;

}


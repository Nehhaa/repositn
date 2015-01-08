var usedNums=new Array(91);
var counter=15;

window.onload=function newcard()

{

for(i=0;i<=26;i++)
{
do{

var newnum=getNum(i);
}
while(usedNums[newnum]);
var decision=Math.floor(Math.random()*2);
if(counter!=0 && decision==1)

{




document.getElementById("sq"+i).innerHTML=newnum;
 usedNums[newnum]=true;
counter--;
}
}
}

function getNum(i)
{
var newnum;
var colplace= new Array(0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8);

if(i==0||i==9||i==18)
{


newnum=colplace[i]*10+Math.ceil(Math.random()*9);


}
else if(i==8||i==17||i==26)
{

newnum=colplace[i]*10+Math.floor(Math.random()*11);


}
else
{
 newnum=colplace[i]*10+Math.floor(Math.random()*10);

}
return newnum;
}



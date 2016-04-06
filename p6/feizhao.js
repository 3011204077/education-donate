var decimalAdded = false;
var button;
var flag=1;
var calcutemp=0;
var optemp=0;
var op=0;
var inf=0;
for(var i=0;i<=9;i++)
{
	button = document.getElementById("button-"+i);
	button.onclick = function(e){
		
		if(display.innerHTML=='0')
			display.innerHTML=e.target.id.substring(7);
		else{
				if(op==0 && display.innerHTML.length<15)
					display.innerHTML+=e.target.id.substring(7);
				else if(op==1)
					{
					 display.innerHTML=e.target.id.substring(7);
					 op=0;
					}
			}		
	}
}

button=document.getElementById("button-clear");
button.onclick=function(e){
	display.innerHTML=0;
	display2.innerHTML='';
	decimalAdded = false;
	op=0;
	optemp=0;
	calcutemp=0;
	calcutemp2=0;
}

button=document.getElementById("button-dot");
button.onclick=function(e){
	if(decimalAdded==false)
	{	display.innerHTML=display.innerHTML+'.';
		decimalAdded=true;
	}
}


button = document.getElementById("button-pn");
button.onclick = function(e) { 
	if(display.innerHTML!=0)
		display.innerHTML=display.innerHTML*(-1);
}




button = document.getElementById("button-plus");
button.onclick = function(e){
	display2.innerHTML = '+';
	if(optemp==0)
		{
			calcutemp = display.innerHTML;
	 	
	 	}
	else if(op!=1)
		{
			if(optemp=='+')
				display.innerHTML=Number(calcutemp)+Number(display.innerHTML);
			if(optemp=='-')
				display.innerHTML=Number(calcutemp)-Number(display.innerHTML);
			if(optemp=='*')
				display.innerHTML=Number(calcutemp)*Number(display.innerHTML);
			if(optemp=='/')
				display.innerHTML=Number(calcutemp)/Number(display.innerHTML);
			calcutemp=display.innerHTML;
		}
	op=1;
	optemp = '+';
}

button = document.getElementById("button-minus");
button.onclick = function(e){
	display2.innerHTML = '-';
	if(optemp==0)
		{
			calcutemp = display.innerHTML;
	 	}
	else if(op!=1)
		{
			if(optemp=='+')
				display.innerHTML=Number(calcutemp)+Number(display.innerHTML);
			if(optemp=='-')
				display.innerHTML=Number(calcutemp)-Number(display.innerHTML);
			if(optemp=='*')
				display.innerHTML=Number(calcutemp)*Number(display.innerHTML);
			if(optemp=='/')
				display.innerHTML=Number(calcutemp)/Number(display.innerHTML);
			calcutemp=display.innerHTML;
		}
	optemp='-';
	op=1;
}

button = document.getElementById("button-divide");
button.onclick = function(e){
	display2.innerHTML = '&#247';
	if(optemp==0)
		{
			calcutemp = display.innerHTML;

	 	}
	else if(op!=1)
		{
			if(optemp=='+')
				display.innerHTML=Number(calcutemp)+Number(display.innerHTML);
			if(optemp=='-')
				display.innerHTML=Number(calcutemp)-Number(display.innerHTML);
			if(optemp=='*')
				display.innerHTML=Number(calcutemp)*Number(display.innerHTML);
			if(optemp=='/')
				display.innerHTML=Number(calcutemp)/Number(display.innerHTML);
			calcutemp=display.innerHTML;

		}

	op=1;
	optemp = '/';
}

button = document.getElementById("button-multi");
button.onclick = function(e){
	display2.innerHTML = '&#215';
	if(optemp==0)
		{
			calcutemp = display.innerHTML;
	 	}
	else if(op!=1)
		{
			if(optemp=='+')
				display.innerHTML=Number(calcutemp)+Number(display.innerHTML);
			if(optemp=='-')
				display.innerHTML=Number(calcutemp)-Number(display.innerHTML);
			if(optemp=='*')
				display.innerHTML=Number(calcutemp)*Number(display.innerHTML);
			if(optemp=='/')
				display.innerHTML=Number(calcutemp)/Number(display.innerHTML);
			calcutemp=display.innerHTML;

		}
	op=1;
	optemp = '*';
}

button = document.getElementById("button-eq");
button.onclick = function(e){
	if(optemp!=0)
	{
		if(optemp=='+')
			display.innerHTML=Number(calcutemp)+Number(display.innerHTML);
		if(optemp=='-')
			display.innerHTML=Number(calcutemp)-Number(display.innerHTML);
		if(optemp=='*')
			display.innerHTML=Number(calcutemp)*Number(display.innerHTML);
		if(optemp=='/')
			display.innerHTML=Number(calcutemp)/Number(display.innerHTML);
		optemp=0;
		display2.innerHTML='';
	}
	op=1;
	if(display.innerHTML=='Infinity'){
		display.innerHTML='Not a number';
		display2.innerHTML='';
		inf=1;
		//decimalAdded = true;
		//op=0;
		//optemp=0;
		//calcutemp=0;
		//calcutemp2=0;
	}

}

	/*if(display.innerHTML=='Infinity'){
		display.innerHTML='Not a number';
		display2.innerHTML='';
		decimalAdded = false;
		op=0;
		optemp=0;
		calcutemp=0;
		calcutemp2=0;
	}*/

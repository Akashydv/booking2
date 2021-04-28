$( document ).ready(function() {
    $('#rooms').val('1');
    $('#guests').val('1');
    $('#kids').val('0');
});

var prevval = parseInt(1);
var prevval2 = parseInt(1);
var prevval3 = parseInt(0);

var ramt = 2800; // take value here
var sga = ramt/2;

function validateData(x=null,prevval,min=0,max=10){
		
	if(x!=null && !isNaN(x)){

		x = parseInt(x);

		if(isNaN(x)){x=min;}

		if(x>max || x<min)
			return(prevval);

		else
			return(x);
			//change case
	}
	else
		return(prevval);

}


//buttons fx

function docalc(c='1',operator='add'){

	var inputid = '';

	switch (c) {

	  case 1:
	    inputid = "#rooms";
		break; 

	  case 2:
	    inputid = "#guests";
		break; 

	  case 3:
	    inputid = "#kids";
	    break; 

	  default:
	  inputid = "0";

	}

	if (!(inputid=='0')){
		
		var ipvalue;

		(operator == 'add') ? ipvalue = (parseInt($(inputid).val())+1) : ipvalue = (parseInt($(inputid).val())-1);

	    $(inputid).val(ipvalue);
	    $(inputid).trigger( 'input' );

	}

}


function calctotal(){
	
	var guestamt=0,gv,rv;

	gv = parseInt($("#guests").val());
	rv = parseInt($("#rooms").val());

	guestamt = (gv - ( 2 * rv ))*sga ;

	if( guestamt<0 ){ guestamt=0; }

	var finalprice = ( ( ramt * rv ) + guestamt ) ;

	$("#price").text( finalprice ) ;



}


$("#guests").on('input', function(){

    var r = $("#guests").val();

    var newval = validateData(r,prevval2,1,30);
    console.log(newval);

    prevval2 = newval;
    $("#guests").val(newval);

	newval = parseInt(newval);

	var xroom = $("#rooms").val();

		if ( newval>=1 && newval<=3 ){
			//no change
			xroom=1;
		}
		else if ( newval>=4 && newval<=6 ){
			
			// if(parseInt($("#rooms").val())<2){
			xroom=2;
			// }
		
		}
		else if ( newval>=7 && newval<=9 ){
			
			// if(parseInt($("#rooms").val())<3){
			xroom=3;
			// }
		
		}
		else if ( newval>=10 && newval<=12 ){
			
			// if(parseInt($("#rooms").val())<4){
			xroom=4;
			// }
		
		}
		else if ( newval>=13 && newval<=15 ){
			
			// if(parseInt($("#rooms").val())<5){
			xroom=5;
			// }
		
		}
		else if ( newval>=16 && newval<=18 ){
			
			// if(parseInt($("#rooms").val())<6){
			xroom=6;
			// }
		
		}
		else if ( newval>=19 && newval<=21 ){
			
			// if(parseInt($("#rooms").val())<7){
			xroom=7;
			// }
		
		}
		else if ( newval>=22 && newval<=24 ){
			
			// if(parseInt($("#rooms").val())<8){
			xroom=8;
			// }
		
		}
		else if ( newval>=25 && newval<=27 ){
			
			// if(parseInt($("#rooms").val())<9){
			xroom=9;
			// }
		
		}
		else if ( newval>=28 && newval<=30 ){
			
			// if(parseInt($("#rooms").val())<10){
			xroom=10;
			// }
		
		}

	    $("#rooms").val(xroom);

		$("#rooms").trigger( 'input' );


	    calctotal();

});



$("#kids").on('input', function(){    

    var r = parseInt($("#kids").val());

    var newval = validateData(r,prevval3,0,10);
    console.log(newval);

    prevval3 = newval;
    $("#kids").val(newval);

});


$("#rooms").on('input', function(){    

    var r = $("#rooms").val();

    var newval = validateData(r,prevval,1,10);
    console.log(newval);

    var gv = parseInt( $("#guests").val() );

    var xroom2;
		if ( gv>=1 && gv<=3 ){
			//no change
			xroom2=1;

		}
		else if ( gv>=4 && gv<=6 ){
			
			
			xroom2=2;
		
		}
		else if ( gv>=7 && gv<=9 ){
			
			// if(parseInt($("#rooms").val())<3){
			xroom2=3;
			// }
		
		}
		else if ( gv>=10 && gv<=12 ){
			
			// if(parseInt($("#rooms").val())<4){
			xroom2=4;
			// }
		
		}
		else if ( gv>=13 && gv<=15 ){
			
			// if(parseInt($("#rooms").val())<5){
			xroom2=5;
			// }
		
		}
		else if ( gv>=16 && gv<=18 ){
			
			// if(parseInt($("#rooms").val())<6){
			xroom2=6;
			// }
		
		}
		else if ( gv>=19 && gv<=21 ){
			
			// if(parseInt($("#rooms").val())<7){
			xroom2=7;
			// }
		
		}
		else if ( gv>=22 && gv<=24 ){
			
			// if(parseInt($("#rooms").val())<8){
			xroom2=8;
			// }
		
		}
		else if ( gv>=25 && gv<=27 ){
			
			// if(parseInt($("#rooms").val())<9){
			xroom2=9;
			// }
		
		}
		else if ( gv>=28 && gv<=30 ){
			
			// if(parseInt($("#rooms").val())<10){
			xroom2=10;
			// }
		
		}


	if ( newval<xroom2 ){
		newval = xroom2;
	}

    prevval = newval;
    $("#rooms").val(newval);

calctotal();

});







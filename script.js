var add = function(a,b){
	return a+b;
}
var subtract = function(a,b){
	return a-b;
}
var multiply = function(a,b){
	return a*b;
}
var divide = function(a,b){
	return a/b;
}
var operate = function(a,b,operator){
	if(operator == "/"){		
		return divide(a,b);
	}
	else if(operator == "*"){		
		return multiply(a,b);
	}
	else if(operator == "+"){
		return add(a,b);
	}
	else if(operator == "-"){
		return subtract(a,b);
	}
}
/*
var getInput = function(){
	var input;
	$('button').click(function(){
		input = $(this).text();
	});
	return input;
};
*/
var input,addInput;

$(document).ready(function(){
	$('.number').click(function(){
		input = $(this).text();  //input is a string so parseInt turns it into an integer
		//if(isNaN(parseInt(input)) == false){ //isNaN checks if it is not a number
		
			const number = input;
			$('.answer').text(number);
			console.log(number);
		
	});
        $('.add').click(function(){			
			const addInput = $(this).text();
			console.log("This is add " + addInput);
	
	});
	//if(input == "="){
	//	$('.answer').text(add(input,addInput));
	
	//}
});

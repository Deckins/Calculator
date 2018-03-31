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
var input;
var result=[];
var beforeOP,afterOP,total;
$(document).ready(function(){
	$('.number').click(function(){
		input = $(this).text();  //input is a string so parseInt turns it into an integer
		result.push(input);
		$('.answer').text(result);
		//if(isNaN(parseInt(input)) == false){ //isNaN checks if it is not a number
		console.log(input);
	});
        $('.add').click(function(){
		input = $(this).text();
		console.log(input);
		result.push(input);
		$('.answer').text(result);	
	});
	$('.subtract').click(function(){
		input = $(this).text();
		result.push(input);
		$('.answer').text(result);

	});
	$('.multiply').click(function(){
		input = $(this).text();
		result.push(input);
		$('.answer').text(result);
		
	});
	$('.divide').click(function(){
		input = $(this).text();
		result.push(input);
		$('.answer').text(result.join(""));
	})
	$('.equal').click(function(){
		result.forEach(function(element,index,array){
			if(isNaN(parseInt(element)) == true){	
				beforeOP = result.splice(0,index).join("");
				afterOP = result.splice(1).join("");
				if(element == "+"){
					total = parseInt(beforeOP) + parseInt(afterOP);		
				}
				if(element == "-"){
					total = parseInt(beforeOP) - parseInt(afterOP);
				}
				if(element == "*"){
					total = parseInt(beforeOP) * parseInt(afterOP);
				}
				if(element == "/"){
					total = parseInt(beforeOP) / parseInt(afterOP);
				}
				$('.answer').text(total);
			}
	

		});
	});
});

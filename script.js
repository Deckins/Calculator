
var input;
var result=[];
var beforeOP,afterOP,total;
function getInput(){

	if(isNaN(parseInt(result[result.length - 1])) == false)//if the last element is a number then  
	{
		result.push($(this).text());
		$('.answer').text(result.join(""));
	}

}
$(document).ready(function(){
	$('.number').click(function(){
		input = $(this).text();  //input is a string so parseInt turns it into an integer
		result.push(input);
		$('.answer').text(result.join(""));
		console.log(input);
	
		;
	});
	$('.decimal').click(function(){
		if(isNaN(parseInt(result[result.length - 1])) == false)//if the last element is a number then
		{
			result.push($(this).text());
			$('.answer').text(result.join(""));
		}
	})
        $('.add').click(function(){
		if(isNaN(parseInt(result[result.length - 1])) == false){//if the last element is a number then
		input = $(this).text();
		result.push(input);
		$('.answer').text(result.join(""));	
		}
	});
	$('.subtract').click(function(){
		if(isNaN(parseInt(result[result.length - 1])) == false){//if the last element is a number then
		input = $(this).text();
		result.push(input);
		$('.answer').text(result.join(""));
		}

	});
	$('.multiply').click(function(){
		if(isNaN(parseInt(result[result.length - 1])) == false){//if the last element is a number then
		input = $(this).text();
		result.push(input);
		$('.answer').text(result.join(""));
		}
		
	});
	$('.divide').click(function(){
		if(isNaN(parseInt(result[result.length - 1])) == false){//if the last element is a number then
		input = $(this).text();
		result.push(input);
		$('.answer').text(result.join(""));
		}
	})
	$('.clear').click(function(){
		result = [];
		$('.answer').text(result);

	});
	$('.equal').click(function(){
		
		var totalString = result.join("");
		//result = [];
		total = eval(totalString); //eval takes a string and returns the evaluation
		//result.push(total);
		$('.answer').text(total);
	/*
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
	*/
	});
});

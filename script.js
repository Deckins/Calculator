var input;
var result=[];
var beforeOP,afterOP,total;
$(document).ready(function(){
	$('.number').click(function(){
		input = $(this).text();  //input is a string so parseInt turns it into an integer
		result.push(input);
		$('.answer').text(result.join(""));
		console.log(input);
	});
        $('.add').click(function(){
		input = $(this).text();
		console.log(input);
		result.push(input);
		$('.answer').text(result.join(""));	
	});
	$('.subtract').click(function(){
		input = $(this).text();
		result.push(input);
		$('.answer').text(result.join(""));

	});
	$('.multiply').click(function(){
		input = $(this).text();
		result.push(input);
		$('.answer').text(result.join(""));
		
	});
	$('.divide').click(function(){
		input = $(this).text();
		result.push(input);
		$('.answer').text(result.join(""));
	})
	$('.clear').click(function(){
		result = [];
		$('.answer').text(result);

	});
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

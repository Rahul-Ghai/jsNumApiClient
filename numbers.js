str1 = document.createTextNode("Lower range bound: ");
str2 = document.createTextNode(" Upper range bound: ");
str3 = document.createTextNode("Enter a positive number: ");

dataOutput = document.createElement("UL");
dataOutput.style.listStyleType = "none";

dataOutput.style.marginLeft = "0px";
dataOutput.style.paddingLeft = "0px";
document.body.appendChild(dataOutput);

var num1 = document.createElement("input");
num1.type = "number";
num1.min = 0;
num1.required = true;
var num2 = document.createElement("input");
num2.type = "number";
num2.min = 0;
num1.required = true;
var x = document.createElement("FORM");
x.setAttribute("id", "myForm");
document.getElementById("display").appendChild(x);

var select = document.createElement("select");
select.id = "selector";
select.onchange = function() {inputType()};

var defOption = document.createElement("option");
defOption.text = "select number type";
defOption.disabled = true;
defOption.selected = true;

var option1 = document.createElement("option");
option1.value = 1;
option1.text = "random";
var option2 = document.createElement("option");
option2.value = 2;
option2.text = "number";
var option3 = document.createElement("option");
option3.value = 3;
option3.text = "range";


document.getElementById("follow_up").appendChild(select);


var btn = document.createElement("BUTTON");
btn.innerHTML = "Click for response";

document.body.appendChild(btn);

btn.addEventListener("click",getTrivia);


select.appendChild(defOption);
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);

function getTrivia(){
	dataType = document.createTextNode("\n"+document.querySelector("#dataType").options[document.querySelector("#dataType").selectedIndex].value);
	number1 = num1.value;
	number2 = num2.value;
	opt = dataType.textContent;
	opt = opt.replace(/(\r\n|\n|\r)/gm,"")
	numbers = dataType = document.createTextNode("\n"+select.options[select.selectedIndex].value);
	numType = numbers.textContent;
	numType = numType.replace(/(\r\n|\n|\r)/gm,"");

	queryType = "";

	switch(numType){
	case "1":
	queryType = "random";
	break;
	case "2":
	queryType = number1+"";
	break;
	case "3":
	queryType = number1+".."+number2;
	break;
	}
	

	
	switch(opt){	
    		case "trivia":
		fetch("http://numbersapi.com/"+queryType+"/trivia?json")
  			.then(response => {
    			return response.json()
  			})
  			.then(data => {
			document.body
    			console.log(data)
			var li = document.createElement("li");
    			var children = dataOutput.children.length + 1
    			li.setAttribute("id", "element"+children)
    			li.appendChild(document.createTextNode("Trivia: "+data.text));
    			dataOutput.appendChild(li);
  			})
  			.catch(err => {
    			// Do something for an error here
  			})
		break;
		case "math":
		fetch("http://numbersapi.com/"+queryType+"/math?json")
  			.then(response => {
    			return response.json()
  			})
  			.then(data => {
			document.body
    			console.log(data)


    			var li = document.createElement("li");
    			var children = dataOutput.children.length + 1
    			li.setAttribute("id", "element"+children)
    			li.appendChild(document.createTextNode("Math: "+data.text));
    			dataOutput.appendChild(li);


			
  			})
  			.catch(err => {
    			// Do something for an error here
  			})
		break;
		case "date":
		fetch("http://numbersapi.com/"+queryType+"/date?json")
  			.then(response => {
    			return response.json()
  			})
  			.then(data => {
			document.body
    			console.log(data)
			var li = document.createElement("li");
    			var children = dataOutput.children.length + 1
    			li.setAttribute("id", "element"+children)
    			li.appendChild(document.createTextNode("Date: "+data.text));
    			dataOutput.appendChild(li);
  			})
  			.catch(err => {
    			// Do something for an error here
  			})
		break;
		case "year":
		fetch("http://numbersapi.com/"+queryType+"/year?json")
  			.then(response => {
    			return response.json()
  			})
  			.then(data => {
			document.body
    			console.log(data)
			var li = document.createElement("li");
    			var children = dataOutput.children.length + 1
    			li.setAttribute("id", "element"+children)
    			li.appendChild(document.createTextNode("Year: "+data.text));
    			dataOutput.appendChild(li);
  			})
  			.catch(err => {
    			// Do something for an error here
  			})
		break;
	}
}

function inputType(){
	var e = document.getElementById("selector");
	var sSelect = e.options[e.selectedIndex].value;
	var choice = parseInt(sSelect);
	
    	
    	if(document.getElementById("myForm").contains(str1)){
	document.getElementById("myForm").removeChild(str1);
	}
	if(document.getElementById("myForm").contains(str2)){
	document.getElementById("myForm").removeChild(str2);
	}
	if(document.getElementById("myForm").contains(str3)){
	document.getElementById("myForm").removeChild(str3);
	}
	if(document.getElementById("myForm").contains(num1)){
	document.getElementById("myForm").removeChild(num1);
	}
	if(document.getElementById("myForm").contains(num2)){
	document.getElementById("myForm").removeChild(num2);
	}
    	
    	
	
	switch(choice) {
 	 case 1://add random number generator here
  	 break;
 	 case 2:
	 document.getElementById("myForm").appendChild(str3);
	 document.getElementById("myForm").appendChild(num1);
   	 break;
  	 case 3:
    	 document.getElementById("myForm").appendChild(str1);
   	 document.getElementById("myForm").appendChild(num1);
  	 document.getElementById("myForm").appendChild(str2);
    	 document.getElementById("myForm").appendChild(num2);
	 break
}

}


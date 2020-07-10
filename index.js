//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element 
//and append it as a child of the element that has the 'id = a-1' 
//(the element is in index.html file)
// all right our new element needs style. 
//For that, assign to the new element the className 'square'!. 
//Each time the user clicks on the new element it has to respond 
//changing the displayed text 'x' to 'o'
//resolve // QUESTION 1 here
//NEW DIV APPEND OF ID= a-1 ejemplo ul.appendChild(li);
const node = document.getElementById('a-1');
var ChildDiv = document.createElement("div");
node.appendChild(ChildDiv);//Append the new Div as a child
ChildDiv.classList.add('square');
ChildDiv.innerHTML = 'X';//Assig the initial value X
ChildDiv.addEventListener('click', () => { //Add event listener on click to change x to O
    if(ChildDiv.textContent== "O"){
		ChildDiv.innerHTML = "X";
    }
	else{ChildDiv.innerHTML = "O"}
});
//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, 
//those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
//const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];
//resolve // QUESTION 2 here 
const colors = ['red' , 'white', 'black' , 'green' , 'orange'];
const nodeCol = document.getElementById('a-2');
var ChildColButt = document.createElement("button");
ChildColButt.innerHTML ="Select and Remove";
ChildColButt.id = "SelButton";
ChildColButt.type = "button";
var IdRemButt = document.getElementById('SelButton');
nodeCol.appendChild(ChildColButt);
var ChildCol = document.createElement("select");
ChildCol.id= "ColSelect";
nodeCol.appendChild(ChildCol);
j = colors.length
//console.log (j);
for(var i = 0; i < j ; i++){//go in the array to assign values to the option
	var option = colors[i];
	var new_option = document.createElement("option");//create options of select	
	new_option.textContent = option;
	new_option.value = option;
	ChildCol.appendChild(new_option);//append the options as a child
}
function removecolor()
 {
	var sel=document.getElementById("ColSelect");
	sel.remove(sel.selectedIndex);
}
ChildColButt.onclick = removecolor 
//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)
function calculate_sphere () {
	var radio = document.getElementById("radius").value;
	var radioInt = parseInt(radio)
	//alert (radioInt);
	function calcularVolumen(radioInt){
		volumen = ((4/3)*Math.PI*Math.pow(radioInt,3));
		return volumen;
		//console.log(volumen);
	 }	 
	 var volume = calcularVolumen(radioInt)
	 //console.log(volumen);
	 //CALCULAR AREA
	 function calcular_Area(radioInt){
	 	var area = (4*Math.PI*Math.pow(radioInt,2));
		return area; 
		//console.log(area);
	  }
	  var area = calcular_Area(radioInt); 		  
	  //console.log(area);
	document.getElementById('volume').value = volume;
	document.getElementById("area").value = area;
	//window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; 
	//return false;// Something was wrong with the type of button in the html it was submit instead of button
}
//------------------------Question 4 ---------------------------
//Now in this Exercise we want you to create 3 buttons wich clicks actions are going to hide the respective question above with their aswer and if they are hidden then the click option should be display the question with their respective aswer
// append the 3 buttons to the element with the 'id = a-4' as childrens
//resolve // QUESTION 4 here
//My approach was to add a DivId in the html and created the buttons there and call this function
function Hide(DivId) {// I created a new Id for the parent Div and I used to display or hide each question
	//console.log (DivId);
	var x = document.getElementById(DivId);
	if (x.style.display === "none") {
		//console.log ("entro if")
		x.style.display = "block";
	} else {
		//console.log ("entro else")
		x.style.display = "none";
	}
  }

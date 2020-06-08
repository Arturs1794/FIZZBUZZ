
console.log('Script started');

function innit () {
    console.log('Adding listeners')
    addListeners();
    document.getElementById('elements');
    
    var clearButton = document.getElementById('clear');
    clearButton.addEventListener("click", onClickClear);
   
}



function onClick() {
    
    console.log('Button hit');
        for(let i = 1; i<101; i++){
            const element = document.createElement('div');
            element.className="element" + i;
            elements.appendChild(element);
                if (i % 3 ===0 && i % 5 === 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "FizzBuzz");
                    element.innerText="FizzBuzz " + i;
                }
                else if (i % 3 === 0 && i % 5 !== 0) {
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Fizz");
                    element.innerText="Fizz " + i;
                    
                }

                else if (i % 5 === 0 && i % 3 !== 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Buzz");
                    element.innerText="Buzz " + i;
                    
                }

                else if (i % 3 !== 0 && i % 5 !== 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Empty");
                    element.innerText=i;
                    
                }
        }
}

function onClickClear () {
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
    console.log('Divs cleared');
}


 function addListeners() {
    const submit = document.getElementById('generate');
    submit.onclick = onClick;
}


function buzzItTemplate(){
  
  let output = [];
  let headTemplate = document.getElementById('template-header');
  let rowTemplate = document.getElementById('template-row-items');
  
  var templateHTML = rowTemplate.innerHTML;
  var resultsHTML = headTemplate.innerHTML;
 
  output = FizzBuzzD(val1,val2);
  for(i=1; i<output.length; i+=5){
      resultsHTML += templateHTML.replace('{{val1}}', output[i])
          .replace('{{val2}}', output[i + 1])
          .replace('{{val3}}', output[i + 2])
          .replace('{{val4}}', output[i + 3])
          .replace('{{val5}}', output[i + 4]);
  }
  document.getElementById('results').innerHTML = resultsHTML;
}

innit();
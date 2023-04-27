(function(){
    const FORM = document.querySelector('#newsletter');
    const ERROR = document.querySelectorAll('.newsletter_errorMessage');


    FORM.addEventListener('submit', inputs)
    function validate(element){
        if(element.type == 'submit' 
        || element.type == 'button' 
        || element.type == 'reset'){
            return;
        }
        if(element.type == 'text'){
            if(element.value == "" && element.required){
                //nextSibling twice because of the whitespace between the label and the span
                element.parentElement.nextSibling.nextSibling.innerHTML = "skriv et fucking navn"
                element.style.backgroundColor = "#ff94ae"

            }
            if(element.value != ""){
                element.parentElement.nextSibling.nextSibling.innerHTML = "Du er bare dygtig"
                element.style.backgroundColor = "#96f28c"
            }
        }
        
    }

       
    function inputs(event){
        event.preventDefault();
        Array.from(event.target).forEach(element => validate(element))
    }
})()
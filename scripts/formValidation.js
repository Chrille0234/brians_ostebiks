const form = document.getElementById('newsletter');
const allInputs = document.querySelectorAll('.newsletter_input');

const name = allInputs[0];
const phone = allInputs[1];
const email = allInputs[2];

const error = document.querySelectorAll('.newsletter_errorMessage');

const specialchars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";
const specialchars_numbers = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~_1234567890";


form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkInput();

    if (errorCount == 0){
        form.submit()
    }

})
var errorCount = 0;
function checkInput(){
    //is used to compare errorCount with originalErrorCount. If they are the same, there are no errors
    //if they are the same, errorCount is set to 0, and the form is submitted
    var originalErrorCount = errorCount;
    allInputs.forEach((input, index) => {

        //removes error message if input is filled
        if (input !== ""){
            error[index].style.display = 'none';
        }
        //shows error message if input is empty
        if(input.value === ''){
            error[index].innerHTML = "Dette felt skal udfyldes"
            error[index].style.display = 'block';
            errorCount++
        }

        //checks if name input contains numbers, or special characters
        if (input === name){
        for (let i = 0; i < specialchars_numbers.length; i++){
            if (input.value.includes(specialchars_numbers[i])){
                error[index].innerHTML = 'navn må ikke indeholde specialtegn eller tal'
                error[index].style.display = 'block';
                errorCount++
            }
        }}

        //checks if phone input contains letters, or special characters and if it is 8 digits long
        if (input === phone){
            if(input.value.length < 8 || input.value.length > 8){
                error[index].innerHTML = 'telefonnummer skal være 8 cifre'
                error[index].style.display = 'block';
                errorCount++

            }
            else{
        for (let i = 0; i < specialchars.length; i++){
            if (input.value.includes(specialchars[i] + /^[A-Za-z0-9]*$/) || input.value.includes("e")){
                error[index].innerHTML = 'tlf må ikke indeholde bogstaver'
                errorCount++
                error[index].style.display = 'block';
            }}   
            }
        }
    })
    if (originalErrorCount == errorCount){
        errorCount = 0;
    }

}
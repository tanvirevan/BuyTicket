
function showError()
    {
        let name = document.getElementById('passengerName').value;
        let nameError = document.getElementById('nameError');
        if (name.length >= 4) 
            {
                nameError.classList.add('hidden');
            } 
        else 
            {
                nameError.classList.remove('hidden');
            }
        nextButton();
    }
function showErrorphn()
    {
        let number = document.getElementById('phoneNum').value;
        let phoneError = document.getElementById('phoneError');
        let phonePattern = /^[0-9\s()-]+$/;

        if (phonePattern.test(number) && number.length == 11) 
            {
                phoneError.classList.add('hidden');
            } 
        else 
            {
                phoneError.classList.remove('hidden');
            }
        nextButton();
    }

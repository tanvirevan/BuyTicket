
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
        let phonePattern = /^01(?![12])[0-9\s()]*$/;

        if (phonePattern.test(number) && number.length === 11) 
            {
                phoneError.classList.add('hidden');
                
            } 
        else
            {
                phoneError.classList.remove('hidden');
            }
        nextButton();
    }
    
function totalPrice()
    {
        let price  = parseFloat(document.getElementById('ticketPice').innerText);
        
        overallprice = totalSeat * price;
        let grandTotal = overallprice - discountPrice;

        document.getElementById('totalPrice').innerHTML = overallprice.toFixed(2);
        document.getElementById('grandTotal').innerHTML = grandTotal.toFixed(2);
        document.getElementById('discountPrice').innerText = discountPrice.toFixed(2);
    }

function SeatAvailable(value)
    {
        let available = parseInt(document.getElementById('availableSeat').innerText);
        let newAvailable = (available - value);
        document.getElementById('availableSeat').innerText = newAvailable;
    }

function copunValue()
    {
        let getCopun = document.getElementById('cupon');
        let Apply = document.getElementById('applyButton');
        if(getCopun.value.trim() === "")
            {
                Apply.disabled = true;
                Apply.classList.remove('btn','bg-green-500', 'hover:bg-green-500');
                Apply.classList.add('cursor-not-allowed');
            }
        else
            {
                Apply.disabled = false;
                Apply.classList.add('btn','bg-green-500', 'hover:bg-green-500');
                Apply.classList.remove('cursor-not-allowed');
            }
    }
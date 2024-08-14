
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
        let price  = parseInt(document.getElementById('ticketPice').innerText);
        
        let overallprice = totalSeat * price;
        let grandTotal = overallprice - discountPrice;

        document.getElementById('discountPrice').innerText = discountPrice;
        document.getElementById('totalPrice').innerHTML = overallprice;
        document.getElementById('grandTotal').innerHTML = grandTotal;
    }

function SeatAvailable(value)
    {
        let available = parseInt(document.getElementById('availableSeat').innerText);
        let newAvailable = (available - value);
        document.getElementById('availableSeat').innerText = newAvailable;
    }

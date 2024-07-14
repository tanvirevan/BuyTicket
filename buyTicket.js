
    let totalSeat = 0;
    let selectedSeats = {};
    
    function ticketSelected(element) {
        const seatName = element.innerText.trim();
        const bgColor = element.style.backgroundColor;
        const price =  document.getElementById('ticketPice').innerText
        if (bgColor === 'rgb(29, 209, 0)') 
            {
                element.style.backgroundColor = '#e6e6e7';
                totalSeat -= 1;
                delete selectedSeats[seatName];
            } 
        else 
            {
                element.style.backgroundColor = 'rgb(29, 209, 0)';
                totalSeat += 1;
                selectedSeats[seatName] = { seatType: 'Economy', price: price };
            }
        totalSelectedSeat();
    }
    
    function totalSelectedSeat() {
        const seatDetailsElement = document.getElementById('seatDetails');
        if (totalSeat === 0) 
            {
                showUser();
                document.getElementById('selectSeat').innerText = '';
                seatDetailsElement.innerHTML = '<p>No Seat Selected</p>';
                totalPrice();
            } 
        else 
            {
                showUser();
                document.getElementById('selectSeat').innerText = totalSeat;
        
                seatDetailsElement.innerHTML = '';
                for (const seatName in selectedSeats) 
                    {
                        const seat = selectedSeats[seatName];
                        seatDetailsElement.innerHTML += `
                            <div class="flex justify-between mb-2 text-center">
                                <span class="text-gray-600 text-center">${seatName}</span>
                                <span class="text-gray-600">${seat.seatType}</span>
                                <span class="text-gray-600">${seat.price}</span>
                            </div>
                        `;
                    }
                totalPrice();
            }
    }
    
        
function totalPrice()
    {
        let price  = document.getElementById('ticketPice').innerText;
        let overallprice = totalSeat * price;
        
        document.getElementById('totalPrice').innerHTML = `<span>BDT ${overallprice}</span>`
        document.getElementById('grandTotal').innerHTML = `<span>BDT ${overallprice}</span>`
    }

document.getElementById('phoneNum').addEventListener('input', function (e) 
    {
        this.value = this.value.replace(/[^0-9-\s()]/g, '');
        nextButton();
    });
document.getElementById('passengerName').addEventListener('input', nextButton);


document.getElementById('passengerName').addEventListener('focus', showError);
document.getElementById('phoneNum').addEventListener('focus',  showErrorphn);


function nextButton()
    {
        let name = document.getElementById('passengerName').value;
        let number = document.getElementById('phoneNum').value;

        let NextButton = document.getElementById('nextButton');

        let phonePattern = /^[0-9\s()-]+$/;

        if(name.length >= 4 && phonePattern.test(number) && number.length == 11)
            {
                NextButton.disabled = false;
                NextButton.classList.remove('opacity-50', 'cursor-not-allowed');
                NextButton.classList.add('hover:bg-green-600');
                showError();
                showErrorphn();
            }
        else
            {
                NextButton.disabled = true;
                NextButton.classList.add('opacity-50', 'cursor-not-allowed');
                NextButton.classList.remove('hover:bg-green-600');
                showError();
                showErrorphn();
            }
    }

function showUser()
    {
        let usereliment = document.getElementById('user');
        if(totalSeat > 0)
            {
                usereliment.classList.remove('hidden');
            } 
        else
            {
                usereliment.classList.add('hidden');
            }
    }

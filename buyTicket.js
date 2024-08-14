
    let totalSeat = 0;
    let selectedSeats = {};
    let overallprice = 0;
    let discountPrice = 0; 

    const seatButtons = document.getElementsByClassName('seat-button');

    function ticketSelected(element) 
        {
            const seatName = element.innerText.trim();
            const bgColor = element.style.backgroundColor;
            const price =  document.getElementById('ticketPice').innerText;
            if (totalSeat < 4 )
                {
                    if (bgColor === 'rgb(29, 209, 0)') 
                        {
                            totalSeat -= 1;
                            SeatAvailable(-1);
                            element.style.backgroundColor = '#e6e6e7';
                            // seatButton.classList.add('hover:bg-green-300');
                            delete selectedSeats[seatName];
                            totalSelectedSeat();
                            cupon();
                        } 
                    else 
                        {
                            totalSeat += 1;
                            SeatAvailable(1);
                            element.style.backgroundColor = 'rgb(29, 209, 0)';
                            selectedSeats[seatName] = { seatType: 'Economy', price: price };
                        }
        
                    totalSelectedSeat();
                    cupon();
                }
            else
                {
                    if (bgColor === 'rgb(29, 209, 0)') 
                        {
                            totalSeat -= 1;
                            SeatAvailable(-1);
                            element.style.backgroundColor = '#e6e6e7';
                            delete selectedSeats[seatName];
                        }
                    totalSelectedSeat();
                    cupon();
                }
                if (totalSeat === 4) 
                    {
                        for (let i = 0; i < seatButtons.length; i++) 
                            {
                                const seatButton = seatButtons[i];
                    
                                if (!selectedSeats[seatButton.innerText.trim()])
                                     {
                                        seatButton.disabled = true;
                                        seatButton.classList.remove('hover:bg-green-300');
                                        seatButton.classList.remove('btn');
                                        seatButton.classList.add('opacity-60');
                                        seatButton.classList.add('cursor-not-allowed');
                                    } 
                                else {
                                    seatButton.disabled = false;
                                    seatButton.classList.add('hover:bg-green-300');
                                    seatButton.classList.add('btn');
                                    seatButton.classList.remove('opacity-60');
                                    seatButton.classList.remove('cursor-not-allowed');
                                }
                            }
                    } 
                else 
                    {
                        for (let i = 0; i < seatButtons.length; i++) 
                            {
                                const seatButton = seatButtons[i];
                                seatButton.disabled = false;
                                seatButton.classList.add('hover:bg-green-300');
                                seatButton.classList.add('btn');
                                seatButton.classList.remove('opacity-60');
                                seatButton.classList.remove('cursor-not-allowed');

                            }
                    }

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
    

function nextButton()
    {
        let number = document.getElementById('phoneNum').value;
        let numberError = document.getElementById('phoneError');

        let NextButton = document.getElementById('nextButton');

        let phonePattern = /^01(?![12])[0-9\s()]*$/;

        if(phonePattern.test(number) && number.length == 11)
            {
                NextButton.disabled = false;
                NextButton.classList.remove('opacity-50', 'cursor-not-allowed');
                NextButton.classList.add('hover:bg-green-600');
                numberError.classList.add('hidden');
           
            }
        else
            {
                NextButton.disabled = true;
                NextButton.classList.add('opacity-50', 'cursor-not-allowed');
                NextButton.classList.remove('hover:bg-green-600');
                numberError.classList.remove('hidden');

            }
    }


document.getElementById('phoneNum').addEventListener('input', function (e) 
    {
        this.value = this.value.replace(/[^0-9-\s()]/, '');
        nextButton();
    });


function cupon()
    {

        let DiscountInput = document.getElementById('discount');
        let DiscountElement = document.getElementById('discountElement');
        if(totalSeat === 4)
            {
                DiscountInput.classList.remove('hidden');
                document.getElementById('cupon').addEventListener('input', function() 
                {
                    copunValue();
                });
            }
        else
            {
                DiscountInput.classList.add('hidden');
                DiscountElement.classList.add('hidden');
                discountPrice = 0;
                totalPrice();
            }
    }

document.getElementById('applyButton').addEventListener('click', function() 
    {
        let DiscountInput = document.getElementById('discount');
        let DiscountElement = document.getElementById('discountElement');
        let getCoupon = document.getElementById('cupon');
  
    
        if (getCoupon.value.trim() === "NEW15") 
            {
                discountPrice = (overallprice * 15) / 100;
            } 
        else if (getCoupon.value.trim() === "Couple 20") 
            {
                discountPrice = (overallprice * 20) / 100;
            }

        totalPrice();
    
        DiscountInput.classList.add('hidden'); 
        DiscountElement.classList.remove('hidden');
        getCoupon.value = "";
    
        copunValue();
    });
    
    

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


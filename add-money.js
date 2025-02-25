// add monyer function

document.getElementById("btn-add-money").addEventListener('click',function(event){
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
   
    const pin = document.getElementById('pin').value;
    const convertedpin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    // console.log(convertedpin, convertedAmount)

    if( convertedAmount > 0 ){
        if(convertedpin === 1234 ){
            const totalBalance = convertedMainBalance+convertedAmount;
            document.getElementById('main-balance').innerText = totalBalance;
        }
        else{
            alert('pin thik nai')
        }
    }
    else{
        alert("enter a vlid amount")
    }

});







// send money function

document.getElementById("btn-send-money").addEventListener('click',function(event){
    event.preventDefault();

    const samount = document.getElementById('s-amount').value
    const convertedSamount = parseFloat(samount);
   
    const pin = document.getElementById('pin').value;
    const convertedpin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    if( convertedSamount > 0 ){
        if(convertedpin === 1234 ){
            const totalBalance = convertedMainBalance-convertedSamount;
            document.getElementById('main-balance').innerText = totalBalance;
        }
        else{
            alert('pin thik nai')
        }
    }
    else{
        alert("enter a vlaid amount")
    }

});








// cash out function

document.getElementById("btn-cash-out").addEventListener('click',function(event){
    event.preventDefault();

    const coamount = document.getElementById('co-amount').value
    const convertedSamount = parseFloat(coamount);
   
    const pin = document.getElementById('pin').value;
    const convertedpin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    if( convertedSamount > 0 ){
        if(convertedpin === 1234 ){
            const totalBalance = convertedMainBalance-convertedSamount;
            document.getElementById('main-balance').innerText = totalBalance;
        }
        else{
            alert('pin thik nai')
        }
    }
    else{
        alert("enter a vlaid amount")
    }

});








// pay bill function

document.getElementById("btn-pay-bill").addEventListener('click',function(event){
    event.preventDefault();

    const billamount = document.getElementById('bill-amount').value
    const convertedamount = parseFloat(billamount);
   
    const pin = document.getElementById('pin').value;
    const convertedpin = parseInt(pin);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    if( convertedamount > 0 ){
        if(convertedpin === 1234 ){
            const totalBalance = convertedMainBalance-convertedamount;
            document.getElementById('main-balance').innerText = totalBalance;
        }
        else{
            alert('pin thik nai')
        }
    }
    else{
        alert("enter a vlaid amount")
    }

});

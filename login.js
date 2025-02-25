document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('hello')

    const acNumber = document.getElementById('ac-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    const convertedpin = parseInt(pinNumber);

    if(acNumber.length === 11){
        console.log('number thik ase')
        if(convertedpin=== 1234){
            window.location.href="./main.html"
        }
        else{
            alert('shotik pin den');
        }
    }
    else{
    alert('number thik nai')
    };

});


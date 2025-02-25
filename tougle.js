document.getElementById('parent-add-money').style.display = 'none';
document.getElementById('parent-send-money').style.display = 'none';
document.getElementById('parent-cash-out').style.display = 'none';
document.getElementById('parent-pay-bill').style.display = 'none';









document.getElementById('add-money').addEventListener('click',function(){
    document.getElementById('parent-add-money').style.display = 'block';
    document.getElementById("parent-send-money").style.display = 'none';
    document.getElementById("parent-cash-out").style.display = 'none';
    document.getElementById("parent-pay-bill").style.display = 'none';

});

document.getElementById('send-money').addEventListener('click',function(){
    document.getElementById('parent-add-money').style.display = 'none';
    document.getElementById("parent-send-money").style.display = 'block';
    document.getElementById("parent-cash-out").style.display = 'none';
    document.getElementById("parent-pay-bill").style.display = 'none';
});

document.getElementById('cash-out').addEventListener('click',function(){
    document.getElementById('parent-add-money').style.display = 'none';
    document.getElementById("parent-send-money").style.display = 'none';
    document.getElementById("parent-cash-out").style.display = 'block';
    document.getElementById("parent-pay-bill").style.display = 'none';
});

document.getElementById('pay-bill').addEventListener('click',function(){
    document.getElementById('parent-add-money').style.display = 'none';
    document.getElementById("parent-send-money").style.display = 'none';
    document.getElementById("parent-cash-out").style.display = 'none';
    document.getElementById("parent-pay-bill").style.display = 'block';
});
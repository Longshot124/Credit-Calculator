var btn = document.getElementById('btn')
btn.onclick = () =>{
    var input = Number(document.getElementById('number').value);
    var percent  = Number(document.getElementById('percent').value);
    var month = Number(document.getElementById('month').value);

    if(month==6){
        var percentPrice = (input*percent)/100;
        var fullPrice = Number(input+percentPrice);
        var priceMtnh = fullPrice/month;
        document.getElementById('price').innerHTML = fullPrice;
        document.getElementById('price-month').innerHTML = priceMtnh.toFixed();
    }
    else if(month==12){
        var percentPrice = (input*percent)/100;
        var fullPrice = Number(input+percentPrice);
        var priceMtnh = fullPrice/month;
        document.getElementById('price').innerHTML = fullPrice;
        document.getElementById('price-month').innerHTML = priceMtnh.toFixed();
    }
    else if(month==18){

        var percentPrice = (input*percent)/100;
        var fullPrice = Number(input+(percentPrice*month/12));
        var priceMtnh = fullPrice/month;
        document.getElementById('price').innerHTML = fullPrice;
        document.getElementById('price-month').innerHTML = priceMtnh.toFixed();
    }
    else if(month==24){

        var percentPrice = (input*percent)/100;
        var fullPrice = Number(input+(percentPrice*month/12));
        var priceMtnh = fullPrice/month;
        document.getElementById('price').innerHTML = fullPrice;
        document.getElementById('price-month').innerHTML = priceMtnh.toFixed();
    }
     

}
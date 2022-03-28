function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function compute()
{
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    if((p=="")||(p<=0)) {
        alert("Enter a positive number");
        document.getElementById("result").innerHTML = "";
        document.getElementById("principal").innerHTML = "";
        document.getElementById("principal").focus();
        return;
    }
    if (  ((p == null)||(p == '')) 
        ||((rate == null)||(rate == 0))
        ||((years == null)||(years == 0))
    )
    {
        document.getElementById("result").innerHTML = "";
        return;
    }
   
    var intrest = p*rate*years/100;
     
    outputHTML = "If you deposit " + "<a class=\"output_number \">" + p +"</a>";
    rate = "<a class=\"output_number \">" + rate + "%" + "</a>" ;
    outputHTML += ",<br/>at an interest rate of " + rate + ".";
    intrest = "<a class=\"output_number \">" + intrest +"</a>"
    outputHTML +="<br/>You will receive an amount of "+intrest+ ".<br/>in the year ";
    const today = new Date();
    years = today.getFullYear() + parseInt(years); //years*1;
    years = "<a class=\"output_number \">" + years +"</a>";
    outputHTML += years;
    document.getElementById("result").innerHTML = outputHTML;
    
}
        
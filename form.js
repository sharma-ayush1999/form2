function validateform(){
var lname = document.getElementById('lname');
var fname = document.getElementById('fname');
var phone = document.getElementById('phone');
var address = document.getElementById('address');
var gen = document.getElementById('gen');
var email = document.getElementById('email');
var password = document.getElementById('password');
var dob     = document.getElementById('date');
var paddress = document.getElementById('paddress');
var button  = document.getElementById('button');
    if (fname.value == "")                                  
    { 
        window.alert("Please enter your first name."); 
        fname.focus(); 
        return false; 
    } 
    if (lname.value == "")                                  
    { 
        window.alert("Please enter your last name."); 
        lname.focus(); 
        return false; 
    } 
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    }
     if (date.value == "")                               
    { 
        window.alert("Please enter your date."); 
        date.focus(); 
        return false; 
    } 
      
     if (address.value == "")                               
    { 
        window.alert("Please enter your address."); 
        address.focus(); 
        return false; 
    } 
    if (paddress.value == "")                               
    { 
        window.alert("Please enter your permanent address."); 
        paddress.focus(); 
        return false; 
    } 
     if (city.value == "")                               
    { 
        window.alert("Please enter your city."); 
        city.focus(); 
        return false; 
    }
     if (state.value == "")                               
    { 
        window.alert("Please enter your state."); 
        state.focus(); 
        return false; 
    }
     if (locality.value == "")                               
    { 
        window.alert("Please enter your locality."); 
        locality.focus(); 
        return false; 
    }
    }
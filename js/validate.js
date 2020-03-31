 var form = document.querySelector('form.form');
        

 var input = document.querySelector('#email');
 var error = document.querySelector('.error');
 var label_error = document.querySelector('.form-bottom .label-error');  
        form.addEventListener('submit',(e)=>
        {
            e.preventDefault();
           
            var email = document.querySelector('#email').value;
     
            
           
    
            if(validateEmail(email))
            {
   
    error.style.display = "none";
input.classList.remove("err");
label_error.style.display = "none";
input.focus();

return true;

}
else
{
        

    
error.style.display = "block";
input.classList.add("err");
label_error.style.display = "block";

input.focus();

return false;
}

        }
        
        );








function validateEmail(email) {
  var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  return $.trim(email).match(pattern) ? true : false;
}

   
        
        
       
        
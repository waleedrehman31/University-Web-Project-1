function checkForm() 
        {
          event.preventDefault(); 
          if(document.orderForm.name.value.length < 1)
          {
            window.alert("First Name Field Are Must Be Filled");
          } else if (document.orderForm.last-name.value.length < 1)
          {
            window.alert("Last Name Field Are Must Be Filled");
          } else if (document.orderForm.email.value.length < 1)
          {
            window.alert("Email Field Are Must Be Filled");
          } else 
          {
            document.write("Your Order Are Submited");
          }
        } 

function checkFormDisplay() 
  {
      checkForm();
  }

        function calculatePrice()
        {
          event.preventDefault();
          var hrs = document.calculatePriceForm.hrsRequired.value;
          var keyWord = document.calculatePriceForm.keyWord.value;
          var result;
          result = hrs * keyWord;
          return result;
        }
        
        function finalPriceDisplay()
        {
          var displayPrice = document.getElementById("Price");
          var finalPrice = calculatePrice();
          displayPrice.innerHTML = "<B>$" + finalPrice + "</B>";
        }

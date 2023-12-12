var quoteArray = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela", 
    "The guture belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You must be the change you wish to see in the world. -Mahatma Gandhi", 
    "Well done is better than well said -Benjamin Franklin",
    "Do one thing every day that scares you -Eleanor Roosevelt"];





    function quoteBtn() {
        for (let i = 0; i < quoteArray.length; i++) {
           document.getElementById("quotes").innerHTML = quoteArray[i];
          }
    }
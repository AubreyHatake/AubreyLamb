var quoteArray = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela", 
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You must be the change you wish to see in the world. -Mahatma Gandhi", 
    "Well done is better than well said -Benjamin Franklin",
    "Do one thing every day that scares you -Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.   -Oprah Winfrey",
    "The way you get started is to quit talking and begin doing. -Walt Disney",
    "Never let the fear of striking ou keep you from playing the game. -Babe Ruth"];





    function quoteBtn() {
        var randomIndex = Math.floor(Math.random() * quoteArray.length);

       document.getElementById("quotes").innerHTML = quoteArray[randomIndex];
    }
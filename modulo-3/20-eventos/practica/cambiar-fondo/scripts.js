/**
 * 
 */
document.body.style.height = "2000px";

document.addEventListener('scroll', (e) => {
     var scrollTop = document.documentElement.scrollTop

     switch (true) {
        
        case scrollTop > 1500 && scrollTop <= 2000 : 
            document.body.style.backgroundColor = "orange"; break;
        case scrollTop > 1000 && scrollTop <= 1500 : 
            document.body.style.backgroundColor = "blue"; break;
        case scrollTop > 501: 
            document.body.style.backgroundColor = "red"; break;
        case scrollTop > 9 && scrollTop <= 1000 : 
            document.body.style.backgroundColor = "green"; break;
       
     }
}) 



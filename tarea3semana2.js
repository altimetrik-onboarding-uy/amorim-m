
    // JavaScript program to illustrate  
    // calculation of no. of days between two date  
    // To set two dates to two variables 
    
var date1 = new Date("06/24/1992"); 
var date2 = new Date("01/21/2020"); 
  
// To calculate the time difference of two dates 
var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
//To display the final no. of days (result) 
document.write("Total number of days between dates  <br>"
               + date1 + "<br> and <br>" 
               + date2 + " is: <br> " 
               + Difference_In_Days); 
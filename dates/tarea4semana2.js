//////////////////////// Write a JavaScript function to get the day name from a particular date/////////////////////
var day_name = function(dt){
    mlist = [ "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
      return mlist[dt.getDay()];
    };
    console.log(day_name(new Date("10/11/2009")));
    console.log(day_name(new Date("11/13/2014")));
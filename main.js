

//download the contents of the data.json file.
$(document).ready(function(){
    $.getJSON("./data.json", function(data){
        console.log(data);
    
        //Iterate through the top spots data array and create a table row for each spot 
        //Create a link to the location using the longitude and latitude provided
       for(let i=0; i<= data.length; i++){
           $("#tableRow-data").before(`<tr><td>${data[i].name}</td><td>${data[i].description}</td><td><button type = "button" class="btn btn-outline-secondary" onclick = "location.href='https://www.google.com/maps?q=${data[i].location[0]},${data[i].location[1]}'" type="button">Open in Google Maps</button></td></tr>`);
       } 
       log(data);
    }); 
 
});

//iterate through array and apply background effect to table
function tableEffect() {
    for(let i = 0; i <= data.length; i++) {
        
    }
};
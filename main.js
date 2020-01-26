$(document).ready(function() {
// write your code here
     $.getJSON("data.json", function(data) {
        var top_spot_data = ' '
        $.each(data, function(item, index) {
        //console.log(data);
            top_spot_data += '<tr>';
            top_spot_data += '<td>'+index.name+'</td>';
            top_spot_data += '<td>'+index.description+'</td>';
            top_spot_data +='<td><a href="https://www.google.com/maps?q=' + index.location + ">" + "Open In Google Maps" + '</a></td>';
                            //'<td><a href="https://www.google.com/maps?q=' + index.location + '">' + "open in google" + '</a></td>';
            top_spot_data += '<tr>';

        
        console.log(index.name);
        console.log(index.description);
        console.log(index.link);

    //$("<td>").append(index.name + " ");
    //$("").append(index.description + " ");
    //$("").append(index.link + " ");

            }); 
    $("#top_spot_table").append(top_spot_data);
        })
    });

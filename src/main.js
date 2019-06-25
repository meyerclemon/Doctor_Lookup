import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorLookup } from './doctor-lookup';



$(document).ready(function() {
    $('#searchCriteria').submit(function(event) {
      event.preventDefault();

     let doctorLookup = new DoctorLookup();
     let docName = $('#docName').val();
     let symptom = $("#symptom").val();
     let description = doctorLookup.getDoctors(docName, symptom);
  
        description.then(function(response){

           if(response.data.length > 0) {

            $("#results").text("");

            for(let i= 0; i<response.data.length; i++)
            {
              $("#results").append("<img src='"+response.data[i].profile.image_url+"' style='float: left; margin-right: 10px'>" +
              "<p>"+
              "<b>"+response.data[i].profile.first_name+" "+response.data[i].profile.last_name+"</b> " + response.data[i].profile.title + "<br>" + 
              "Accepting new patients: " + response.data[i].practices[0].accepts_new_patients + "<br>" +
              "Phone: " + response.data[i].practices[0].phones[0].number + "<br>" +"Website:" + response.data[i].practices[0].website + "<br>" +
              response.data[i].practices[0].visit_address.street + "<br>" +
              response.data[i].practices[0].visit_address.city + " " + response.data[i].practices[0].visit_address.state + " " +
              response.data[i].practices[0].visit_address.zip + "</p><hr>");
            }

          } else {
            $("#results").text("I'm sorry. There are no doctors that match your search criteria :( ")
          }
      });
  });
});
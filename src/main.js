import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorLookup } from './doctor-lookup';



  $().ready(function() {
    $('#search').submit(function(event) {
      event.preventDefault();
      $('#displayDocs').empty();

      let criteria = $('#criteria').val();
      let doctorLookup = new DoctorLookup();
            return doctorLookup.getDoctors(criteria);
    })

        .then(function(response){
          let displayDocs = JSON.parse(response);
          let displayDocsHtml = "";
          if(displayDocs.data.length == 0){
              displayDocsHtml = "I'm sorry. Your search criteria did not return any results :( "
          } else {
              for(let i = 0; i < displayDocs.data.length; i++){
                  displayDocsHtml += parseDoc(displayDocs, i);
              }
          }
          $('#displayDocs').append(displayDocsHtml);
      });
  });


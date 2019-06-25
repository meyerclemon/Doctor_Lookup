export class DoctorLookup {

  getDoctors (docName, symptom) {

    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&query=${symptom}&location=wa-seattle&limit=10&user_key=${process.env.exports.apiKey}`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(JSON.parse(request.response));
      } else {
        reject(Error(request.statusText));
      }
    };

    request.open("GET", url, true);
    request.send();
    });
  }
}
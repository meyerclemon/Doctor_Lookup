# Doctor Lookup

#### By **Maya Frame** 6/7/2019
[![forthebadge](http://forthebadge.com/images/badges/made-with-javascript.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-html.svg)](http://forthebadge.com)

## Description
As we all know, everybody needs to see a doctor sometimes. But finding a doctor that provides the services you need nearby can be time consuming. To facilitate this, we have created a website where users may enter a medical issue into a form, submit it, and receive a list of doctors in your city (Portland or Seattle depending on where you are) who can treat their medical issue.



### Specs
| Spec | Input |Output|
| :-------------     | :-------------  |:------------- |
| Lookup by symptom | "Symptom"| Doctor first name, last name, address, phone number, website and whether or not the doctor is accepting new patients|
| Lookup by name | "Smith, Jane"| Doctor first name, last name, address, phone number, website and whether or not the doctor is accepting new patients |
| Call produces an error |(Not a 200 OK)| Correct error notification|
| No results for inputted criteria |  | Returns a notification that states that no doctors meet the criteria |



## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/meyerclemon/Doctor_Lookup
# Retrieve API key
$ Go to BetterDoctor API and register for an API key.
# Setup API
$ Create a file called .env and store the key there in the following format: exports.apiKey = <YOUR API KEY HERE>
# Install dependencies
$ npm install
# Run the app
$ npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

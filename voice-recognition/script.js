//   covidNews: "https://www.who.int/"
//   covid-19: "https://www.mygov.in/covid-19"
//   covid-19 Cases World: "https://www.worldometers.info/coronavirus/"
//   register for vaccination: "https://www.cowin.gov.in/"
//   cowin vaccine statistics: "https://dashboard.cowin.gov.in/"
//   Download vaccine certificate: 'https://www.mygov.in/covid-19'
//   Dos and Donts at vaccinateion: "https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf"
//   covid-19 statewise status: "https://www.mygov.in/corona-data/covid19-statewise-status"
//   covid-19 guidelines indian govt. "https://static.mygov.in/rest/s3fs-public/mygov_161725058451307401.pdf"
//   All about covid-19 : "https://www.unicef.org/india/coronavirus/covid-19?gclid=Cj0KCQjwl_SHBhCQARIsAFIFRVUmFJtq0IdAwXMtJdCpX9Z7arE_tYh1yjrO_R1GxeWChSGSEGJ2lRUaAnOuEALw_wcB"

const covidNews = [
  "covid-19 news",
  "Covid updates",
  "covid news",
  "corona updates",
  "corana virus",
  "corona news",
];
const covidCases = [
  "covid india",
  "covid-19 india",
  "covid cases in india",
  "corona cases in india",
  "corona in india",
  "coronavirus cases in india",
];
const covidCasesWorld = [
  "covid world",
  "covid-19 world",
  "covid cases",
  "covid cases world",
];
const registerForVaccination = [
  "covid-19 vaccine registration",
  "corona vaccine registration",
  "corona virus vaccine registration",
  "register for vaccine",
  "covid vaccine registration",
  "vaccine registration",
  "register for vaccination",
  "cowin",
  "register for vaccine",
  "registration for vaccination",
];
const vaccinestatusindia = [
  "india vaccine status",
  "vaccination speed in india",
  "vaccination statistics india",
  "vaccine chart india",
  "vaccination speed of india",
  "how many people are vaccinated in india",
  "how many people are partially vaccinated in india",
  "how many people are fully vaccinated in india",
  "current vaccination speed in india",
  "vaccination status in india",
];
const vaccinecertificate = [
  "download vaccine certificate",
  "How to download vaccine certificate",
  "vaccine certificate",
  "vaccination certificate",
];
const whatiscovid = [
  "what is covid-19",
  "what is coronavirus",
  "what is covid",
  "what are the symptoms of covid-19",
  "what are the symptoms of covid",
  "what are the symptoms of coronavirus",
  "precautions for covid",
  "precautions for covid-19",
  "precautions for cornavirus",
  "covid-19",
];
const guidelines = [
  "what are the latest guidelines by government of india",
  "guidelines for covid by indian government",
  "guidelines of covid-19 by indian government",
];
const statewisecases = [
  "covid-19 state wise cases",
  "covid state wise cases",
  "coronavirus statewise cases",
  "statewise covid-19 cases",
  "statewise covid cases",
  "statewise coronavirus cases",
  "what are the statewise cases of covid-19",
  "what are the cases of covid-19 statwise",
  "what are the statewise cases of covid",
  "covid-19 statewise status",
  "covid statewise status",
  "coronavirus statewise status",
];

const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  content.textContent = "...Recognizing...";
};

recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

// add the listener to the button

btn.addEventListener("click", () => {
  recognition.start();
});

//The SpeechSynthesisUtterance() interface of the Web Speech API represents a speech request.
//It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

function readOutLoud(message) {
  let speech = new SpeechSynthesisUtterance();

  speech.text = message;
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech); // SO that it can speak what we said

  let search;
  message = message.toLowerCase();
  console.log(message);
  for (let i = 0; i < 20; i++) {
    if (message === covidCasesWorld[i]) {
      search = "https://www.worldometers.info/coronavirus/";
      break;
    } else if (message === covidCases[i]) {
      search = "https://www.mygov.in/covid-19";
      break;
    } else if (message === covidNews[i]) {
      search = "https://www.who.int/";
      break;
    } else if (message === registerForVaccination[i]) {
      search = "https://selfregistration.cowin.gov.in/";
      break;
    } else if (message === vaccinestatusindia[i]) {
      search = "https://dashboard.cowin.gov.in/";
      break;
    } else if (message === vaccinecertificate[i]) {
      search = "https://www.mygov.in/covid-19";
      break;
    } else if (message === guidelines[i]) {
      search =
        "https://static.mygov.in/rest/s3fs-public/mygov_161725058451307401.pdf";
      break;
    } else if (message === statewisecases[i]) {
      search = "https://www.mygov.in/corona-data/covid19-statewise-status";
      break;
    } else if (message === whatiscovid[i]) {
      search =
        "https://www.unicef.org/india/coronavirus/covid-19?gclid=Cj0KCQjwl_SHBhCQARIsAFIFRVUmFJtq0IdAwXMtJdCpX9Z7arE_tYh1yjrO_R1GxeWChSGSEGJ2lRUaAnOuEALw_wcB";
      break;
    } else search = "https://www.google.com/search?q=" + speech.text;
  }
  console.log(search);
  window.open(search);
}

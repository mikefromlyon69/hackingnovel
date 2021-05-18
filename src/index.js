import { Hint} from './hints.js'

const form = document.querySelector("#secretform");
const rdv = document.querySelector("#rdv");

const hintText = "Lorsque l’on veut représenter des données binaires (une image, un exécutable) dans un document textuel, tel qu’un courriel, la transcription hexadécimale en ASCII des octets multiplierait la taille par deux, l'encodage en base64 permet de limiter cette augmentation. ";
const hint_html = document.querySelector("#hint");
const hint_details_html = document.querySelector("#hint-details");
const hint = new Hint(hintText, hint_html, hint_details_html);
hint.setListener();


form.addEventListener('submit', function (event) {
    event.preventDefault();
    checkRdv(rdv);
});

const checkRdv  = (rdv) => {
  if (rdv.value === "Mister Robot, ce soir!") {
     rdv.classList.remove("failed");
     rdv.classList.add("success");
     hint.successHint();
     window.location.href = "chap2.html";
     
  }
  else
  {
     rdv.classList.add("failed");
     hint.failedHint();
  }
}
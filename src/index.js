import { Hint} from './hints.js'

const form = document.querySelector("#secretform");
const rdv = document.querySelector("#rdv");
const next = document.querySelector("#next");

const hintText = "Base64";
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
     next.innerHTML = "Prochaine PaGE";
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
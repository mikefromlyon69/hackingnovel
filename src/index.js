import { successHint, failedHint, setHint} from './hints.js'

const form = document.querySelector("#secretform");
const rdv = document.querySelector("#rdv");
const next = document.querySelector("#next");

const hintText = "Base64";
setHint(hintText);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    checkRdv(rdv);
});

const checkRdv  = (rdv) => {
  if (rdv.value === "Mister Robot, ce soir!") {
     next.innerHTML = "Prochaine PaGE";
     rdv.classList.remove("failed");
     rdv.classList.add("success");
     successHint();
     window.location.href = "chap2.html";
     
  }
  else
  {
     rdv.classList.add("failed");
     failedHint();
  }
}
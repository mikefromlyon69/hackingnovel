const hint = document.querySelector("#hint");
let hintText = "";

const setHint = (text) => {
  hintText = text;
  
}
hint.addEventListener('click', function (event) {
    event.preventDefault();
    giveHint(hintText);
});

const giveHint = (hintText) => {
	const hintDetails = document.querySelector("#hint-details");
	hintDetails.innerHTML = hintText;
}

const successHint = () => {
  hint.classList.remove("failed");
  hint.classList.add("success");
}

const failedHint = () => {
  hint.classList.add("failed");
  
}




export {giveHint, successHint, failedHint, setHint};
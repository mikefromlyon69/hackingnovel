const  b64_to_utf8  = (str) => {
  return window.atob(str); 
};

const decode_form = document.querySelector("#decode_form");
const b64_input = document.querySelector("#b64str");
const decode_area = document.querySelector("#decoded");

decode_form.addEventListener('submit', function (event) {
      event.preventDefault();
      displaystring(b64_input.value);
 });

const checkMessage  = (message) => {
  if (message === "Mister Robot, ce soir!") {
     decode_area.classList.remove("failed");
     decode_area.classList.add("success");
  }
  else
  {
     decode_area.classList.add("failed");
     decode_area.classList.remove("success");
  }
}

const displaystring = (str) => {
  const message_decoded = b64_to_utf8(str);
  decode_area.value = message_decoded;
  checkMessage(message_decoded);
};



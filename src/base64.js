class Base64 {
  constructor(b64_string) {
   this.b64_string = b64_string;
   this.decode_form = document.querySelector("#decode_form");
   this.b64_input = document.querySelector("#b64str");
   
   this.decode_area = document.querySelector("#decoded");
   this.set_listener();
 }


  b64_to_utf8  = (str) => {
  	return window.atob(str); 
  };

  set_listener = () => {
 	const _this = this;
    this.decode_form.addEventListener('submit', function (event) {
      event.preventDefault();
      _this.displaystring(_this.b64_input.value);
    });
   }

	checkMessage  = (message) => {
	    if (message === this.b64_string) {
	     this.decode_area.classList.remove("failed");
	     this.decode_area.classList.add("success");
	  	}
	  	else
	  	{
	     this.decode_area.classList.add("failed");
	     this.decode_area.classList.remove("success");
	  	}
	}

	displaystring = (str) => {
	  const message_decoded = this.b64_to_utf8(str);
	  this.decode_area.value = message_decoded;
	  this.checkMessage(message_decoded);
	};
}


export {Base64};
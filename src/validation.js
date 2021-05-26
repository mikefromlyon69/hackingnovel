class Validation {
  constructor(validation_string) {
    this.validation_string = validation_string;
    this.validation_html = document.querySelector("#validation-form");
    this.validation_input =  document.querySelector("#validation-input");
    this.set_listener();
 }

 set_listener = () => {
 	const _this = this;
    this.validation_html.addEventListener('submit', function (event) {
      event.preventDefault();
      _this.validate();
    });
 }

 validate = () => {
 	if (this.validation_input.value === this.validation_string) 
 	{
 		this.validation_input.classList.add("success");
 	}
 }
}

export {Validation};
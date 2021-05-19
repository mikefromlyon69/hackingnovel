class Hint {
  constructor(text, hint_html, hint_details_html) {
    this.text = text;
    this.html_element = hint_html;
    this.hintDetails = hint_details_html;
    this.setListener();
}


 
  giveHint = (hintText) => {
	this.hintDetails.innerHTML = this.text;
  }

  setListener = () => {
  	const _this = this;
    this.html_element.addEventListener('click', function (event) {
      event.preventDefault();
      _this.giveHint();
    });
  }
 successHint = () => {
  this.html_element.classList.remove("failed");
  this.html_element.classList.add("success");
 }

 failedHint = () => {
  this.html_element.classList.add("failed");
}

}

 

export {Hint};
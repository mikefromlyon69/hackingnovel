class Hint {
  constructor() {
    this.html_element = document.querySelector("#hint");
    this.hintDetails = document.querySelector("#hint-details");
    this.setListener();
}


 
  giveHint = (hintText) => {
     console.log("show");
     console.log(this.hintDetails.hidden);
	   this.hintDetails.hidden = false;
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
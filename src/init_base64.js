import { Base64 } from './base64.js';

const init_base = () => {
	if (document.querySelector("#decode_form") === null) 
 	{
 	return	
 	}
    const b64_string = "Mister Robot, ce soir!";
	const b64 = new Base64(b64_string);
}


export {init_base};
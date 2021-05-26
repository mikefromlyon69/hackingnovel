import { Validation }  from './validation.js';
import { load_validation} from './load_chapter.js'

const init_valid = () => {
	if (document.querySelector("#validation-form") === null) 
 	{
 	return;
 	}
    const validation = new Validation(load_validation());
}


export {init_valid};
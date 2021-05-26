import Typed from 'typed.js';
import { load_typed} from './load_chapter.js'

const init_type = () => {
    if (document.getElementById('commands') === null) {
    return;
    }
	const cutecat = "/\\_/\\ \r\n( o.o )\r\n > ^ <"
	const options = {
  	strings: [`'${load_typed()}'`],
  	typeSpeed: 40,
  	backSpeed: 0,
  	loop: true
	};
	const typed = new Typed('#commands', options);
}

export {init_type}
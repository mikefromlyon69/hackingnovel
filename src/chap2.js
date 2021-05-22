import { terminal } from './terminal.js'
import { Hint} from './hints.js'
import { Validation} from './validation.js'
import { File} from './file.js'

const hintText = "use ls to list files, use cat <filename> to display the content of a file. Example: cat cutecat.txt";
const hint = new Hint(hintText);

const validation = new Validation("password1234");


const terminit = " $ ";
terminal.write(terminit);


 				 





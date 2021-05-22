import { terminal } from './terminal.js'
import { Hint} from './hints.js'
import { Validation} from './validation.js'
import { File} from './file.js'

const hintText = "use ls to list files, use cat <filename> to display the content of a file. Example: cat cutecat.txt";
const hint = new Hint(hintText);

const validation = new Validation("password1234");


const terminit = " $ ";
terminal.write(terminit);
const files = "cutecat.txt secrets.txt"

const cutecat_file = new File("cutecat.txt", "/\\_/\\ \r\n( o.o )\r\n > ^ <");
const secrets_file = new File("secrets.txt", "jeffsmith@evilcorp.com password:password1234");

const commands = ["ls", "cat"];
const catArt = "/\\_/\\ \r\n( o.o )\r\n > ^ <";
const secrets = "jeffsmith@evilcorp.com password:password1234"
 				 





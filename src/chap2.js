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
 				 

terminal.onKey( (key,ev) => {
	if (key["domEvent"]["code"] === "Backspace"){ 
      terminal.handle_backspace(); 
	}
    else if (key["key"] === "\r"){
    	const commandArgs = terminal.parseLine(terminal.current_line);
    	processCommand(commandArgs);
    	terminal.new_line(terminit);
    }
    else {
    	terminal.write_char(key["key"]);
    }
});


const displayLs = () => {
 terminal.write(`\r\n${files}`);	
};

const displayCat = (file) => {
  	if (file === "cutecat.txt")
  	{
  	  terminal.write(`\r\n ${catArt}`);
  	}
  	else if (file === "secrets.txt") {
  	  terminal.write(`\r\n ${secrets}`);
  	}
  	else
  	{
      terminal.write("\r\n unknown file");
  	}
};

const processCommand  = (commandArguments) => {
  const command = commandArguments[0].replace(/\s/g, '');
  if (command === "ls") {
      
  } 
  else if (command === "cat" ) {
  	const file = treat_arg(commandArguments[1]).replace(/\s/g, '');
    displayCat(file);
  } 
  else {
  	terminal.write("\r\n unknown command");
  }
};

const treat_arg = (file) => {
  if (file === undefined)
  {
    return "";
  }
  return file;
}





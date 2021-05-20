import { terminal } from './terminal.js'
import { Hint} from './hints.js'
import { Validation} from './validation.js'

const hintText = "use ls to list files, use cat <filename> to display the content of a file. Example: cat cutecat.txt";
const hint = new Hint(hintText);

const validation = new Validation("password1234");


const terminit = " $ ";
terminal.write(terminit);
const files = "cutecat.txt secrets.txt"
const commands = ["ls", "cat"];
let current_line = "";
const catArt = "/\\_/\\ \r\n( o.o )\r\n > ^ <";
const secrets = "jeffsmith@evilcorp.com password:password1234"
 				 

terminal.onKey( (key,ev) => {
	if (key["domEvent"]["code"] === "Backspace"){ 
      terminal.write("\b \b");
	}
    else if (key["key"] === "\r"){
    	const commandArgs = parseLine(current_line);
    	processCommand(commandArgs);
    	terminal.write(` \r\n${terminit}`);
	    current_line = ""; 
    }
    else {
    	terminal.write(key["key"]);
    	current_line += key["key"];
     }
});

const parseLine  = (line) => {
  return line.split(' ');
};

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
    displayLs();
  } 
  else if (command === "cat") {
  	const file = commandArguments[1].replace(/\s/g, '');
    displayCat(file);
  } 
  else {
  	terminal.write("\r\n unknown command");
  }
};





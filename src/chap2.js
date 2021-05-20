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
let cursor_position = 0;
const catArt = "/\\_/\\ \r\n( o.o )\r\n > ^ <";
const secrets = "jeffsmith@evilcorp.com password:password1234"
 				 

terminal.onKey( (key,ev) => {
	if (key["domEvent"]["code"] === "Backspace"){ 
      handle_backspace(); 
	}
    else if (key["key"] === "\r"){
    	const commandArgs = parseLine(current_line);
    	processCommand(commandArgs);
    	terminal.write(` \r\n${terminit}`);
	    current_line = ""; 
    }
    else {
    	write_char(key["key"]);
      cursor_position += 1;
    }
});

const handle_backspace = () => {
  if (cursor_position > 0) {
    terminal.write("\b \b");
    cursor_position -= 1;
    current_line = current_line.slice(0, -1);
  }
}
const write_char = (key) => {
  terminal.write(key);
  current_line += key;
}

const new_line  = () => {
  return line.split(' ');
};

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





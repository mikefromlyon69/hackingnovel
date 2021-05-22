import { HackTerminal }  from './hackterminal.js';
import { File} from './file.js'
//load files
const cutecat_file = new File("cutecat.txt", "/\\_/\\ \r\n( o.o )\r\n > ^ <");
const secrets_file = new File("secrets.txt", "jeffsmith@evilcorp.com password:password1234");
const files = [cutecat_file,secrets_file]

const terminal = new HackTerminal(files);
terminal.setOption('cursorBlink', true);
terminal.open(document.getElementById('terminal'));

//focus on terminal to make the cursor visible
terminal.focus();

terminal.onKey( (key,ev) => {
	if (key["domEvent"]["code"] === "Backspace"){ 
      terminal.handle_backspace(); 
	}
    else if (key["key"] === "\r"){
    	const commandArgs = terminal.parseLine(terminal.current_line);
    	terminal.processCommand(commandArgs);
    	terminal.new_line(terminal.terminit);
    }
    else {
    	terminal.write_char(key["key"]);
    }
});

export  {terminal};
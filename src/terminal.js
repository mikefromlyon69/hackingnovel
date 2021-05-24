import { HackTerminal }  from './hackterminal.js';
import { File} from './file.js';

const cutecat_file = new File("cutecat.txt", "/\\_/\\ \r\n( o.o )\r\n > ^ <");
const secrets_file = new File("secrets.txt", "jeffsmith@evilcorp.com password:password1234");
const files = [cutecat_file,secrets_file];

const terminal = new HackTerminal(files);
terminal.setOption('cursorBlink', true);
terminal.open(document.getElementById('terminal'));

//focus on terminal to make the cursor visible
terminal.focus();

terminal.onKey( (key,ev) => {
	if (key["domEvent"]["code"] === "Backspace"){ 
        terminal.handle_backspace(); 
	}
    else if (key["key"] === "\r") {
    	console.log(terminal.current_line);
    	const commandArgs = terminal.parseLine(terminal.current_line);
    	terminal.processCommand(commandArgs);
    	terminal.new_line(terminal.terminit);
    }
    else if (key["domEvent"]["code"] === "ArrowRight") {
    	terminal.move_right();
    	terminal.write(key["key"]);
    }
    else if (key["domEvent"]["code"] === "ArrowLeft") {
    	terminal.move_left();
    	terminal.write(key["key"]);
    }
});

terminal.onData((data) => {
  terminal.write_data(data);
  console.log(terminal.cursor_position);
  
});

export  {terminal};
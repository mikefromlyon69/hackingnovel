import { Terminal } from 'xterm';

class HackTerminal extends Terminal {
  constructor(files) {
      super();
      this.current_line = "";
      this.cursor_position = 0;
      this.files = files;
      this.terminit = " $ ";
}

	handle_backspace = () => {
	  if (this.cursor_position > 0) {
	    this.write("\b \b");
	    this.current_line =  this.current_line.substring(0,this.cursor_position -1) + this.current_line.substring(this.cursor_position, this.current_line.length);
	    this.cursor_position -= 1;
	   }
	};

	insert_chars = (chars) => {
      this.current_line = [this.current_line.slice(0, this.cursor_position), chars, this.current_line.slice(this.cursor_position)].join('');
	};

	write_chars = (chars) => {
	  this.write(chars);
	  this.insert_chars(chars);
	  this.cursor_position += chars.length;
	};
    
    write_data = (data) => {
      if (this.is_letters(data))
      {
      	this.write_chars(data);
      }
    };

    is_letters = (data) => {
      return /^[a-zA-Z\.| ]+$/.test(data);
    }

	new_line  = (terminit) => {
	  this.write(` \r\n${terminit}`);
	  this.current_line = ""; 
	  this.cursor_position = 0 ;
	};

	move_right = () => {
      this.cursor_position += 1;
	};

	move_left = () => {
      this.cursor_position -= 1;
	};

	parseLine  = (line) => {
	  return line.split(' ');
	};

	processCommand  = (commandArguments) => {

	  const command = commandArguments[0].replace(/\s/g, '');
	  if (command === "ls") {
	      this.displayLs();
	  } 
	  else if (command === "cat" ) {
	  	const file_name = this.treat_arg(commandArguments[1]).replace(/\s/g, '');
	    this.displayCat(file_name);
	  } 
	  else {
	  	this.write("\r\n unknown command");
	  }
	};
    
    find_filenames = () => {
		return this.files.map(file => file.name).join(" ");
	}

	displayLs = () => {
	  const files_names = "";
	  this.write(`\r\n${this.find_filenames()}`);	
	};

	displayCat = (file_name) => {
		const file = this.find_file(file_name)
	  	if (file === undefined)
	  	{
	  	  this.write("\r\n unknown file");
	  	  
	  	}
	  	else {
	      this.write(`\r\n ${file.content}`);
	  	}
	};
   
   treat_arg = (file_input) => {
	  if (file_input === undefined)
	  {
	    return "";
	  }
	  return file_input;
	};

	find_file = (input_file_name) => {
      return this.files.find(file => file.name === input_file_name);
	};

	
	

}

export {HackTerminal}


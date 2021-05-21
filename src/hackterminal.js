import { Terminal } from 'xterm';

class HackTerminal extends Terminal {
  constructor() {
      super();
      this.current_line = "";
      this.cursor_position = 0;
}

handle_backspace = () => {
  if (this.cursor_position > 0) {
    this.write("\b \b");
    this.cursor_position -= 1;
    this.current_line = this.current_line.slice(0, -1);
  }
};

write_char = (key) => {
  this.write(key);
  this.current_line += key;
  this.cursor_position += 1;
};

new_line  = (terminit) => {
  this.write(` \r\n${terminit}`);
  this.current_line = ""; 
};

parseLine  = (line) => {
  return line.split(' ');
};

}

export {HackTerminal}


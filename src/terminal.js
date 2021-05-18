import { Terminal } from 'xterm';

const terminal = new Terminal();
terminal.setOption('cursorBlink', true)
terminal.open(document.getElementById('terminal'));

//focus on terminal to make the cursor visible
terminal.focus();

export  {terminal};
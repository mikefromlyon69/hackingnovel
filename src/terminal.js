import { HackTerminal }  from './hackterminal.js';


const terminal = new HackTerminal();
terminal.setOption('cursorBlink', true);
terminal.open(document.getElementById('terminal'));

//focus on terminal to make the cursor visible
terminal.focus();

export  {terminal};
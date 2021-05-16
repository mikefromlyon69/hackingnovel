import { Terminal } from 'xterm';

const terminal = new Terminal();
terminal.open(document.getElementById('terminal'));

export  {terminal};
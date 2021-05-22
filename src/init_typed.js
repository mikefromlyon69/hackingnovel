import Typed from 'typed.js';

const cutecat = "/\\_/\\ \r\n( o.o )\r\n > ^ <"
const options = {
  strings: ['$ ls^100 <br>  `cutecat.txt secrets.txt<br>` $ cat cutecat.txt<br>^100 `  /\\_/\\ <br>( o.o ) <br> > ^ <` '],
  typeSpeed: 40,
  backSpeed: 0,
  loop: true
};

const typed = new Typed('#commands', options);

export {typed}
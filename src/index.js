import { Hint} from './hints.js'
import { Base64} from './base64.js'

const hintText = "Lorsque l’on veut représenter des données binaires (une image, un exécutable) dans un document textuel, tel qu’un courriel, la transcription hexadécimale en ASCII des octets multiplierait la taille par deux, l'encodage en base64 permet de limiter cette augmentation. ";
const hint = new Hint(hintText);

const b64_string = "Mister Robot, ce soir!";
const b64 = new Base64(b64_string);




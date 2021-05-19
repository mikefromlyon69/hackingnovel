import { Hint} from './hints.js'

const hintText = "Lorsque l’on veut représenter des données binaires (une image, un exécutable) dans un document textuel, tel qu’un courriel, la transcription hexadécimale en ASCII des octets multiplierait la taille par deux, l'encodage en base64 permet de limiter cette augmentation. ";
const hint_html = document.querySelector("#hint");
const hint_details_html = document.querySelector("#hint-details");
const hint = new Hint(hintText, hint_html, hint_details_html);




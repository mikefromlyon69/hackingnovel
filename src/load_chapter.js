import { File} from './file.js'
const json = require('./mapper/mapper.json');
const chapter = window.location.pathname.split( '/' ).pop().split('.')[0]; 



const load_files = () => {
	const files_array = json[chapter]["files"];
	const files_object = files_array.map(obj => {
	  return new File(obj.name,obj.content);
	});
	return files_object;
}

const load_validation = () => {
	return json[chapter]["validation"];
}

const load_typed = () => {
	return json[chapter]["typed"];
}


export { load_files, load_validation, load_typed };
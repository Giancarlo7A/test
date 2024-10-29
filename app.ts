import { log } from "console";

console.log('Hola Mundo');

let numberOfLines: number = 1;

function printLineNumber() {
    console.log('Línea #', numberOfLines);
    numberOfLines += 1;
    //return numberOfLines;
}

printLineNumber();
printLineNumber();
printLineNumber();
printLineNumber();

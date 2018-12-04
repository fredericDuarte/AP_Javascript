/****
 *  exemple  film  
 * 
 */


let film = () => {
    
    telecharger(play);
    
    
} 

let telecharger = (lecteur) => {
    lecteur();
}

let play= () => {
    console.log("Lecture");
}
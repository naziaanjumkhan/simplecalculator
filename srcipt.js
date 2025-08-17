let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
// empty array banao
let string = "";
// Buttons ko array me convert karo
let arr = Array.from(buttons); 
// yahan loop chalega
    arr.forEach(buttons=>{
        buttons.addEventListener("click", (e)=>{
            e.preventDefault();
            const value = e.target.textContent;
            if(value == "="){
                string = eval(string);   //calculate
                input.value = string;
            }
            else if(value == "AC"){
                string = "";   // All clear honga data
                input.value = string;
            }
            else if(value == "DEL"){
                string = string.slice(0,-1); // last element remove honga
                input.value = string;
            }
            else{
                string += value; // add button text honga
                input.value = string;
            }
        });
        
    });
    

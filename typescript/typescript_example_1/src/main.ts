for(let i : number = 1; i <= 10; i++){
   console.log("__for__loop_____", i)
}


const squared = (num: number) =>{
   return num * num;
}

console.log("___square___", squared(5))

function greetings(): void {
   console.log("__greetings___")

} 

greetings()

const throwError = (message: string): never => {
   throw new Error(message);
};
//throwError("dealing with your trouble")
// single value;
const myArray: number[] = [1, 2, 3, 45, 100, 200, 300, 400];
//union value
const mixArray: (string|number)[]= [1, 2, "Berlin",  3, 45, "Cuba", 100, 200, 300, 400];
// tuples value
let student: [string, string, number, string, boolean, number]= ["Maribel", "Bryan", 17, "Germany", true, 90 ];


let studentObject:{name: string, lastname: string,
                   age: number, country: string, 
                   promoted : boolean, grade: number}= {name: "Maribel", lastname: "Bryan",
                                                        age: 17, country: "Germany", 
                                                        promoted: true, grade: 90 };

 interface Student { 
                    name: string, 
                    age: number, 
                   enrolled: boolean
                  };
let newStudent:Student = {name: 'Maria', age: 10, enrolled: true};      
                                              
console.log(myArray)
//console.log(mixArray)
//console.log(student)
console.log(studentObject)
console.log(newStudent);   
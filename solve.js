function allNumbers(numbs){
    let sum = 0;
    for(let i = 0; i < numbs.length; i++){
        const element = numbs[i];
        if(element % 2 === 0){
            sum = sum + element;
        }
    }
    return sum;
}
 const numbers  = [2,4,5,6,8,7,13];
 const add = allNumbers(numbers);
//  console.log(add);

function count(num) {
    for (let i =0; i < num; i++){
        let star ="*";
        for(let j = 0; j < i; j++){
            star += "*";
        }
        console.log(star);
    }
}
const countStar = count(1);
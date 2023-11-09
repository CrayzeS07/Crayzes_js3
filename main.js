// // sozlarni teskari tartibda chiqrish
{let a = prompt("so'z kiring")
let b = a.split('').reverse().join('');
console.log(b);}
//sonlarni ozgartirish
    let son = prompt("son kiring");
    let oxirgiSon = parseInt(son.toString().split('').reverse().join(''));
    console.log(oxirgiSon); 
//sonlarni kattasini aniqlash
let a = parseInt(Math.random() * 2)
let b = parseInt(Math.random() * 2)
let c = parseInt(Math.random() * 2)


if(a > b){
    if (a > c){
        console.log(`${a} son katta`);
    }else{
        console.log(`${c} son katta`);
    }
}
else if (b > c){
    console.log(`${b} son katta`);
}else if(c > b){
    console.log(`${c} son katta`);
}else if(a = b = c){
 console.log("sonlar teng");
}else{
    console.log('teng');
}
console.log(`a son ${a}`);
console.log(`b son ${b}`);
console.log(`c son ${c}`);
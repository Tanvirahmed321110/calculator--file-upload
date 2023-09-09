let allBtn = document.getElementsByTagName('button');
for(const per of allBtn) {
    per.addEventListener('focus',()=>{
        document.body.style.backgroundColor = 'gray'
        document.getElementById('display').style.backgroundColor='whitesmoke'
    }) 
    per.addEventListener('mouseout',()=>{
        document.body.style.backgroundColor = 'white'
    }) 
}

let display = document.getElementById('display') 
// btnHandelar
function btnHandelar (InnerText) {
    let display = document.getElementById('display') ;
    display.value += InnerText
}

// clear input
function btnHandelarClear() {
    display.value = ' '
}

// result 
function btnHandelarResult () {
    let displayData = display.value;
    let jsFun = eval(displayData);
    display.value = jsFun
}






// calculation and diplay show document write function
let input1 = prompt('Give Me first Number : ');
let input2 = prompt('Give Me second Number : ');
    
    let input1Number = Number(input1);
    let input2Number = Number(input2);

    if(!isNaN(input1Number) && !isNaN(input2Number)){

    // const add = (+input1) + (+input2)
    const add = input1Number + input2Number;
    const sub = input1Number - input2Number;
    const into = input1Number * input2Number;
    const divition= input1Number / input2Number;
    const modulas = input1Number % input2Number;

    document.write(`add is two number : ${add.toFixed(2)} <br/>`);
    document.write('sub is two number : '+sub.toFixed(2) + '<br/>');
    document.write('into two number is : '+into.toFixed(2) + '<br/>');
    document.write(`divition two number is : ${divition.toFixed(2)} <br/>`);
    document.write(`modulas two number is : ${modulas.toFixed(2)} <br/>`);
}
else{
    alert("Opos wrong input, please give number")
}

//1
let minute = prompt("Введите минуту (от 0 - 59)", 0),
result;
if(minute < 15)
    result = " Первая"
else if(minute > 15 && minute < 30)
    result = "Вторая"
else if(minute > 30 && minute < 45)
    result = "Третья"
else if(minute > 45 && minute < 60)
    result = "Четвертая"

alert(result)


//2
let arr, lang = prompt("Введите язык(ru/en)", "ru")
if(lang == "ru")
    arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
else
    arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
alert(arr)


//3
let number = prompt("Введите целое чилсло", 0), 
typeOfNumber, LenOfNumber;
switch(number.length){
    case 1: LenOfNumber = "Однозначное"
    break; 
    case 2: LenOfNumber = "Двузначное"
    break; 
    case 3: LenOfNumber = "Трехзначное"
    break; 
    default: LenOfNumber = "Более трех значений"
    break;
}
if(number >= 0){
    typeOfNumber = "положительное";
}
else{
    typeOfNumber = "отрицательное";
}
alert(`Число ${number}, кол-во цифр в числе ${number.length}, тип числа ${typeOfNumber}, ${LenOfNumber}`);


//4
let red = prompt("Горит ли красный?(0 - нет, 1 - да)", 0),
yellow = prompt("Горит ли желтый?(0 - нет, 1 - да)", 0), 
walk;
walk = (!red && !yellow) ? "можно переходить" : "нельзя переходить";
alert(walk)


//5
for(let i = 0; i <= 12; i++){
    console.log(`Число ${i}`);
}


//6
for(let i = 5; i <= 13; i++){
    console.log(`Число ${i}`);
}


//7
for(let i = 0; i <= 16; i++){
    if(i%2==0){
        console.log(`Число ${i}`)
    };
}



//8
let array = [2,5,8,3,6], sum = 0;
array.forEach(function(item){
    sum+=item;
})
console.log(sum);
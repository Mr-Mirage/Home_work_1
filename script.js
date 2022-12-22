// let name = "Ilya";
// alert(`hello ${1}`);        //hello 1
// alert(`hello ${"name"}`);   //hello name
// alert(`hello ${name}`);     //hello Ilya

//------------------------ Циклы while и for----------------------------

// let i = 3;
// while (i) {
//     alert(i--); // Обратный отсчёт
// }

// let i = 0;
// while (++i < 5) alert(i); // От 1-4 сначала увеличивает потом сравнивает

// let i = 0;
// while(i++ < 5) alert(i); // От 1-5 сначала сравнивает потом увеличивает

// Выполнение увеличения происходит в конце, значит разницы нет
// for(let i = 0; i < 5; i++) alert(i);  // От 0-4  
// for(let i = 0; i < 5; ++i) alert(i); // От 0-4  

// Выводит только чётные числа
// for(let i = 2; i <= 10; i++){
//     if(i % 2 == 0) // (i % 2 !== 0) continue;
//     alert(i);
// }

// Замена for на while
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
// let i = 0;
// while(i < 3){
//     i++;
//     alert(`Number ${i}!`);
// }

// Повторять цикл, пока ввод неверен
// for(let i = 0; i <= 100; i++){
//      i = prompt("Введите число больше 100!");
//     if (i > 100) alert(`Вы ввели ${i}!`);
// }

// Вывести простые числа
// let n = prompt("Введите число не меньше 2!");
// next: // метка
// for(let i = 2; i <= n; i++){  // цикл от i-n
//     for(let j = 2; j < i; j++){ // вложенный цикл от j-i
//         if(i % j === 0) continue next; // проверка если не подходит то переходим к метке
//     }
//     console.log(i);
// }

// ---------------------Операторы сравнения------------------------------

// 5 > 4                   // true
// " ананас" > "яблоко"    // false посимвольное а<я
// "2" > "12"              // true посимвольное первый символ больше
// undefinded == null      // true 
// undefinded === null     // false сторогое сравнение
// null == "\n0\n"         // false null равен только undefinded
// null === +"\n0\n"       // false разные типы

//-------------------- Логические операторы---------------------------------

// Что выведет alert (ИЛИ)?
// alert(null || 2 ||undefined); // 2 т.к. это первое истенное значение которое даёт true
// Что выведет alert (ИЛИ)?
// alert(alert(1) || 2 || alert(3)); // 1, 2 т.к. второй истенный и до 3го не дойдёт

// Что выведет alert (И)?
// alert(1 && null && 2); // null т.к. первое ложное 
// Что выведет alert (И)?
// alert(alert(1) && alert(2)); // 1, undefined т.к. до правого не доходит

// Что выведет этот код?
// alert (null || 2 && 3 || 4); // && выше || результат (null || 3 || 4) = 3 первое истинное

// Проверка значения из диапазона
// if(age >= 14 && age <= 90);

// Проверка значения вне диапазона
// if(age <= 14 || age >=90);
// if(!(age >= 14 && age <= 90));

// Вопрос о "if"
// if(-1 || 0) alert("First"); // true
// if(-1 && 0) alert("Second"); // false -1 && 0 = 0
// if(null || -1 && 1) alert("Third"); // у && приоритет 

// Проверка логина

// let who = prompt("Who are you?", ""); // "" для возврата пустой строки

// if(who === "admin"){
//     let password = prompt("Enter your password!", "");
    
//     if(password === "im boss"){ 
//         alert("Hello Boss!");
//     } else if(password === "" || password === null){ // null для esc
//         alert("error");
//     } else{
//         alert("wrong password!");
//     }
// }

// else if(who === "" || who === null){
//     alert("error");
// } else{
//     alert("I dont know you!");
// }


// ---------------------- Условное ветвление: if, '?'- условный оператор(тернарный) ---------------------------

//if (строка с нулём)
// if ("0") {
//     alert( 'Привет' ); // да т.к. строка не пустая
//   }

//Название JavaScript
// let nameOfJs = prompt("What is the official name of JavaScript?", "");

// if(nameOfJs == "ECMAScript"){
//     alert("Rigth!");
// } else{
//     alert("Dont know? ECMAScript!");
// }

// Покажите знак числа

// let num = prompt("Enter the number!");

// if(num > 0){
//     alert(1);
// }
// else if(num < 0){
//     alert(-1);
// } else{
//     alert(0);
// }

// Перепишите 'if' в '?'
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

//let result = (a + b < 4) ? "few" : "many";

// Перепишите 'if..else' в '?'
// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
// let message = (login == 'Сотрудник') ? "Привет":
//     (login == 'Директор') ? "Здравствуйте":
//     (login == '') ? "Нет логина":
//     '';


// -------------------------- Массивы Array ---------------------------------------

// Скопирован ли массив?
// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан"); // добавляет в конец Банан

// // что в fruits?
// alert( fruits.length ); // ? 4

// Операции с массивами

// let styles = ["Jazz", "Blues"];
// console.log(styles);
// styles.push("Rock-n-Roll");
// console.log(styles);
// styles[Math.floor((styles.length - 1) / 2)] = "Classic";
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift("Rap", "Raggy");
// console.log(styles);

// Вызов в контексте массива

// let arr = ["a", "b"];
// // добавили функцию:
// arr.push(function() { 
//   alert( this );
// });

// arr[2](); // a, b, function()


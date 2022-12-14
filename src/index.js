/**
 * const let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "letを上書き";
// console.log(val2);

// //letは再宣言不可能
// let var2 = "let変数を再宣言";

// const var3 = "const変数";
// console.log(var3);

// //const変数は上書き不可
// // var3 = "const変数を上書き";

// const var3 = "const変数を再宣言";

//constでも変更可能な例
//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "しゅん",
//   age: 24
// };
// val4.name = "shun";
// val4.address = "Tokyo";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "しゅん";
// const age = 24;
//「私の名前はしゅんです。年齢は24歳です。」

//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

//テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// const func1 = function func1(str) {
//   return str;
// };

// console.log(func1("func1です。"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(2, 4));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "しゅん",
//   age: 24
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message1);

// const myProfile = ["しゅん", 24];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => {
//   console.log(`こんにちは${name}さん！`);
// };
// sayHello();

/**
 * スプレット構文　...
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
//従来
const nameArr = ["田中", "山田", "佐藤"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です。`);
// }

//map
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "佐藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件 ？　条件がtrueの時　：　条件がfalseの時
// const val1 = 1 > 0 ? "trueです。" : "falseです。 ";
// console.log(val1);

// const num = 1300;

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : `数値を入力してください。`;
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です。";
// };

// console.log(checkSum(6, 50));

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります。");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります。");
// }

// ||の左側がfalseなら右側を返す
const num = 100;
const fee = num || "金額未設定です。";
console.log(fee);

//　&&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました。";
console.log(fee2);

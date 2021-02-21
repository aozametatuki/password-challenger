'use strict';

// パスワードの長さ
const length = 12;
// パスワードに使用される英小文字と英大文字、数字
const charset =
  'abcdefghijklmnopqrstuvwxyz' +
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
  '0123456789';

// パスワードジェネレーター関数
function passwordGenerator(){

  let password = '';
  // ランダムなパスワードを生成する
  for(let i = 0; i<length; i++){
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  // 英小文字と英大文字、数字が含まれていることを確認
  const includeAllTypes = /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password);
  // パスワードの生成に失敗したら再び関数を実行
  return includeAllTypes ? password : passwordGenerator();
}

// 生成されたパスワードを確認
console.log(passwordGenerator());
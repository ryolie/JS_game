'use strict';


const questions = [
    'JavaScript',
    'document',
    'window',
    'getElementById',
    'getElementByClassName',
    'addEventListener'
];

const entered = document.getElementById("entered");
const remained = document.getElementById("remained");
const inputText = document.getElementById("inputText");
const game = document.getElementById("game");
const message = document.getElementById("message");
const replayBtn = document.getElementById("replayBtn");



let remainedTextWords = remained.textContent.split('');
let enteredTextWords = [];
let currentKey;
let currentText;

// 新しい問題をランダムにセットする
const setQuestion = () => {
    // 処理を書く
    // 配列「question」からランダムに選ぶ
    currentKey = Math.floor(Math.random() * questions.length);
    currentText = questions[currentKey];

    // 選ばれた問題は配列から削除
    questions.splice(currentKey, 1);
    console.log(questions);

    // 現在の問題をリセットして新しい問題をセット
    entered.textContent = '';
    remained.textContent = currentText;

    // 入力済み、未入力、inputをリセット
    enteredTextWords = [];
    remainedTextWords = currentText.split('');
    inputText.value = '';
};
setQuestion();

document.addEventListener('input', (e) => {
    // ここに処理を書く
    if (remainedTextWords[0] === e.data) {
        // 入力済みに文字を追加する
        enteredTextWords.push(remainedTextWords[0]);
        // 未入力から文字を削除する
        remainedTextWords.shift();

        // 入力済みと未入力を連結して表示する
        entered.textContent = enteredTextWords.join('');
        remained.textContent = remainedTextWords.join('');

        if (remainedTextWords.length <= 0)
            if (questions.length <= 0) {
                game.classList.add('hidden');
                message.classList.remove('hidden');
            } else {
                setQuestion(); //新しい問題
            }
    }
});

replayBtn.addEventListener('click', () => {
    location.reload();
});
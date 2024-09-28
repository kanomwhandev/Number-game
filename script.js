'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// ฟังก์ชันแสดงข้อความ
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
};

// เมื่อคลิกปุ่ม "Check!"
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // เมื่อไม่มีการกรอกตัวเลข
    if (!guess) {
        displayMessage('❌ No Number!');
    }
    // เมื่อทายถูกต้อง
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        // เปลี่ยนสไตล์เมื่อชนะ
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // อัปเดตคะแนนสูงสุด
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    // เมื่อทายผิด
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '👆 Too high!' : '👇 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 Game Over!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// เมื่อคลิกปุ่ม "Again!!"
document.querySelector('.again').addEventListener('click', () => {
    // รีเซ็ตค่าเริ่มต้น
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // รีเซ็ตสไตล์
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

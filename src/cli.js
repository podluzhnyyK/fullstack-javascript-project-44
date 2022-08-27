import readlineSync from 'readline-sync';

export default function getName() {
    var userName = readlineSync.question('May I have your name? ');
    return console.log('Hello, ' + userName + '!');
}
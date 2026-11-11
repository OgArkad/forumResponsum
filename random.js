/* document.getElementById("clickButton").addEventListener("click", function (e) {
    alert("Hi! You are a brave guy for clicking a suspicious button on the internet. For that I will tell what time is it now: " + new Date)
}); */
let pRandomWord = document.getElementById("pRandomWord");
let generateWordButton = document.getElementById("generateWordButton");
const randomWords = ["falsity","skibidi","sigma","chamba","eshkere","aura","ratio","respect","mog","tuff","maxxing","clipfarmmaxxing","verity","fanumtax","cornball","rizz","delulu","slay","low-key","dank","finna","cap","drip","sheesh","bussin","sus","brain rot","cringe","W","L","bet","chud","unemployed","j*b","sh*wer","empl*yment","based","ate","bed rotting","slop","gem","skufidon","alytushka","azaza","guzljach"];

let generateNumberButton = document.getElementById("generateNumberButton");
let pRandomNumber = document.getElementById("pRandomNumber");

min = Math.ceil(1);
max = Math.floor(randomWords.length);
generateWordButton.addEventListener("click", function (e) {
    pRandomWord.innerHTML = randomWords[Math.floor(Math.random() * (max - min + 1)) + min];
});

generateNumberButton.addEventListener("click", function (e) {
    pRandomNumber.innerHTML = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
});
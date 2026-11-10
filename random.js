/* document.getElementById("clickButton").addEventListener("click", function (e) {
    alert("Hi! You are a brave guy for clicking a suspicious button on the internet. For that I will tell what time is it now: " + new Date)
}); */
let pRandomWord = document.getElementById("pRandomWord");
let generateWordButton = document.getElementById("generateWordButton");
const randomWords = ["skibidi","sigma","chamba","eshkere","aura","ratio","respect","mog","tuff","maxxing","clipfarmmaxxing","verity","fanumtax","cornball","rizz","delulu","slay","low-key","dank","finna","cap","drip","sheesh","bussin","sus","brain rot","cringe","W","L","bet"];
min = Math.ceil(1);
max = Math.floor(randomWords.length);
generateWordButton.addEventListener("click", function (e) {
    pRandomWord.innerHTML = randomWords[Math.floor(Math.random() * (max - min + 1)) + min];
});
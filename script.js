/*-------------Setting up the Supabase------------------*/
const SUPABASE_URL = 'https://zrxwtghlnlftcdlumonk.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'sb_publishable_be-oOn6pt1gKjPIat_cXUg_pEJxWncL';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let sendButton = document.getElementById("sendButton");
let userInput = document.getElementById("inputMessage");
let nameInput = "Max";
let msgHistory = document.getElementById("msgHistory");

let shownMessages = new Set();

async function sendMessage() {
    let message = userInput.value.trim();
    let username = nameInput.value.trim() || "Anonymous";

    if (message === "") return;

    localStorage.setItem("chat_username", username);

    //show it instantly, the real one from the database is skipped by the id check
    showMessage(message, new Date().toISOString(), username, "temp_" + Date.now());
    userInput.value = "";

    const { data, error } = await supabaseClient
        .from("messages")
        .insert([{ text: message, username: username }])
        .select();

    if (error) {
        console.error(error);
        alert("Failed to send message.");
        return;
    }

    if (data && data[0]) {
        shownMessages.add(data[0].id);
    }
}

function showMessage(text, createdAt, username, id) {
    if (id && shownMessages.has(id)) return;
    if (id) shownMessages.add(id);

    let entry = document.createElement("div");
    entry.className = "message-entry";

    entry.innerHTML = `
        <div class="timestamp">[${formatDate(createdAt)}]</div>
        <div class="message-text">
            <span class="user-header">${username || "Anonymous"}: </span>
            <span>${text}</span>
        </div>
    `;

    msgHistory.appendChild(entry);
    msgHistory.scrollTop = msgHistory.scrollHeight;
}

async function loadMessages() {
    const { data, error } = await supabaseClient
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true });

    if (error) { console.error(error); return; }

    msgHistory.innerHTML = "";
    for (let msg of data) {
        showMessage(msg.text, msg.created_at, msg.username, msg.id);
    }
}

supabaseClient
    .channel("public:messages")
    .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, function (payload) {
        showMessage(payload.new.text, payload.new.created_at, payload.new.username, payload.new.id);
    })
    .subscribe();

window.addEventListener("DOMContentLoaded", function () {
    loadMessages();
});

function formatDat1e(dateString) {
    let date = new Date(dateString);

    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let day = String(date.getDate()).padStart(2, "0");
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
}

function showMessage(text, createdAt, username, id) {
    if (id && shownMessages.has(id)) return;
    if (id) shownMessages.add(id);

    let entry = document.createElement("div");
    entry.className = "message-entry";

    entry.innerHTML = `
        <div class="timestamp">[${formatDate(createdAt)}]</div>
        <div class="message-text">
            <span class="user-header">${username || "Anonymous"}: </span>
            <span>${text}</span>
        </div>
    `;

    msgHistory.appendChild(entry);
    msgHistory.scrollTop = msgHistory.scrollHeight;
}

/*--------------Template input message------------------*/

var data = document.createElement("p");
data.innerText = 'Max - 2026/10/26 23:46:43';
data.classList.add("data");

var message = document.createElement("p");
message.innerText = 'Hello! This is the first message!';
message.classList.add("messageInformation");

document.getElementById("msg1").appendChild(data);
document.getElementById("msg1").appendChild(message);

/*-------------------how the send message will work-------------------------*/

let sendMessageButton = document.getElementById("sendButton");

let userName = "Daniel";

sendMessageButton.addEventListener("click", function (e) {
    sendMessage();
});

document.getElementById("inputMessage").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage(){
    var datetime = formatDate();

    console.log(userName + " - " + datetime);
    console.log(document.getElementById("inputMessage").value);

    var messageBox = document.createElement("div");
    messageBox.classList.add("message");

    var data = document.createElement("p");
    var message = document.createElement("p");
    var upVote = document.createElement("button");
    var downVote = document.createElement("button");

    data.innerText = userName + " - " + datetime;

    message.innerText = document.getElementById("inputMessage").value;

    upVote.type = 'button'; upVote.textContent = '✅';
    downVote.type = 'button'; downVote.textContent = '⛔';
    upVote.classList.add("vote"); downVote.classList.add("vote");

    messageBox.appendChild(data);
    messageBox.appendChild(message);
    messageBox.appendChild(upVote);
    messageBox.appendChild(downVote);
    document.getElementById("chatBox").appendChild(messageBox);
}

function formatDate(){
    var currentdate = new Date(); 

    const day = String(currentdate.getDate()).padStart(2, '0');
    const month = String(currentdate.getMonth() + 1).padStart(2, '0');
    const year = String(currentdate.getFullYear()).padStart(2, '0');

    const hours = String(currentdate.getHours()).padStart(2, '0');
    const minutes = String(currentdate.getMinutes()).padStart(2, '0');
    const seconds = String(currentdate.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
}

/*------------------------Channels------------------------------*/
 var channelsChat = document.getElementById('channelsChat');
 channelsChat.onchange = (event) => {
     var inputText = event.target.value;
     console.log(inputText);
 }
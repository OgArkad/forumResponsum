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

let userName = "Max";

sendMessageButton.addEventListener("click", function (e) {
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " - "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

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

    upVote.type = 'button'; upVote.textContent = '👍';
    downVote.type = 'button'; downVote.textContent = '👎';

    messageBox.appendChild(data);
    messageBox.appendChild(message);
    messageBox.appendChild(upVote);
    messageBox.appendChild(downVote);
    document.getElementById("chatBox").appendChild(messageBox);
});
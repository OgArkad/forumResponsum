import { supabase } from './supabase.js'

async function loadPoll(pollId) {
    const { data, error } = await supabase
        .from('polls')
        .select(`
            id,
            title,
            description,
            allow_multiple,
            poll_options (
                id,
                option_text,
                display_order
            )
        `)
        .eq('id', pollId)
        .single()

    if (error) {
        console.error('Error loading poll:', error.message)
        return null
    }

    if (data && data.poll_options) {
        data.poll_options.sort((a, b) => a.display_order - b.display_order)
    }

    return data
}

function renderPoll(data) {
    let result = data.title + "\n";
    data.poll_options.forEach(element => {
        result += element.option_text + "\n";
    });
    return result;
}

function createButton(){
    const button = document.createElement("button");
    button.innerHTML = "Vote";
    button.style.color = "#ffffff";
    button.style.fontSize = "1.15rem";
    button.style.backgroundColor = "#9f60e8";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    return button;
}

const targetPollId = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'; 

loadPoll(targetPollId).then(data => {
    if (data) {
        const pre = document.createElement("pre");
        pre.textContent = renderPoll(data);
        document.getElementById("test").replaceChildren(pre);
        document.getElementById("test").appendChild(createButton());
    } else {
        document.getElementById("test").innerHTML = "Failed to load poll.";
    }
});

const targetPollId1 = '9e59a7b1-6665-42a2-9669-204620867d97'; 

loadPoll(targetPollId1).then(data => {
    if (data) {
        const pre = document.createElement("pre");
        pre.textContent = renderPoll(data);
        document.getElementById("test1").replaceChildren(pre);
        document.getElementById("test1").appendChild(createButton());
    } else {
        document.getElementById("test1").innerHTML = "Failed to load poll.";
    }
});

const targetPollId2 = '81465aa4-213a-4ca9-b667-eb30c7e21478'; 

loadPoll(targetPollId2).then(data => {
    if (data) {
        const pre = document.createElement("pre");
        pre.textContent = renderPoll(data);
        document.getElementById("test2").replaceChildren(pre);
        document.getElementById("test2").appendChild(createButton());

    } else {
        document.getElementById("test2").innerHTML = "Failed to load poll.";
    }
});

/*var rawData = '[{"item1":"tag1","a1":"b1"},{"item2":"tag2","a2":"b2"}]';
var parsed = JSON.parse(rawData);
console.log(parsed[0].a1); // logs "b1"
console.log(parsed[1].a2); // logs "b2"

const optionNames = data.poll_options
  .map(option => option.option_text)
  .join("\n");

document.getElementById("test").innerHTML = `<pre>${data.title}\n${optionNames}</pre>`;*/
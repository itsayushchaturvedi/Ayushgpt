const apiKey = const apiKey =AIzaSyC7wY3o_P73vPPU5fQXl-YOGo0YbtNY1dg

async function send(){
  let input = document.getElementById("userInput").value;
  if(input=="") return;

  let chatbox = document.getElementById("chatbox");
  chatbox.innerHTML += `<div class='user'>${input}</div>`;

  document.getElementById("userInput").value="";

  let response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey,
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        contents:[{parts:[{text: input}]}]
      })
    }
  );

  let data = await response.json();
  let reply = data.candidates[0].content.parts[0].text;

  chatbox.innerHTML += `<div class='bot'>${reply}</div>`;
  chatbox.scrollTop = chatbox.scrollHeight;
}

async function send(){
  let input = document.getElementById("userInput").value;
  if(input=="") return;

  let chatbox = document.getElementById("chatbox");
  chatbox.innerHTML += `<div class='user'>${input}</div>`;

  document.getElementById("userInput").value="";

  let response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey,
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        contents:[{parts:[{text: input}]}]
      })
    }
  );

  let data = await response.json();
  let reply = data.candidates[0].content.parts[0].text;

  chatbox.innerHTML += `<div class='bot'>${reply}</div>`;
  chatbox.scrollTop = chatbox.scrollHeight;
}

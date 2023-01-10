function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6HaHibqLc5l":
        Script1();
        break;
  }
}

function Script1()
{
  // Replace this URL with your Web App URL
const url = "https://script.google.com/macros/s/AKfycbyZN8J-29Av8RzuQBDzNoUxbSDGzUVtijhCM1E1aiDl_8txZO9JPqp5UlCdDbBDwLycKw/exec";

const player = GetPlayer();
let Name = player.GetVar("UserName");
let Duration = player.GetVar("Time"); 
let Score = player.GetVar("Results") // Replace "UserFeedback" with your Storyline Variable.

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body:JSON.stringify({text1:Name,text2:Duration,text3:Score}) 
});
}


let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "username" : "TenZ",
    "name" : "Tyson Ngo",
    "picture_src" : "tenz.png",
    "color" : "#0f1924",
    "agents" : ["Reyna", "Jett", "Raze"]
  },
  {
    "username" : "ShahZam",
    "name" : "Shahzeb Khan",
    "picture_src" : "shahzam.png",
    "color" : "#14202e",
    "agents" : ["Sova", "Jett"]
  },
  {
    "username" : "SicK",
    "name" : "Hunter Mims",
    "picture_src" : "sick.png",
    "color" : "#182738",
    "agents" : ["Raze", "Phoenix", "Sova", "Sage"]
  },
  {
    "username" : "zombs",
    "name" : "Jared Gitin",
    "picture_src" : "zombs.png",
    "color" : "#14202e",
    "agents" : ["Astra", "Viper", "Omen"]
  },
  {
    "username" : "dapr",
    "name" : "Michael Gulino",
    "picture_src" : "dapr.png",
    "color" : "#0f1924",
    "agents" : ["Cypher", "Sage", "Sova", "Viper"]
  }

];


for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['username'];
  newContentElement.appendChild(newContentHeading);

  let newContentName = document.createElement("H5");
  newContentName.classList.add('contentName');
  newContentName.innerText = incomingJSON['name'];
  newContentElement.appendChild(newContentName);

  let newImage = document.createElement("IMG");
  newImage.classList.add("playerImage");
  newImage.src = incomingJSON['picture_src'];
  newContentElement.appendChild(newImage);


  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "Played Agents:";
  newContentElement.appendChild(newContentSubhead);

  let newContentAgentList = document.createElement("UL");
  newContentElement.appendChild(newContentAgentList);

  for (var i = 0; i < incomingJSON['agents'].length; i++) {
    var currentAgentString = incomingJSON['agents'][i];
    var newAgentItem = document.createElement("LI");
    newAgentItem.innerText = currentAgentString;
    newContentAgentList.appendChild(newAgentItem);
  }
  contentGridElement.appendChild(newContentElement);

}


const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue
    },
    {
        topic: 'Food',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue
    }
]


// Tile create
function makeTile(colorV,tileV){
    const cardRow = document.querySelector(".card-row");
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");
    cardDiv.setAttribute("id",tileV);
    cardDiv.style = "background-color:" + colorV;
    cardRow.appendChild(cardDiv);
    return cardDiv;
}


// Topic create
function makeTopic(topicV){
    const cardWrap = document.querySelector(".card");
    const topicDiv = document.createElement("div");
    topicDiv.setAttribute("class", "topic");
    topicDiv.innerText = topicV;
    cardWrap.appendChild(topicDiv);
    return topicDiv
}



// Title create
function makeTitle(titleV){
    const cardWrap = document.querySelector(".card");
    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("class","title");
    titleDiv.innerText = titleV;
    cardWrap.appendChild(titleDiv);
    return titleDiv
}

// Button create
function makeButton(buttonV){
    const cardWrap = document.querySelector(".card");
    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class","buy-button");
    buttonDiv.innerText = buttonV;
    cardWrap.appendChild(buttonDiv);
    return buttonDiv;
}

// Repeat tile & Data insert to each function

for(let i=0; i < data.length ; i++) {
    function createCard(){
        // Backgroundcolor & Id
        const colorV = data[i].color;
        const tileV = "card" + i;
        const cardDiv = makeTile(colorV,tileV);

        // Topic
        const topicV = data[i].topic;
        const topic = makeTopic(topicV);
        // Title
        const titleV = data[i].title;
        const title = makeTitle(titleV);
        // Button
        const buttonV = "Read for "+ data[i].price;
        const button = makeButton(buttonV)

        // Define location
        cardDiv.appendChild(topic);
        cardDiv.appendChild(title);
        cardDiv.appendChild(button);

        return cardDiv;
    }

    const cardRow = document.querySelector(".card-row");
    cardRow.appendChild(createCard());
}





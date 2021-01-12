function rpsGame(yourChoice) {
    console.log(yourChoice);

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberChoice(randToRps());
    console.log(botChoice);
    var result = Winner(humanChoice, botChoice);
    console.log(result);

    var message = finalMsg(result);
    console.log(message);
    rpsFrntImg(yourChoice.id, botChoice, message);

    startTimer();

}



var randToRps = () => {
    return Math.floor(Math.random() * 3)
}

var numberChoice = (num) => {
    return ['rock', 'paper', 'scissors'][num]
}

var Winner = (yourchoice, compchoice) => {
    var rpsdb = {

        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    };
    var yourscore = rpsdb[yourchoice][compchoice]
    var compscore = rpsdb[compchoice][yourchoice]

    return [yourscore, compscore];
}

//Return the message function

var finalMsg = ([yourscore, compscore]) => {
    if (yourscore === 0) {
        return { 'message': 'HAHA You Lost!!', 'color': 'red', 'pic': "<img  src='https://wprock.fr/wp-content/themes/wprock-theme/img/emoji/joypixels/512/1f62b.png' width=200px>" };
    } else if (yourscore === 0.5) {
        return { 'message': 'You tied!!', 'color': 'yellow', 'pic': "<img  src='https://wprock.fr/wp-content/themes/wprock-theme/img/emoji/joypixels/512/1f9d0.png' width=200px>" };

    } else {
        return { 'message': 'Yes,You Win Blaa Blaa!!', 'color': 'green', 'pic': "<img  src='https://wprock.fr/wp-content/themes/wprock-theme/img/emoji/joypixels/512/1f60e.png' width=200px>" };
    }
}

//player screen message


var rpsFrntImg = (humanImageChoice, botImageChoice, finalMsg) => {
        var imgdb = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src
        }


        // Remove other images


        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();



        var humanDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        var msgDiv = document.createElement('div');



        humanDiv.innerHTML = "<img src='" + imgdb[humanImageChoice] + " ' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
        msgDiv.innerHTML = "<h1 style='color:" + finalMsg['color'] + ";font-size:60px;padding:30px;'>" + finalMsg['message'] + finalMsg['pic']
        "</h1> "

        botDiv.innerHTML = "<img src='" + imgdb[botImageChoice] + " ' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"

        document.getElementById('flex-rps').appendChild(humanDiv)
        document.getElementById('flex-rps').appendChild(msgDiv)
        document.getElementById('flex-rps').appendChild(botDiv)


    }
    //Timer Function added


function startTimer() {
    let time = 0;
    let timer = setInterval(() => {
        if (time > 59) {

            clearInterval(timer);

        } else {

            document.getElementById('time').innerHTML = time;
            time++;
        }

    }, 1000);
}
const Discord = require("discord.js");
const client = new Discord.Client();
const quiz = require("./quiz.json");
const fs = require('fs');

client.on("ready", () => {
    console.log("봇이 실행됨!");
})

client.on('message', (message) => {
    if(message.content === '똥') {
        message.reply('으악 강아지똥을 밟았다!!');
    }
});

client.on('message', (message) => {
    if(message.content === '강아지') {
        message.reply('으악 강아지똥을 밟았다!!');
    }
});

client.on('message', (message) => {
    if(message.content === '야') {
        message.reply('호!');
    }
});

client.on('message', (message) => {
    if(message.content === '상점') {
        message.reply('||쓸때 없는 기념품(5000원)|| ||보면 배고파지는 먹방유튜브(10000원)|| ||엄청 오래되 보이는 10원(15000원)| |사기당하기(20000원)| |구리덩어리(25000원| |금덩어리(30000원)| |이건뭐냐(500000원)|');
    }
});

client.on('message', (message) => {
    if(message.content === '안녕') {
        message.reply('https://tenor.com/view/cat-ghost-float-gif-17033763');
    }
});

client.on('message', (message) => {
    if(message.content === 'ㅎㅇ') {
        message.reply('https://tenor.com/view/halloween-costume-spongebob-ghost-gif-12769004');
    }
});

client.on('message', (message) => {
    if(message.content === '마크') {
        message.reply('따봉~');
    }
});


client.on('message', (message) => {
    if(message.content === '야 돈내놔') {
        message.reply('야돈~~');
    }
});

client.on('message', (message) => {
    if(message.content === '이게') {
        message.reply('ㅋ');
    }
});

client.on('message', (message) => {
    if(message.content === '포나') {
        message.reply('짱!');
    }
});

client.on('message', (message) => {
    if(message.content === '롤') {
        message.reply('짱짱!!');
    }
});

client.on('message', (message) => {
    if(message.content === '무') {
        message.reply('야!');
    }
});

client.on('message', (message) => {
    if(message.content === '사탕줘') {
        message.reply('ㅅㄹ');
    }
});

client.on('message', (message) => {
    if(message.content === '사탕줘') {
        message.reply('https://tenor.com/view/%E3%83%91%E3%83%8B%E3%83%83%E3%82%AF-%E9%A9%9A%E3%81%8F-%E3%83%93%E3%83%83%E3%82%AF%E3%83%AA-%E5%A4%89%E9%A1%94-%E3%82%AD%E3%83%A2%E3%82%AB%E3%83%AF-gif-15781976');
    }
});

client.on('message', (message) => {
    if(message.content === '호') {
        message.reply('무!');
    }
});

client.on('message', (message) => {
    if(message.content === '옵치') {
        message.reply('짱!');
    }
});

client.on('message', (message) => {
    if(message.content === '???') {
        message.reply('???:이름검정색으로 바꿔줘');
    }
});

client.on('message', (message) => {
    if(message.content === '7패치') {
        message.reply('버그수정 및 용돈뽕맛');
    }
});



client.on('message', (message) => {
    if(message.content === '가상계좌') {
        message.reply('가상계좌 5000당 진짜 지갑 1000이야');
    }
});

client.on('message', (message) => {
    if(message.content === '가상계좌바꿔줘') {
        message.reply('네 3일안에 끝내드리겠습니다');
    }
});

client.on('message', msg => {
    if(msg.author.bot) return;
    if(msg.author.id === client.user.id) return;

    const id = msg.author.id;
    const name = msg.author.username;

    const filePath = `./date/${id}.json`;

    !fs.existsSync(filePath) ? fs.writeFileSync(filePath, JSON.stringify({})) : null;
    
    const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const today = new Date();
    const date = "" + today.getFullYear() + today.getMonth() + today.getDate();

    const howMuch = 5000;

    if(msg.content === "용돈줘"){
        let saveUser = {};
        if(user.id) {
            if(user.date === date) {
                msg.reply('이미 받았는뒈?');
                saveUser = user;
            }
            else {
                msg.reply(`${howMuch}원 두둑히 줬다(?)\n${name}의 현재 잔액은 ${user.muney} -> ${user.money} -> ${user.money + howMuch}임`);
                saveUser = {

                    id : id,
                    name : name,
                    date : date,
                    money : user.money + howMuch,
                }
            }

        }
        else {
            msg.reply(`${name}!! 시작하는걸 환영해! ${howMuch}원이 지급됐어!`);
            saveUser = {id, name, date, money : howMuch};
          }
      
          fs.writeFileSync(filePath, JSON.stringify(saveUser));
        }
      
        if(msg.content === "내 지갑"){
          user.id ? msg.reply(`${name}의 현재 잔액은 ${user.money}이야!`) : msg.reply(`등록되지 않은 유저야! 용돈줘를 입력해봐!`);
        }
      
      
    

    
});




//무야호!
client.on("message", (message) => {
    if(message.author.bot) return;
    if(message.author.id === client.user.id) return;
    if(message.content === "무야호!") { 
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const limit = 2; // 제한시간

        const filter = (response) => {
            console.log(item.answer.some((answer) => answer === response.content));
            return item.answer.some((answer) => answer === response.content);
        }

        message.channel.send(`${item.question} (제한시간 : ${limit} 초)`)
        .then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: limit * 1000})
            .then((collected) => {
                message.channel.send(`${collected.first().author} https://tenor.com/view/it-clown-pennywise-gif-14640320`);
            })
            .catch((err) => {
                message.channel.send("ㅋhttps://tenor.com/view/ghost-animation-gif-3563378")
            })
        })
    }

})

client.on('message', msg => {
    if(msg.author.bot) return;
    if(msg.author.id === client.user.id) return;

    const id = msg.author.id;
    const name = msg.author.username;

    const filePath = `./data/${id}.json`;

    !fs.existsSync(filePath) ? fs.writeFileSync(filePath, JSON.stringify({})) : null;
    
    const user = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const today = new Date();
    const date = "" + today.getFullYear() + today.getMonth() + today.getDate();

    const howMuch = 5000;

    if(msg.content === "용돈줘2"){
        let saveUser = {};
        if(user.id) {
            if(user.date === date) {
                msg.reply('이미 받았는데?');
                saveUser = user;
            }
            else {
                msg.reply(`${howMuch}원 두둑히 줬다(?)\n${name}의 현재 잔액은 ${user.muney} -> ${user.money} -> ${user.money + howMuch}임`);
                saveUser = {

                    id : id,
                    name : name,
                    date : date,
                    money : user.money + howMuch,
                }
            }

        }
        else {
            msg.reply(`${name}!! 가상계좌에 온걸 환영해! ${howMuch}원이 지급됬어`);
            saveUser = {id, name, date, money : howMuch};

        }
        fs.writeFileSync(filePath, JSON.stringify(saveUser));
    }
    if(msg.content === "내 지갑2"){
        user.id ? msg.reply(`${name}의 가상 돈은 ${user.money}임`) : msg.reply('등록해야돼 등록할려면 용돈줘2를 입력해');

    }
});
   
   


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  const convertEmoji = (who) => {
    if(who === "가위"){
      return "🤘";
    }
    else if(who === "바위"){
      return "👊";
    }
    else if(who === "보"){
      return "✋";
    }
    else if(who === "도박장"){
        return "가위시 성공/바위시 실패/보나올시 0원";
    }

  }
  client.on('message', msg => {
    if(msg.content === "7테스트"){
      msg.reply("msg정의에러 때문에 임시로 만듦");
    }
  
    if(msg.content === "가위" || msg.content === "바위" || msg.content === "보" || msg.content === "도박장") {
      const human = msg.content;
      const list = ["가위", "바위", "보", "도박장"];
      const random = Math.floor(Math.random() * 3);
      const bot = list[random];
      let winner = "";
  
      if(human === bot) {
        winner = "비김";
      }
      else {
        human === "가위" ? (winner = bot === "바위" ? "봇" : "인간") : "";
        human === "바위" ? (winner = bot === "보" ? "봇" : "인간") : "";
        human === "보" ? (winner = bot === "가위" ? "봇" : "인간") : "";
        human === "도박장" ? (winner = bot === "보" ? "봇" : "인간") : "";
      }
  
      const result =
  `
  사람 : ${convertEmoji(human)} vs 봇 : ${convertEmoji(bot)}
  ${winner === "비김" ? "앗" : winner + "이김"}
  `
      msg.reply(result);
    }

  
  });
  
  client.on("message", (message) => {
    if(message.content.substring(0,3) === "!투표") {
        
        const description = message.content.substring(3);

        const embed = new Discord.MessageEmbed()
        .setTitle("빨랑골라")
        .setDescription(description)
        .setColor("RED");

        message.channel.send(embed)
        .then((msg) => {
            msg.react("👍") 
        });

    }
})
  
client.login("ODU4NjMzNTk2MDc5MTc3NzU4.YNg-2Q.TJOEdgY4bUj1QKgGRykzSzD1LmE");
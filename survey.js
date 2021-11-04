const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
require('process');

rl.question('What\'s is your name? Nicknames are also acceptable :) ', (answer0) => {
  console.log(`Your name is ${answer0}.`);

  rl.question('What\'s an activity you like doing? ', (answer1) => {
    console.log(`You enjoy ${answer1}.`);

    rl.question('What do you listen to while doing that? ', (answer2) => {
      console.log(`You listen to ${answer2}.`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer3) => {
        console.log(`Your favourite meal is ${answer3}.`);

        rl.question('What\'s your favourite part of that meal? ', (answer4) => {
          console.log(`Your favourite part of that meal is ${answer4}.`);

          rl.question('Which sport is your absolute favourite? ', (answer5) => {
            console.log(`Your favourite sport is ${answer5}.`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer6) => {
              console.log(`Your superpower is ${answer6}.`);

              rl.question('Are you ready for your results? ', (answer7) => { 
                if (answer7.match(/^y(es)?$/i)) 
                console.log(`Your name is ${answer0}. You enjoy ${answer1}. You listen to ${answer2}. Your favourite meal is ${answer3}. Your favourite part of that meal is ${answer4}. Your favourite sport is ${answer5}. Your superpower is ${answer6}.`);
              });  
            });
          });
        });
      });
    });
  });
});




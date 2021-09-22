const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What's your name? Nicknames are also acceptable  :", (name) => {
  rl.question("What's an activity you like doing?  :", (activity) => {
    rl.question("What do you listen to while doing that?  :", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)   :", (meal) => {
        rl.question("What's your favourite thing to eat for that meal   :", (food) => {
          rl.question("Which sport is your absolute favourite?   :", (sport) => {
            rl.question("What is your superpower? \n In a few words, tell us what you are amazing at!   :", (superpower) => {
              console.log(`My Profile: \n My name is : ${name} \n I like to listen ${music} while doing ${activity} \n I like to get some ${food} on ${meal} , espessially after ${sport} \n And after all my superpower is : ${superpower}`)
              rl.close()
            })
          })
        })
      })
    })
  })
})


// Instead of asking the user about what they think of Node.js, we can ask them the following questions, in order:

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!



// Task :
// 1. let's create a quick survey app which asks the user a bunch of questions like their favourite music, activity, food, sport, etc. It will then generate a profile description for them to use online, like the example demonstrated above .Since we'll be surveying the user, we need a nice way to ask questions and fetch answers.


// 2. Once all questions are answered, our survey app should output a fully formed paragraph for their online profile, similar to the one shown previously. It should then exit. The user would have to rerun the app to go through the process of generating another profile.
// SAMPLE OUTPUT :
// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.



// The following simple example illustrates the basic use of the readline module.
// The .question(query, callback) function: 

// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

// const rl = readline.createInterface({ input, output });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });


/////Here is STDIN AND STDOUT: 

// // input
// process.stdin.on('data', (key) => {
//   process.stdout.write('.');
// });
// console.log('after callback');

// // output
// stdin.on('data', (key) => {
//   process.stdout.write('.');

//  if (key === '\u0003') {
//     process.exit();
//   }
// });
// console.log('after callback');
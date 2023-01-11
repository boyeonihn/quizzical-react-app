# Quizzical React App
## About the Project
**Link to project:** https://zippy-sfogliatella-8e3383.netlify.app/

- A Quizzical Web App that presents 5 multiple-choice trivia questions on Mythology that range in terms of difficulty (easy, medium, hard). 
- This was the final solo project required to complete as part of Scrimba's [React course](https://scrimba.com/learn/learnreact). A Figma design file was provided to present the design and functional requirements of the app, and the app was created from scratch.

## How It's Made:
**Tech used:** Javascript, React, React Hooks (i.e., useEffect, useState), HTML, CSS

I built this Quizzical web app by utilizing the [Open Trivia Database API](https://opentdb.com/). The following Quizzical app features several functions:
- A main "start" page, which then transitions to the quiz page once "start" button is clicked
- The quiz generates five multiple choice trivia questions on Mythology
- Once the user clicks on an answer choice, this is denoted by a change in color rendering
- Upon submitting the answers, the web app presents questions that were answered correctly and incorrectly 

## Lessons Learned:
### Manipulating the data received from the Open Trivia Database API
- The original data received from the API contained special characters such as ?, &, " that were not displaying correctly upon App rendering. Upon some browsing and searching on the internet, I found a HTML decoder library that prevents this error from taking place. 
- Furthermore, the API data was formatted so that each question had a 'correct_answer' and 'incorrect_answers' property. In order to prevent all the questions from having the first option as the same answer (i.e. all the questions' correct answer being option A), I completed two steps. Firstly, I combined the 'correct_answer' and 'incorrect_answers' values in one array. Then, utilizing a shuffle function, I made sure each question had a different shuffled order of answer choices. 

### Other lessons learned
- The importance of including a dependency array within the useEffect hook to prevent a function from running on an infinite loop
- Making sure I create git commits in smaller, manageable units with clear and concise messages so that when I need to revert or reset to a previous commit, I know exactly where to look

## Optimizations
Once I have more time beyond my current projects, I would like to work on the following to optimize my app: 
- Make the overall design more responsive across different browser devices
- I am currently still working on having the score of questions answered correctly being rendered 


## Examples:
Take a look at these couple examples that I have in my own portfolio:

**LUNA LOGISTICS:** https://github.com/boyeonihn/luna-logistics-website

**Dog Wisdoms:** https://relaxed-entremet-c40b40.netlify.app/

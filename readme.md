Introduction
---
Hi, I'm Ian Jason C. Etruiste and this is my submission for the technical assessment.

For this assessment, I used React.js and created an App with a simple home page where you can find a link going to Exercise 1 and Exercise 2

I deployed my work online, you can check it out here : https://etruiste-frontend-assessment.firebaseapp.com

If you would like to run this app on your local, you can follow these steps :
1. Make sure you have Node installed and the version should be v20 (I specifically used v20.9.0 but you can use any version under v20)
2. Clone the repository, go to your preferred folder then run the command `git clone git@github.com:IaanMoo/frontend-assessment.git` , After cloning go to the folder that was created by typing `cd frontend-assessment`
3. run `npm install`
4. Once your done installingg the dependencies, run `npm run start`, wait for your terminal to finish loading and it should automatically open the app in your default browser.

Exercise 1
---
* For Exercise 1, you can find the code by going to the path `src/Pages/exercise1`, take note that the images are saved in `src/Assets/exercise1`

Exercise 2
---
* For Exercise 2, you can find the code by going to the path `src/Pages/exercise2`


###### Bonus points
* For the bonus points I added a little bit of my style specially for Exercise 2 and exhibit how something so simple can look amazing.
* For the answer on why `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana` , this is because  `+ + 'a'` is then converted to `+(+'a')` and since `'a'` is not a number it returns NaN which means `"Not a Number"`, that explanation might be confusing, let me simplify it further, let's say you create a variable with a value of 5 `const value = 5` your saying that the value is positive 5, you can actually also type it like this `const value = +5` this is called a unary operator, we don't usually see this except for when we give a number a negative value like `const value = -5`, and that's my answer to that, hope that was clear.


Hope you liked it. Thank you

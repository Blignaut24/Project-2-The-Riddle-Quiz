# The Riddle Quiz

Welcome to The Riddle Quiz! This is an exciting one-player game that will challenge your problem-solving skills as you solve ten tricky riddles. Built using JavaScript, this game was created for the Milestone 2 Project for the Full Stack Diploma with the Code Institute. Are you ready to put your mind to the test? Give The Riddle Quiz a try!

**Check out the finished website: [The Riddle Quiz.](https://blignaut24.github.io/Project-2-The-Riddle-Quiz/index.html)**

![1689239003455](image/README/1689239003455.png)

---

## **User Experience (UX)**

---

### **Initial Discussion**

The Riddle Quiz is perfect for those looking to pass the time, improve their puzzle-solving skills, and avoid becoming addicted to a pointless mobile game. The game is easy to play and provides a thrilling experience as users attempt to solve the puzzles.

### Key Information

* Count the number of correct answers out of ten.
* Display a progress bar to show the player's progress.
* Detail the rules of the game before beginning the quiz.
* Create a page to display the high scores achieved by players.
* Use a multiple-choice answer format.

### **User Stories**

First Time Visitor Goals

* The game should be viewable on various devices.
* The quiz instructions should be easy to understand.
* The app navigation should be user-friendly.
* A simple heads-up display (HUD) should be used for the quiz.

Returning Visitor Goals

* Access your high score page to track your performance.

Frequent Visitor Goals

* Use a mix of different quiz types.
* Avoid repeating riddles in the same order.

## **Design**

---

### **Color Scheme**

The game's colors are white, black, and blue. They were inspired by a newspaper puzzle, so they give the game a simple and clean look. These colors are often used in crossword puzzles and on newspaper pages. They aim to make players feel nostalgic for solving newspaper puzzles.

| Assignment          | Color Name    | Color Code |
| ------------------- | ------------- | ---------- |
| Primary             | White         | #ffff      |
| Secondary           | Black         | #000       |
| Tertiary            | Ruddy Blue    | #56b9eb80  |
| Correct Answer      | Pigment green | #28a745    |
| Incorrect Incorrect | Rusty red     | #dc3545    |

![1689242458818](image/README/1689242458818.png)

### Typography

Google Fonts was used to import the chosen fonts for use on the site. The following combination of typography was selected to create a classical, minimalist feel reminiscent of a newspaper.

| Font        | Style              | Role   |
| ----------- | ------------------ | ------ |
| Aboreto     | Regular 400        | Logo   |
| Montserrat  | ExtraBold 800      | H1     |
| Lora        | SemiBold600 Italic | H2     |
| Roboto Flex | Medium 500         | H3     |
| EB Garamond | Medium 500         | p      |
| Open Sans   | Regular 400        | button |

### Imagery

No imagery was used in the design, except for the favicon. This was done to maintain an elegant crossword puzzle feel as the design focal point.

### Wireframes

![1689242803348](image/README/1689242803348.png)

![1689242851176](image/README/1689242851176.png)

![1689242891627](image/README/1689242891627.png)

![1689242943839](image/README/1689242943839.png)

![1689242988964](image/README/1689242988964.png)

### Site Map

The Riddle Quiz has a flat site map for the following page:

* Landing Page: Displays the main menu to the user.
* Game Page: Features an interactive quiz game with a Heads-Up Display (HUD).
* End Page: Provides the user with a scorecard after ten riddles, along with a display menu.
* High scores Page: Displays the user's top five best performances.
* Rules Page: Provides the rules and information about the game to the user.

#### Assistive Technologies

##### Languages Used

HTML, CSS, Javascript

##### Frameworks, Libraries & Programs Used

* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.
* [Git](https://git-scm.com/) - For version control.
* [Github](https://github.com/) - To save and store the files for the website.
* [GitPod](https://gitpod.io/) - IDE used to create the site.
* [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.
* [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.
* [TinyPNG](https://tinypng.com/) To compress images
* [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

## Features

---

![1689245014631](image/README/1689245014631.png)

 The Heading

* The heading appears on the landing page above the main menu.
* It is styled to be attention-grabbing and its contents reflect the purpose of the site.
* This helps users understand what the site is about and creates a positive first impression.

The Main Menu:

* The landing page displays the main menu directly under the heading.
* It contains text to entice the user to take part in a quiz, as well as buttons to view the quiz rules or initiate a quiz.

Footer:

* Easily accessible social media networking links can encourage users to share news about The Riddle Quiz.

High Scores Page:

* This page records the top five scores of individual players.
* Its purpose is to motivate players to achieve higher scores and foster a sense of accomplishment.


## Accessibility

---

I have been mindful during coding to ensure that the website is as accessible friendly as possible. This has been have achieved by:

* Using a hover state on all buttons on the site to make it clear to the user if they are hovering over a button.

  ![1689243638876](image/README/1689243638876.png)

  ![1689243687697](image/README/1689243687697.png)

---

## Deployment & Local Development

---

### Deployment Instructions

The site was deployed using GitHub Pages through the following steps:

1. Go to the "Project-2-The-Riddle-Quiz" GitHub repository and click on "Settings".
2. Scroll down and click on the "Pages" tab.
3. In the dropdown menu, select "main" as the branch.
4. Click on "Save".
5. Refresh the page to view the deployed website link.

   ![1689238244188](image/README/1689238244188.png)

### Local Development - How to Fork

You can fork a repository through GitHub to create a copy of it and edit it without affecting the original. Follow these steps to fork a repository:

1. Go to the "Project-2-The-Riddle-Quiz" repository and click on the "Fork" button located in the top right corner.
2. Click on "Create Fork" to fork the repository.

![1689238337118](image/README/1689238337118.png)

### Local Development - How to clone

GitHub can be used to clone a repository, which creates a local copy of the repository on your computer. Follow these steps to clone a repository:

1. Go to the "Project-2-The-Riddle-Quiz" repository and select the "Code" tab, located just above the list of files and next to the Gitpod button.
2. From the dropdown menu, select "HTTPS".
3. Copy the URL provided under "HTTPS".
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be created.
6. Type "git clone" and paste the URL that was copied from the repository.
7. Press the "enter" key to create the clone.

   ![1689238471919](image/README/1689238471919.png)

---

## Testing

---

The testing process included a variety of tests divided into two categories: automated and manual testing. These tests were consistently conducted throughout the software development process to identify bugs and errors and ensure optimal functionality. To ensure that each page was responsive on different screen sizes and devices, Google Chrome Developer Tools and Firefox Inspector Tools were utilized.

## Automated Testing

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website. It was also used to validate the CSS.

* index.html- Passed.
* game.html- Passed.
* highscores.html- Passed.
* rules.html- Passed.
* end.html- No errors found. There is 1 warning regarding an empty heading that is used to display the score.
* style.css- Passed.

### **JavaScript Validator**

[jshint](https://jshint.com/) was used to validate the JavaScript.

* script.js - Passed, but four unused variables were identified. However, it appears that these variables are actually being used.
* highscores.js-Passed
* end.js- Passed, both the undefined variable and unused variable is required for the code to work.

### Lighthouse

Lighthouse was used within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

**Desktop Results**

* index.html
* game.html
* highscore.html
* rules.html
* end.html

**Mobile Results**

* index.html
* game.html
* highscore.html
* rules.html
* end.html

### Manual Testing

General

| Goals                                                         | How are they achieved?                                                                                                                                               |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Count the number of correct answers out of ten                | An easy-to-follow Head-Up Display (HUD) will indicate the correct number of questions, and an end-game summary page will display the final score.                    |
| Display a progress bar to show the player's progress.         | This appears in the Head-Up Display (HUD) as a blue bar.                                                                                                             |
| Detail the rules of the game before beginning the quiz.       | The rules and relevant quiz information are clearly set out on the Quiz Rules page.                                                                                  |
| Create a page to display the high scores achieved by players. | To see their high scores, players should go to the High Scores page. They can access this page by clicking on the link located on the main menu of the landing page. |
| Use a multiple-choice answer format.                          | A question is given with four answer choices to choose from.                                                                                                         |

First Time Visitors

| Goals                                                        | How are they achieved?                                                             |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| The game should be viewable on various devices.              | The responsive design was tested on the most popular screen devices.               |
| The quiz instructions should be easy to understand.          | The rules for the quiz are written in a short and easy-to-understand way.          |
| The app navigation should be user-friendly.                  | The app has a simple design that emphasizes an easy-to-use interface.              |
| A simple heads-up display (HUD) should be used for the quiz. | Users can quickly locate important performance data in the Heads-up Display (HUD). |

### Responsiveness

Full testing was performed on the following devices:

* Laptop:
  * Acer Swift SF314-57
* Mobile Device:
  * Samsung Galaxy A50
* Tables:
  * Samsung Galaxy Tab S6 Lite

Some of the screen sizes used for testing were:

Responsively App:

* Laptops & Desktops 1280x800
* Tablets768x1024
* Extra Large Screen 1025x1280
* Medium: Apple Ipad 768x1024
* Macbook Pro 1440x900

Google Chrome Devtools

* Extra Small Mobile 360x640
* Most of the Smartphone Mobiles 318x700
* Tablets, Ipads 1025x1280
* Desktop 1281x800

### Browser Compatibility

This site was tested on the following browser:

* Google Chrome
* Brave
* Firefox
* Microsoft Edge

I did not come across any problems on any of these browsers and the functionality and appearance remained consistent.

### Full Testing

index.html

| Feature        | Expected Outcome                                                                                                            | Testing Performed                                         | Result                 | Pass/Fail |
| -------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------- | --------- |
| Navigation Bar | The navigation bar is responsive.                                                                                           | The item was clicked on screens of different sizes.       | Performed as expected. | Pass      |
| Main Menu      | The buttons in the main menu respond well when clicked and are easy to read. The blue hover effect is functioning properly. | Hover over the main menu buttons on various screen sizes. | Performed as expected. | Pass      |
| Footer         | The footer adjusts to different screen sizes. If you click on the social media links, a new window will open for that site. | The item was clicked on screens of different sizes.       | Performed as expected. | Pass      |

game.html

| Feature                  | Expected Outcome                                                                                                                                                         | Testing Performed                                                                                                            | Result                 | Pass/Fail |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------- |
| Navigation Bar           | The navigation bar is responsive.                                                                                                                                        | The item was clicked on screens of different sizes.                                                                          | Performed as expected. | Pass      |
| Heads-Up-Display (HUD)   | The HUD is responsive, updates after every question and the information is easy to read.                                                                                 | I saw how the HUD changed the information when I answered questions on screens of different sizes.                           | Performed as expected. | Pass      |
| Multiple choice buttons. | When you move your cursor over a multiple-choice button, it looks like it's moving. After you pick an answer, the right one will be green and the wrong one will be red. | To see how the main menu buttons are displayed on different screen sizes, hover over them and select the applicable answers. | Performed as expected. | Pass      |
| Footer                   | The footer adjusts to different screen sizes. If you click on the social media links, a new window will open for that site.                                              | The item was clicked on screens of different sizes.                                                                          | Performed as expected. | Pass      |

end.html

| Feature           | Expected Outcome                                                                                                                                               | Testing Performed                                                                                                          | Result                 | Pass/Fail |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------- |
| Navigation Bar    | The navigation bar is responsive.                                                                                                                              | The item was clicked on screens of different sizes.                                                                        | Performed as expected. | Pass      |
| Finale Scoreboard | Show the score in a clear way on different screens.                                                                                                            | I was able to view the score easily on various device screens.                                                             | Performed as expected. | Pass      |
| Input box         | The input box is clearly visible and includes a visual aid to remind the user to enter a username. The Save button is only enabled once a username is entered. | The first time, I tried to save after typing in a username. The second time, I tried to save without typing in a username. | Performed as expected. | Pass      |
| Menu buttons      | The buttons in the menu buttons respond well when clicked and are easy to read. The blue hover effect is functioning properly.                                 | Hover over the main menu buttons on various screen sizes.                                                                  | Performed as expected. | Pass      |
| Footer            | The footer adjusts to different screen sizes. If you click on the social media links, a new window will open for that site.                                    | The item was clicked on screens of different sizes.                                                                        | Performed as expected. | Pass      |

highscores.html

| Feature          | Expected Outcome                                                                                                             | Testing Performed                                                 | Result                 | Pass/Fail |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------- | --------- |
| Navigation Bar   | The navigation bar is responsive.                                                                                            | The item was clicked on screens of different sizes.               | Performed as expected. | Pass      |
| Main Information | The top scores are updated and easy to read on different screen sizes.                                                       | After each quiz, I checked the score once it was saved.           | Performed as expected. | Pass      |
| Menu button      | The menu button responds well when clicked and is easy to read. Additionally, the blue hover effect is functioning properly. | I hovered over and clicked on the button on various device sizes. | Performed as expected. | Pass      |
| Footer           | The footer adjusts to different screen sizes. If you click on the social media links, a new window will open for that site.  | The item was clicked on screens of different sizes.               | Performed as expected. | Pass      |

rules.html

| Feature          | Expected Outcome                                                                                                              | Testing Performed                                                  | Result                 | Pass/Fail |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------- | --------- |
| Navigation Bar   | The navigation bar is responsive.                                                                                             | The item was clicked on screens of different sizes.                | Performed as expected. | Pass      |
| Main Information | The text information is responsive on different screen sizes and easy to read.                                                | Read the text on different screen sizes.                           | Performed as expected. | Pass      |
| Menu buttons     | The menu buttons respond well when clicked and are easy to read. Additionally, the blue hover effect is functioning properly. | I hovered over and clicked on the buttons on various device sizes. | Performed as expected. | Pass      |
| Footer           | The footer adjusts to different screen sizes. If you click on the social media links, a new window will open for that site.   | The item was clicked on screens of different sizes.                | Performed as expected. | Pass      |

Frequent Visitors

---

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website. It was also used to validate the CSS.

* index.html- Passed.
* game.html- Passed.
* highscores.html- Passed.
* rules.html- Passed.
* end.html- No errors found. There is 1 warning regarding an empty heading that is used to display the score.
* style.css- Passed.

### **JavaScript Validator**

[jshint](https://jshint.com/) was used to validate the JavaScript.

* script.js - Passed, but four unused variables were identified. However, it appears that these variables are actually being used.

---

# Credits

---

### Code used

As the JavaScript modules of the Code Institute Diploma did not cover local storage, I had to do a bit of research into this topic myself in order to set up the high scores section of my site.

* I used this [video tutorial](https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=9) on YouTube by [James Q Quick](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw) which taught me to save the team name and score to an object, that would then be saved into an array in local storage. It also explained how to sort the items in the array into descending score order, and then to splice the array, I have used the MAX_HIGH_SCORES as my point to splice.
* I used this [video tutorial](https://www.youtube.com/watch?v=jfOv18lCMmw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=10) on YouTube by [James Q Quick](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw) to learn how to insert the local storage into the high scores page.

### Content

* Notion AI generated a list of riddles.
* All other content is self produced.

### Media

* None

### Acknowledgements

* Lauren-Nicole - My Code Institute Mentor.
* Adegbenga Adeye - My Code Institute Mentor.

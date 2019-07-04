# Global White Shark Dashboard 

This data dashboard is designed to show the various types of attacks on humans by White Sharks globally over the a fifty year period between 1968 to 2018.
Some of these attacks have resulted in fatality with the largest number of attacks during this period occuring in the USA and involvolving Surfers. 

The dashboard is easy to use and interactive. The interactivity allows the user to drill down on a selection of sychronised pie and composite charts, 
stacked bar chart, table and bar graphs to obtain such details as year, type, country, fatality, sex and age of the victim. The data was obtained from 
"https://data.opendatasoft.com/explore/dataset/global-shark-attack", whish is a robust and API driven data website.

[https://robsimons1.github.io/global-white-shark-attack-dashboard/]

## UX

The original concept for the dashboard page can be seen in the *suppoting_docs folder* under *wireframe1_global_white_shark_attacks.png* (original idea) and 
*wireframe1_global_white_shark_attacks.png*, which is the latest idea for the structure of the dashboard.

## Features

### Existing Features

**Nav Bar –** 

**Header Image –**

### Features left to implement

## Technologies Used
The languages, frameworks, libraries and other tools utilised for building this data dashboard are:

*	**HTML 5 -** The dashboard uses HTML5 as a fundamental basis for building the website.

*	**CSS3 -** The website uses CSS3 for styling of all elements within the website. It is linked from the each page to the *style.css* file and is used for all content, including such as layout of color and background, images, video, audio etc.

*	**Bootstrap 3.7.6. -** The open-source Bootstrap framework has been used to implement some basic templates for forms, buttons and navigation. Bootstrap is also utilised to accommodate the responsive and mobile first design of the web page. [https://getbootstrap.com/]

*	**Cloud9 AWS (Amazon) -** Cloud9, a cloud-based integrated development environment (IDE) that has been used to write, run, and debug the code used for the website. [https://c9.io/rsimons]

*	**GitHub -** GitHub has been used for version control of the code by using Git functions in the control panel. Github was utilised frequently during the development of the website.  [https://github.com/]

*	**Font Awesome -** The website uses Font Awesome for certain icons (e.g. icons in the Nav Bar). [https://fontawesome.com/v4.7.0/icons/]

*	**Google Fonts-** The website uses Google fonts to accentuate certain text. [https://fonts.google.com/]

## Testing

Various methods of testing have been carried out to test the code of the website. Continuous testing throughout the development has been implemented to check the quality of the code. The aim is to check the functionality of the code on different devices (mobile, tablet, desktop) with an overall perspective of responsive and mobile first design.
The site has been viewed and tested in **Firefox**, **Safari**, **Chrome** and **Explorer**. The devices used to test the site are **iPhone 5/SE**, **Samsung Galaxy**, 
**iPad**, **iPad Pro** **iPhone X**, **iPhone 6/7/8**, **Hudle** and **Samsung laptop**. 

The wireframe for the Home page can be seen in the *supporting_docs folder* under *homepage_wireframe* and this was used initially to plan the site and build around. 
The opinions of numerous people were asked in the final stages of the project.

The main basic functions of the web site that required rigorous testing in different scenarios are listed below.

*	**Main Navigation** -

*	**Responsive / Mobile First design** -
    * All of the **Home**; **Shows/Videos**; **Gigs/Members**; **Contact**  pages have a **Header**; **Section** and **Footer**. These needed to display correctly accross 
      all devices and screen resolutions. primarily checks are required to ensure that the website collapses in to columns in mobile view and that the information is 
      presented in a clear and legible fashion.
    * The Sixth Row Logo in the heading was removed in tablet and mobile view in order to have the Nav Bar at the top of the page on all pages. This was done to provide a 
      better user experience and clarity of design.   

## Issue List

  | Issue  |                 Description                     |       Solution                      |  
  | ------ |:-----------------------------------------------:|:-----------------------------------:|
  |   1    | Used rows for Homepage that created too much free space when viewing on resposive devices | Amended rows to columns |
  |   2    | Audio players pushing margins out of sync | Amended max-width to 100% |
  |   3    | Logo took up too much space in responsive views | Changed display to none in media query below tablet resolution |
  |   4    | Videos too large in resolutions below tablet view | Added media query to amend video sizes below tablet views |
  |   5    | Images and videos not linking correctly | Utilised relative formatting for links |
  |   6    | 'Audioweb' font not legible in Safari browser | Changed font to 'Kanit' |
  |   7    | Bootstrap 'col-xs-10 col-sm-10' not allowing Home video to play | Removed from home video Div |
  |   8    | Too much space in mobile first margins | Decreased margin sizes |
  |   9    | Needed to validate HTML for debugging purposes | Utilised W3 Markup Validation Service |
  |   10   | Problem found during HTML validation with spaces in music and image file names | Replaced spaces with underscores and updated HTML |
  |   11   | Needed to validate CSS for debugging purposes | Utilised jigsaw.W3 CSS Validator |
  |   12   | -moz- ; -webkit- ; -o- showing as warnings in CSS validation | Left in CSS for viewing in different browsers |
  
## Deployment

The website is designed in the AWS Cloud9 environment and regularly commited and to GitHub after each crucial peice of coding. Using this method as a sanity check 
for the development enabled me to restore the site back to previous stages when it functioned correctly or easily find lost pieces of code. 

The Git process utilised is as follows:

  1. Local Cloud9 environment used to build the site 
  2. Commited files to the staging area 
  3. Pushed files to the working environment, which then updates the repository and is also viewable as a link [https://robsimons1.github.io/the_sixth_row/] for testing on other devices and screen resolutions

## Credits 

### Content

This README file is based on the Code Institute template.

### Media 

Shark and Surfer Image: https://usatunofficial.files.wordpress.com/2011/10/shark-in-a-wave-with-surfer.jpg

Data obtained from: https://data.opendatasoft.com/explore/dataset/global-shark-attack%40public-us/export/

Global Shark Attack: https://data.opendatasoft.com/explore/dataset/global-shark-attack%40public-us/table/

Dataset: global-shark-attack@public-us; http://www.sharkattackfile.net/incidentlog.htm

Opening Paragrapg Ref: https://www.cbsnews.com/pictures/five-most-dangerous-sharks-to-humans/

### Acknowledgments

Thank you to the Carcharodon Carcharias (White Shark) species whom I find so intriguing and awesome and the people at sharkattackfile.net for compiling such a 
huge and detailed dataset. I would like to thank Anthony Ngene (https://github.com/tonymontaro) for his invaluable feedback, as supervisor for this project. 

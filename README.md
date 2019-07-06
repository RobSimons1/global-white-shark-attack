# Global White Shark Dashboard 

This data dashboard is designed to show the various types of attacks on humans by White Sharks globally over the a fifty year period between 1968 to 2018.
Some of these attacks have resulted in fatality with the largest number of attacks during this period occuring in the USA and involvolving Surfers. 

The dashboard is easy to use and interactive. The interactivity allows the user to drill down on a selection of sychronised dropdown-selectors, pie charts, 
composite chart, stacked bar chart, table and bar graph to obtain such details as year, type, country, fatality, sex and age of the victim. The data was 
obtained from "https://data.opendatasoft.com/explore/dataset/global-shark-attack", which is a robust and API driven data website. This data is for information 
purposes and will hopefully help us better understand this amazing creatures psychology when it comes to human interactions.

The link for the dashboard is: 
*https://robsimons1.github.io/global-white-shark-attack-dashboard/*

## UX

In order to make the user experience as easy and enjoyable as possibe I opted for a simple Single-Page Application (SPA) dashboard that utilises various 
dropdown-selectors, pie charts, composite chart, stacked bar chart, table and bar graph. Also, headings, paragraphs and sentences that inform the user of 
certain facts and guide the user through the dashboard. Refresh buttons are located in the Navbar, Centre and Footer of the page, so that the user is 
able to navigate the osite and reset / control the site functionality. 

The original concept for the dashboard page can be seen in the *suppoting_docs folder* under *wireframe1_global_white_shark_attacks.png* (original idea) and 
*wireframe2_global_white_shark_attacks.png*, which is the latest idea for the structure of the dashboard. These were created in Balsamiq. There are numerous 
changes since wieframe1, mainly due to learning more about the capablities of d3.js, dc.js and crossfilter.  

The dashboard is aimed at at users who share an interest in sharks, particularly White Sharks and would like to see some easily accessible graphical 
data about White Shark attacks on humans. The user will be able to interactively use all of the dropdown-selectors pie charts, table and graphs. If 
sections of the charts are hovered over then the user will see a count of attacks relating specifically to that section (e.g. Country, Age Range). If the 
user clicks on any section of a chart (e.g. South Africa in the Country Pie Chart) then every other chart will synchroniously adjust to present corresponding 
data that relates to the section that was clicked. This can be done numerous times, with the user clicking on any of the charts sections to drill down 
into specific information that is required. Refresh Buttons are located in the Navbar, Centre and Footer of the dashboard that will reset all of the 
charts and table.

The information available to the user is:

* Two short informative paragraphs giving facts about the White Sharks attacks on humans, history and population.
* Year the attack took place. This is a fifty year range between 1968 - 2018.
* Type of attack. Whether this was provoked, unprovoked or involved a boat.
* Country the attack took place. In the last fifty years there have been recorded White Shark attacks in 19 different countries and the Atlantic Ocean.
* Activity that the victim was doing at the time of the attack.
* Sex of the victim.
* Age of the victim.
* Whether the attack was fatal or not.

## Features

### Existing Features

The choice of features, buttons, selectors, charts and table available to the user are:

* **Nav Bar –** Contains alternative title (50 Year Global White Shark Attacks Data Dashboard) of dashboard for use on smaller devices (e.g. iPhone). 
This is because the title and image below the Nav Bar does not show particularly well on smaller devices and elongates. The Nav Bar also has a 
"Refresh Charts" button that will reset all of the charts on the dashboard. Also, a short sentence describing how to control the dashboard is floated 
to the right of the Nav Bar stating "Hover or Click on Charts to select data for anaysis" to assist the user with the design functionality.   
* **Resfresh Charts Buttons-** "Refresh Charts" buttons are conveniantly located in the Nav Bar, Centre and Footer of the dashboard that will reset 
* the page and return the user to the position that they were located on the dashboard.
* **Header Image –**
* **Fatal Dropdown-Selector -** This allows the user to easily view 
* **Country Dropdown-Selector -**
* **Type Dropdown-Selector -**
* **Activity Dropdown-Selector -**
* **Country Pie Chart -**
* **Age Pie Chart -**
* **Fatality Pie Chart -**
* **Country and Year Composite Line Graph -**
* **Fifty Year Data Table -**
* **Type / Fatality Stacked Bar Chart -**
* **Activity Bar Chart -**
 

### Features left to implement

## Technologies Used
The languages, frameworks, libraries and other tools utilised for building this data dashboard are:

*	**HTML 5 -** The dashboard uses HTML5 as a fundamental basis for building the website. (mention semantic)

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

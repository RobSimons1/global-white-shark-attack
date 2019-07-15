# Global White Shark Dashboard 

This data dashboard is designed to show the various types of attacks on humans by White Sharks globally over a fifty year period between 1968 to 2018.
Some of these attacks have resulted in fatality with the largest number of attacks during this period occurring in the USA and involving Surfers. 
The highest recorded number of White Shark attacks during this period occurred in 2015.

The dashboard is easy to use and interactive. The interactivity allows the user to drill down on a selection of synchronised dropdown-selectors, pie charts, 
composite chart, stacked bar chart, table and bar graph to obtain such details as year, type, country, fatality, sex and age of the victim. The data was 
obtained from "https://data.opendatasoft.com/explore/dataset/global-shark-attack", which is a robust and API driven data website. This data is for information 
purposes and will hopefully help us better understand this amazing creatures psychology when it comes to human interactions.

The link for the dashboard is: 
*https://robsimons1.github.io/global-white-shark-attack-dashboard/*

## UX

In order to make the user experience as easy and enjoyable as possible I opted for a simple Single-Page Application (SPA) dashboard that utilises various 
dropdown-selectors, pie charts, composite chart, stacked bar chart, table and bar graph. Also, headings, paragraphs and sentences that inform the user of 
certain facts and guide the user through the dashboard. Refresh buttons are located in the Navbar, Centre and Footer of the page, so that the user is 
able to navigate the osite and reset / control the site functionality. 

The original concept for the dashboard page can be seen in the *supporting_docs folder* under *wireframe1_global_white_shark_attacks.png* (original idea) and 
*wireframe2_global_white_shark_attacks.png*, which is the latest idea for the structure of the dashboard. These were created in Balsamiq. There are numerous 
changes since wieframe1, mainly due to learning more about the capabilities of d3.js, dc.js and crossfilter.  

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

* **Nav Bar –** Contains homepage link and alternative title (50 Year Global White Shark Attacks Data Dashboard) of dashboard for use on smaller devices (e.g. iPhone). 
This is because the title and image below the Nav Bar does not show particularly well on smaller devices and elongates. The Nav Bar also has a 
"Refresh Charts" button that will reset all of the charts on the dashboard. Also, a short sentence describing how to control the dashboard is floated 
to the right of the Nav Bar stating "Hover or Click on Charts to select data for analysis" to assist the user with the design functionality.   
* **Refresh Charts Buttons-** "Refresh Charts" buttons are conveniently located in the Nav Bar, Centre and Footer of the dashboard that will reset 
the page and return the user to the position that they were located on the dashboard.
* **Header Title Image –** The image displays a surfer encountering a wave with the silhouette of a white shark travelling past. The image represents the 
the most common type of attack in the last fifty years, which are those that involve surfers. The image also displays the title of the dashboard which is 
designed in the colours of a White Shark (grey on top and white underneath). 
* **Fatal Dropdown-Selector -** This allows the user to easily view the count of fatalities, whether yes, no or unknown. If the user clicks
* on a Y, N or unknown, the entire dashboard will update to show information relating to that option.
* **Country Dropdown-Selector -** This allows the user to easily view the count of attacks in the all of the countries involved. If the user clicks
* on a specific country, the entire dashboard will update to show information relating to that country. 
* **Type Dropdown-Selector -** This allows the user to easily view the count of incident type from Boat, Invalid, Provoked and Unprovoked.
* **Year Dropdown-Selector -** This allows the to choose a specific year to analyse, which is not a function available by clicking on the composite chart. 
* **Activity Dropdown-Selector -** This allows the user to choose a specific activity that the victim was partaking in at the time of the attack.
* **Country Pie Chart -** This pie chart displays the countries in which the attacks have occurred and the number of attacks per country. If the user clicks
on a specific country, the entire dashboard will update to show information relating to that country.
* **Age Pie Chart -** This pie chart displays the ages of the victims that are split in to ten year ranges. The ranges were chosen to reduce the number of 
slices in the chart. If the user clicks on a specific age range, the entire dashboard will update to show information relating to that age range.
* **Fatality Pie Chart -** This pie chart allows the user to easily view the count of fatalities, whether yes, no or unknown in a graphical format.
* **Country and Year Composite Line Graph -** This chart allows the user to visualise the countries in which the attacks occurred and the year that they occurred
in. If the user hovers on any of the data points, the relative information will be be presented. A total line has been added to show the user the global total 
for each year in the fifty year period.
* **Fifty Year Data Table -** This table shows the user the attack events in a tabulated format. The attacks are shown in descending chronological order and the 
table displays all of the information that is available on the dashboard. The easy to use "Last" and "Next" buttons allow the user to browse through the data available.
The table is also interactive and will update in accordance with selections made in other charts.
* **Type / Fatality Stacked Bar Chart -** This stacked bar chart shows the Type of attack (e.g. Provoked, Unprovoked, Boat) and whether or not the attack resulted
in a fatality. The chart is interactive and will respond in accordance with sections clicked or other chart selections.
* **Activity Bar Chart -** This bar chart displays the specific activity that the victim was partaking in at the time of the attack. The chart is interactive and 
will respond in accordance with sections clicked or other chart selections. 
 

### Features left to implement

* Use entire "https://data.opendatasoft.com/explore/dataset/global-shark-attack" data that includes all types of shark and more details.

* Elaborate on Date and Time of day to see if there are any correlations.

* Connect dashboard directly to API. This was originally attempted, but proved too unmanageable when it came to trying to keep the dashboard looking simple.

## Technologies Used
The languages, frameworks, libraries and other tools utilised for building this data dashboard are:

*	**HTML 5 -** The dashboard uses HTML5 as a fundamental basis for building the dashboard. Where possible semantic HTML is used to give the viewer a better understanding.

*	**CSS3 -** The dashboard uses CSS3 for styling of all elements within the website. It is linked from the page to the *style.css* file and is used for all content, including such as layout of colours, navbar, background, images etc.

*	**Bootstrap 3.7.6. -** The open-source Bootstrap framework has been used to implement the layout of the dashboard. Bootstrap is also utilised to accommodate the responsive and mobile first design of the dashboard. https://getbootstrap.com/

* **JavaScript -** The dashboard uses Javascript to provide dynamic interactivity, as it is a full-fledged versatile programming language.

* **jQuery -** The dashboard uses jQuery, as it simplifies a lot of complicated tasks from JavaScript, such as AJAX calls and DOM manipulation. jquery.com/jquery-3.4.1

* **Crossfilter -** The graphs and charts on the dashboard are all linked using crossfilter, which manages the data behind the graphs and charts, allowing interaction with coordinated views and functioning. It synchronises all the charts when used.

* **DC.js -** The dashboard uses DC.js for data visualisation and analysis. 

* **D3.js -** The D3.js library allows manipulation of elements on the dashboard in the context of the dataset.

*	**Cloud9 AWS (Amazon) -** Cloud9, a cloud-based integrated development environment (IDE) that has been used to write, run, and debug the code used for the dashboard. https://c9.io/rsimons

*	**GitHub -** GitHub has been used for version control of the code by using Git functions in the control panel. Github was utilised frequently during the development of the dashboard.  https://github.com/

*	**Google Fonts-** The dashboard uses Google fonts to accentuate certain text. https://fonts.google.com/

## Testing

Various methods of testing have been carried out to test the code of the dashboard. Continuous testing throughout the development has been implemented to check the quality of the code. 
The aim is to check the functionality of the code on different devices (mobile, tablet, desktop) with an overall perspective of responsive and mobile first design.
The site has been viewed and tested in **Firefox**, **Safari**, **Chrome** **Microsoft Edge** and **Explorer**. The devices used to test the site are **iPhone 5/SE**, **Samsung Galaxy**, 
**iPad**, **iPad Pro** **iPhone X**, **iPhone 6/7/8**, **Pixel 2**, **Pixel 2 XL** **Hudle2** and **Samsung laptop**. 

The final desktop wireframe for the dashboard can be seen in the *supporting_docs folder* under *wireframe2_global_white_shark_attacks.png* and this was used initially to plan the dashboard and build around. 
The opinions of numerous people including chat forums were asked in the final stages of the project.

The main basic functions of the dashboard that required rigorous testing in different scenarios are listed below.

*	**Main Navigation** 
    * Hover mouse over all graphs and charts to ensure that they show the count of that particular section. Every pie-chart section and bar  or line should 
      function in this way.
    * Refresh chart buttons were tested to ensure that the user can refresh the page and where possible is returned to the nearest location that they were previously analysing.
    * Table `Last` and `Next` buttons were rigorously tested to ensure that they function correctly.
    * Once clicked the section of each graph or chart should be highlighted and all other graphs and charts and the table should conform and adjust to 
      to this selection. This feature was heavily tested so that the user can analyse specific information easily.
    * All of the drop down selectors were thoroughly tested so that they diplay the correct information.

*	**Responsive / Mobile First design** 
    * The dashboard page has a **Header**; **Main Section** and **Footer**. These needed to display correctly accross 
      all devices and screen resolutions. primarily checks are required to ensure that the dashboard collapses in to columns in mobile view 
      and that the information is presented in a clear and legible fashion.
    * The header image and title was removed in mobile view in order to have the Nav Bar at the top of the page. This was done to provide a 
      better user experience and clarity of design, as the image did not show well in a smaller view. 
    * The table was removed in mobile view as it did not present well in this view and the data was too small if the table is shrunk. 
      All of the data available in the table is also available in the graphs and charts.
    * The second paragraph was removed in tablet view, as this utilised too much space and did not present well in tablet view.

*	**Data** 
    * The data used for the dashboard was exported from https://data.opendatasoft.com/explore/dataset/global-shark-attack%40public-us/export/, 
      which also had the option of connecting directly to the API https://data.opendatasoft.com/explore/dataset/global-shark-attack%40public-us/api/, 
      but this proved unmanageable due to the variations of spellings, capitalisation, size and non-uniformity of the data set. I decided to instead 
      export the .csv file that was more manageable for the simplified data that I wanted to present. 

## Issue List



  | Issue  |                 Description                     |       Solution                      |  
  | ------ |:-----------------------------------------------:|:-----------------------------------:|
  |   1    |Attempted to connect dashboard directly to API but data proving unmanageable|Downloaded .csv file instead|
  |   2    |Unable to download export whole dataset due to issue with website |downloaded each year separately|
  |   3    |Issues with uniformity of the .csv data (e.g. spellings and capitalisation) |Amended these issues directly in .csv file|
  |   4    |Composite chart , Stacked bar chart and Bar graph not scaling correctly on smaller devices |Used viewbox resize to scale correctly |
  |   5    |Dates on Composite Chart X-axis displaying incorrectly (e.g. 1,985)|Function added to bottom of `show_country_year`  to correct this |
  |   6    |Attempted to use Age Range function that would separate the ages Pie Chart into ranges |This did not connect to other charts. Added Age range column to .csv file |
  |   7    |Queue, Crossfilter and and DC.js showing as ‘Undefined’ in main.js tab | `/*global varname*/` added to remove undefined variable errors |
  |   8    |Header image and title took up too much space in responsive views | Changed display to none in media query below tablet resolution |
  |   9    |”Next” and “Last” buttons did not work on Table |Event listener added to these buttons to globally rectify this |
  |   10   |Explorer displaying the charts which use viewbox resizing too small |Decided to leave this, as browser being phased out and rarely used |
  |   11   |Second intro paragraph did not fit on tablet size and was left in row alone | Removed from tablet view using media query |
  |   12   |Stacked bar chart did not read well when using percentages to diplay types of attacks that were fatal |Opted to use actual count as this was clearer|
  |   13   |Table not scaling correctly on smaller devices |Used media query to remove table from smaller devices |
  |   14   |Needed to validate CSS for debugging purposes | Utilised jigsaw.W3 CSS Validator (zero errors) |
  |   15   |Needed to validate JavaScript for debugging purposes | Utilised jshint.com (no errors) |
  |   16   |Needed to validate HTML for debugging purposes | Utilised W3 Markup Validation Service (1 warning) |
  |   17   |HTML Validation warning "Section lacks heading" | This warning can be ignored as does not affect code |
  |   18   |X-axis titles on Activities bar graph not displaying correctly in horizontal view |Used `text-anchor: end !important` in CSS to angle text |
  |   19   |Data in .csv file was causing more columns in graphs for the same variable (e.g. Body Boarding and Boogie Boarding) | Amended to .cvs variable names to make more uniform |
  |   20   |Header `Refresh Charts` button was not positioning correctly in Windows Edge | Used `float: inherit` in CSS to fix |
  |   21   |Is HTML semantic and self explanatory  | Added further comments to index.html file |
  |   22   |Is main.js self explanatory  | Added further comments to main.js file |

  
## Deployment

The dashboard is designed in the AWS Cloud9 environment and regularly committed and to GitHub after each crucial piece of coding. Using this method as a sanity check 
for the development enabled me to restore the site back to previous stages when it functioned correctly or easily find lost pieces of code. 

To deploy the project to Github the following steps were taken:

  1. created a `master` branch in Github repository 
  2. Used Local AWS Cloud9 environment used to build the site
  3. Committed files to the staging area using bash terminal commands: `git status`; `git add (specify directory)`; `git commit -m"add message"`
  4. Pushed files to the working environment using `git push`, which then updates the repository and is also viewable as a link https://github.com/RobSimons1/global-white-shark-attack-dashboard for testing on other devices and screen resolutions
  5. Published site from `master` branch using `settings` tab in the main page of the repository, select `source` as `master branch`, then `save`
  6. The repository can be cloned by clicking `Clone or Download` on the main page of the repository 
  7. In the Clone with HTTPs section, click the clipboard icon to copy the clone URL for the repository
  8. Open Git Bash Terminal
  9. Type `git clone`, and then paste the URL
  10. Press `Enter`. A local clone will be created.

## Credits 

### Content

This README.md file is based on the Code Institute template.

### Media 

CBS Interactive Inc.(2019): https://www.cbsnews.com/pictures/five-most-dangerous-sharks-to-humans/

Data obtained from: https://data.opendatasoft.com/explore/dataset/global-shark-attack%40public-us/export/

Dataset info for global-shark-attack@public-us; http://www.sharkattackfile.net/incidentlog.htm

Favicon image downloaded from: https://www.shutterstock.com/image-vector/dangerous-sea-life-207907852?studio=1

Favicon – created using http://www.favicomatic.com/done

Shark and Surfer Image: https://usatunofficial.files.wordpress.com/2011/10/shark-in-a-wave-with-surfer.jpg

### Acknowledgments

Thank you to the Carcharodon Carcharias (White Shark) species whom I find so intriguing and awesome and the people at sharkattackfile.net for compiling such a 
huge and detailed dataset. I would like to thank Anthony Ngene (https://github.com/tonymontaro) for his invaluable feedback, as supervisor for this project. 

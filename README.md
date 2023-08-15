**INSTALL:**

**React Nagivation**
https://reactnavigation.org/docs/getting-started

**React Maps**
https://docs.expo.dev/versions/latest/sdk/map-view/

**bottom tabs**
https://reactnavigation.org/docs/bottom-tab-navigator/

**APIs to use**
https://brottsplatskartan.se/sida/api
https://www.krisinformation.se/om-krisinformation/for-myndigheter-och-andra-aktorer/oppen-data

# Overview

# Shell scripting

## updateDate.sh

To keep track of the last revision date of specific files in the project, I have provided a simple utility script named updateDate.sh.

_Mark Files for Date Tracking:_
In any file you wish to track, add the following comment at the desired location:

`// Last Updated: YYYY-MM-DD`

_Run the Script:_
Whenever you've made changes and are ready to update the revision date, navigate to the project root in your terminal and run:

`./updateDate.sh`

This will automatically update the date in all marked files to the current date.

_Note_
Ensure the updateDate.sh script has execute permissions. If not, you can grant them using:

`chmod +x updateDate.sh`

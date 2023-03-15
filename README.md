# ees-announcements-scraper-v2

Scraper that gets the announcements from EES postgraduate programme of NTUA.

## Description
A Node.js package that scraps the **new** [EES site](https://technoeconomics.epu.ntua.gr/el/node/49) and retrieve the announcements of the programme.
This package is quite useful for thesis work or other academic projects.

## Usage

### Install
First install the package using npm:
```properties
npm install --save ees-announcements-scraper-v2
```

Then, require the package and use it like so:
```javascript
const eesScraperV2 = require('ees-announcements-scraper-v2');

var eesAnnouncements = eesScraperV2.getDetailedAnnouncements();

eesAnnouncements.then(function (results) {
  console.log("eesAnnouncements", results);
});
```

## Functions Documentation
### getTitleAnnouncements
Returns all announcements as an array of objects with the below details:
* title
* date
* link

### getDetailedAnnouncements
Returns all announcements as an array of objects with the below details:
* title
* content
* date
* link
* files

### getSpecificAnnouncementFromUrl
Returns specific announcement as a json object with the below details:
* title
* content
* files


### getSpecificAnnouncementFromBasicObject
Returns specific announcement as a json object with the below details:
* title
* content
* date
* link
* files

## License
GNU GPLv3
# ees-announcements-scraper-v2

[![NPM](https://nodei.co/npm/ees-announcements-scraper-v2.png?compact=true)](https://nodei.co/npm/ees-announcements-scraper-v2/)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/5e996492449e404d9cbec0ceaa80f718)](https://www.codacy.com/gh/yannisalexiou/ees-announcements-scraper-v2/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=yannisalexiou/ees-announcements-scraper-v2&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/ees-announcements-scraper-v2.svg)](https://badge.fury.io/js/ees-announcements-scraper-v2)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

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
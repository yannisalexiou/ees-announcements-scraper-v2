const cheerio = require("cheerio"); // Helps us scrap the HTML page
const fetch = require("node-fetch"); // Helps us make HTTP calls

// Link to the page we want to scrap
const domain = "https://technoeconomics.epu.ntua.gr";
const announcementsDirectory = "https://technoeconomics.epu.ntua.gr/el/node/49";

// Selectors
const allAnnouncementsSelector = "div.view-content";
const eachAnnouncementSelector = "div.views-row";
const titleSelector = "div.views-field.views-field-nothing>span>div>div.views-field-title";
const dateSelector = "div.views-field.views-field-created>span";

// Function to scrap the page
function retrieveAnnouncementsList(selector, html) {
    var $ = cheerio.load(html);

    var allAnnouncements = [];

    const listItems = $(allAnnouncementsSelector).find(eachAnnouncementSelector);
    listItems.each((i, li) => {
        var title = $(li).find(titleSelector).text();
        var date = $(li).find(dateSelector).text();
        var link = $(li).find(titleSelector+">").children('a').attr('href');
        link = domain + link;
        var eachItem = {title, date, link};
        allAnnouncements.push(eachItem);
    });
    
    return allAnnouncements;
}

async function requestTo(url) {
    try {
        const response = await fetch(url);
        const body = await response.text();
        return body;
    } catch (error) {
        return error;
    }
}

async function getAnnouncements() {
    let html = await requestTo(announcementsDirectory);

    var currentAnnouncements = retrieveAnnouncementsList(allAnnouncementsSelector, html);
    return currentAnnouncements;
}

module.exports = {
    getAnnouncements
}
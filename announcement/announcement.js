const cheerio = require("cheerio"); // Helps us scrap the HTML page
const fetch = require("node-fetch"); // Helps us make HTTP calls

const domain = "https://technoeconomics.epu.ntua.gr";

const announcementSelector = "div.region-content";
const announcementTitleSelector = "span.field--name-title";
const announcementContentSelector = "div>article>div>div.node--content.clearfix>div>div.clearfix.text-formatted.field.field--name-body.field--type-text-with-summary.field--label-hidden.field__item";

const fileListSelector = "div>article>div>div.node--content.clearfix>div>div.field.field--name-field-file.field--type-file.field--label-above>div.field__items>div.field__item";

  // Function to scrap the page
function retrieveAnnouncement(selector, html) {
    var $ = cheerio.load(html);
    var title = $(selector).find(announcementTitleSelector).text();
    var content = $(selector).find(announcementContentSelector).text();
    var filesItems = $(announcementSelector).find(fileListSelector);

    var files = [];
    filesItems.each((i, li) => {
        var name = $(li).find("a").text();
        var link = $(li).find("a").attr("href");
        link = domain + link;
        var eachFile = {name, link};
        files.push(eachFile);
    });


    var eachItem = {title, content, files};

    return eachItem;
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

async function getAnnouncement(url) {
    let html = await requestTo(url);

    var announcement = retrieveAnnouncement(announcementSelector, html);
    return announcement;
}

async function getAnnouncementFrom(url) {
    var announcement = await getAnnouncement(url);
    return announcement;
}

async function getAnnouncementFromObject(basicAnnouncementObject) {
    var announcement = await getAnnouncement(basicAnnouncementObject.link);
    
    var merged = {...basicAnnouncementObject, ...announcement};
    return merged;
}

module.exports = {
    getAnnouncementFrom,
    getAnnouncementFromObject
}
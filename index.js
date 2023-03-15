const directory = require("./announcement/directory");
const announcement = require("./announcement/announcement");

async function getTitleAnnouncements() {
    var announcementsArray = await directory.getAnnouncements();
    return announcementsArray;
}

async function getDetailedAnnouncements() {
    var announcementsArray = await directory.getAnnouncements();
    var detailedAnnouncementsArray = [];
    for (var i = 0; i < announcementsArray.length; i++) {
        var announcementObject = await getSpecificAnnouncementFromBasicObject(announcementsArray[i]);
        detailedAnnouncementsArray.push(announcementObject);
    }
    return detailedAnnouncementsArray;
}

async function getSpecificAnnouncementFromUrl(url) {
    var announcementObject = await announcement.getAnnouncementFrom(url);
    return announcementObject;
}

async function getSpecificAnnouncementFromBasicObject(obj) {
    var announcementObject = await announcement.getAnnouncementFromObject(obj);
    return announcementObject;
}

module.exports = {
    getTitleAnnouncements,
    getDetailedAnnouncements,
    getSpecificAnnouncementFromUrl,
    getSpecificAnnouncementFromBasicObject
};
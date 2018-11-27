'use strict';

const getElement = (arg) => {
	if (document.querySelector(`.${arg}`)) {
		return document.querySelector(`.${arg}`);
	} else if (document.querySelector(`#${arg}`)) {
		return document.querySelector(`#${arg}`);
	}
	return null;
};

const newElement = (type) => document.createElement(type);

const removeHtml = (arg) => {
	if (null != arg && (typeof arg === 'string' && arg.length > 0)) {
		return arg.replace(/<(?:.|\n)*?>/gm, '');
	}
	return null;
};

const clearElements = (el) => {	
	while(el.hasChildNodes()) {
		el.removeChild(el.firstChild);
	}
};

const clearElementsFrom = (el, from) => {	
	for (let i = from; i < childCount(el); i++) {
		let child = el.childNodes[i];
		el.removeChild(child);
	}
};

const addHandler = (el, event, handler) => el.addEventListener(event,handler);

const addAttribute = (el, attr, value) => el.setAttribute(attr,value);

const appendElement = (parent,child) => parent.appendChild(child);

const removeElement = (parent, child) => parent.removeChild(child);

const createTextNode = (str) => document.createTextNode(str);

const childCount = (parent) => parent.childElementCount;

const getInputElements = (parent) => {
	const inputs = [];	
	for (let i = 0; i< childCount(parent); i++) {
		let element = parent.childNodes[i];
		
		if (element.nodeName.toLowerCase() === 'input') {
			inputs.push(element);
		}
	}	
	return inputs;
};

const toRad = (n) => n * Math.PI / 180;

const toDeg = (n) => n * 180 / Math.PI;

const convertMs = ( milliseconds ) => {
    let day, hour, minute, seconds;
	
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
    };
};

/* Helper Functions */
const stripHtml = (arg) => arg.replace(/<(?:.|\n)*?>/gm, '');

/* 
	Calculate Distance Formula
	
dlon = lon2 - lon1
dlat = lat2 - lat1
a = (sin(dlat/2))^2 + cos(lat1) * cos(lat2) * (sin(dlon/2))^2
c = 2 * atan2( sqrt(a), sqrt(1-a) )
distance = R * c (where R is the radius of the Earth)
 
R = 6367 km OR 3956 mi 

function toRad(n) {
 return n * Math.PI / 180;
};

function toDeg(n) {
 return n * 180 / Math.PI;
};

var spots = {
    "Brandenburg Gate, Berlin": {latitude: 52.516272, longitude: 13.377722},
    "Dortmund U-Tower": {latitude: 51.515, longitude: 7.453619},
    "London Eye": {latitude: 51.503333, longitude: -0.119722},
    "Kremlin, Moscow": {latitude: 55.751667, longitude: 37.617778},
    "Eiffel Tower, Paris": {latitude: 48.8583, longitude: 2.2945},
    "Riksdag building, Stockholm": {latitude: 59.3275, longitude: 18.0675},
    "Royal Palace, Oslo": {latitude: 59.916911, longitude: 10.727567}
}
----------------

dlon = lon2 - lon1
dlat = lat2 - lat1
a = (sin(dlat/2))^2 + cos(lat1) * cos(lat2) * (sin(dlon/2))^2
c = 2 * atan2( sqrt(a), sqrt(1-a) )
distance = R * c (where R is the radius of the Earth)
 
R = 6367 km OR 3956 mi
-----------------

function distance(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var radlon1 = Math.PI * lon1/180
        var radlon2 = Math.PI * lon2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist
}
------------------

http://maps.googleapis.com/maps/api/geocode/json?latlng=44.4647452,7.3553838&sensor=true
------------------

http://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&sensor=true/false
    
    

*/
	
// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'

// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json')

console.log('🚀 It Works!');

/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */

// 📝 TODO: Number of filming locations
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber () {
	return filmingLocations.length
}
console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`)

// 📝 TODO: Filming locations sorted by start date, from most recent to oldest.
// 1. Implement the function
// 2. Log the first and last item in array
function sortFilmingLocationsByStartDate () {
	return filmingLocations.sort(function(loc1,loc2)
	{return new Date(loc1.fields.date_debut)- new Date(loc2.fields.date_debut);});
}
console.log(`Sorted Filming Locations By Start Date :`);
const filmsorted = sortFilmingLocationsByStartDate();
// Pour afficher tout
/*
for (let i=0; i<filmingLocations.length; i++)
{
	console.log(filmsorted[i]);
}
console.log('end');
*/
console.log("First : ");
console.log(filmsorted[0]); // pour afficher seulement le 1er
console.log("Last : ");
console.log(filmsorted[filmingLocations.length-1]); // afficher le dernier

// 📝 TODO: Number of filming locations in 2020 only
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result
function getFilmingLocationsNumber2020 () {
	let FilmIn2020 = [];
	for(let i=0; i<filmingLocations.length;i++)
	{
		if(filmingLocations[i].fields.annee_tournage == '2020')
		{
			FilmIn2020.push(filmingLocations[i]);
		}
	}
	return FilmIn2020.length;
}
console.log("Nombre de Films en 2020 : " + getFilmingLocationsNumber2020());

// 📝 TODO: Number of filming locations per year
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerYear () {
	var dictionary = {};
	for(let i =0; i<filmingLocations.length; i++)
	{
		if(dictionary[filmingLocations[i].fields.annee_tournage]!= null)
		{
			dictionary[filmingLocations[i].fields.annee_tournage] ++;
		}
		else
		{
			dictionary[filmingLocations[i].fields.annee_tournage]=1;
		}
	}
	return dictionary
}
console.log("Filming Locations per year (Year : Number): ")
var dictionary = getFilmingLocationsNumberPerYear();
for(var key in dictionary)
{
	console.log(key,":", dictionary[key]);
}

// 📝 TODO: Number of filming locations by district (arrondissement)
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerDistrict () {
	var dictionary = {};
	for(let i =0; i<filmingLocations.length; i++)
	{
		if(dictionary[filmingLocations[i].fields.ardt_lieu]!= null)
		{
			dictionary[filmingLocations[i].fields.ardt_lieu] ++;
		}
		else
		{
			dictionary[filmingLocations[i].fields.ardt_lieu]=1;
		}
	}
	return dictionary
}
console.log("Filming Locations per District (District : Number): ")
var dictionary = getFilmingLocationsNumberPerDistrict();
for(var key in dictionary)
{
	console.log(key,":", dictionary[key]);
}

// 📝 TODO: Number of locations per film, sorted in descending order
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmLocationsByFilm () {
	var dictionary = {};
	for(let i =0; i<filmingLocations.length; i++)
	{
		if(dictionary[filmingLocations[i].fields.nom_tournage]!= null)
		{
			dictionary[filmingLocations[i].fields.nom_tournage] ++;
		}
		else
		{
			dictionary[filmingLocations[i].fields.nom_tournage]=1;
		}
	}
	var arrobj = []
	for(var key in dictionary)
{
	arrobj.push({
		'film': key,
		'locations' : dictionary[key],
	});
}
	arrobj.sort(function(v1,v2){return v1.locations-v2.locations});
	return arrobj;
}
var arrobj = getFilmLocationsByFilm();
// Display everything
/*
for(let i =0; i<arrobj.length;i++)
{
	console.log(arrobj[i])
}
*/
console.log("First : " , arrobj[0]);
console.log("Last : " ,arrobj[arrobj.length-1]);

// 📝 TODO: Number of different films
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
	var films = new Set();
	for(let i=0;i<filmingLocations.length;i++)
	{
		films.add(filmingLocations[i].fields.nom_tournage);
	}
	return films.size;
}
console.log("Number of Films :",getNumberOfFilms());

// 📝 TODO: All the filming locations of `LRDM - Patriot season 2`
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations () {
	var filmLRDM = [];
	for(let i =0; i<filmingLocations.length; i++)
	{
		if(filmingLocations[i].fields.nom_tournage==`LRDM - Patriot season 2`)
		{
			filmLRDM.push(filmingLocations[i].fields.adresse_lieu);
		}
	}
	return filmLRDM;
}
var LRDM = getArseneFilmingLocations();
console.log("Filming Locations of LRDM - Patriot Season 2")
for (let i =0; i<LRDM.length; i++)
{
	console.log(LRDM[i])
}

// 📝 TODO: Tous les arrondissement des lieux de tournage de nos films favoris
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result

function getFavoriteFilmsLocations (favoriteFilmsNames) {
	let favorite = [];
	let set = new Set();
	for(let i =0; i<filmingLocations.length; i++) 
	{
		for(let j=0;j<favoriteFilmsNames.length;j++)
		{
			if(filmingLocations[i].fields.nom_tournage ==favoriteFilmsNames[j])
			{
				if(filmingLocations.indexOf(filmingLocations[i].fields.nom_tournage)==-1 && favorite.indexOf(filmingLocations[i].fields.ardt_lieu)==-1)
				{
					set.add(favoriteFilmsNames[j]+" : "+filmingLocations[i].fields.ardt_lieu);
				}
			}
		}
	}
	const setIter = set.values();
	for(let i=0; i<set.size; i++)
	{
		favorite.push(setIter.next().value);
	}
	return favorite;
}

const favoriteFilms =
	[
		'LRDM - Patriot season 2',
		'Alice NEVERS',
		'Emily in Paris',
	];

var fav = getFavoriteFilmsLocations(favoriteFilms);
console.log("arrondissement films favoris :")
for (let i=0; i<fav.length;i++)
{
	console.log(fav[i]);
}

// 📝 TODO: All filming locations for each film
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm () {
	let locfilms = {};
	for(let i =0; i<filmingLocations.length;i++) 
	{
		if(locfilms[filmingLocations[i].fields.nom_tournage]==undefined)
		{
			locfilms[filmingLocations[i].fields.nom_tournage]=[filmingLocations[i].fields.adresse_lieu];
		}
		else if(locfilms[filmingLocations[i].fields.nom_tournage].indexOf(filmingLocations[i].fields.adresse_lieu)==-1)
		{
			locfilms[filmingLocations[i].fields.nom_tournage].push(filmingLocations[i].fields.adresse_lieu);
		}		
	}
	return locfilms;
}
console.log(getFilmingLocationsPerFilm());

// 📝 TODO: Count each type of film (Long métrage, Série TV, etc...)
// 1. Implement the function
// 2. Log the result
function countFilmingTypes () {
	var dictionary = {};
	for(let i =0; i<filmingLocations.length; i++)
	{
		if(dictionary[filmingLocations[i].fields.type_tournage]!= null)
		{
			dictionary[filmingLocations[i].fields.type_tournage] ++;
		}
		else
		{
			dictionary[filmingLocations[i].fields.type_tournage]=1;
		}
	}
	var arrobj = []
	for(var key in dictionary)
	{
		arrobj.push({
			'type': key,
			'count' : dictionary[key],
		});
	}
	return arrobj;
}
console.log("count types :")
var arraytypes = countFilmingTypes();
for(let i=0; i<arraytypes.length;i++)
	{
		console.log(arraytypes[i]);
	}

// 📝 TODO: Sort each type of filming by count, from highest to lowest
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes () {
	let types = countFilmingTypes();
	types.sort(function(v1,v2){return v2.count-v1.count});
	return types
}
console.log("Sorted :")
var arraytypes = sortedCountFilmingTypes();
for(let i=0; i<arraytypes.length;i++)
	{
		console.log(arraytypes[i]);
	}

/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 * @param ms
 * @returns string
 */
const duration = (ms) => `${(ms/(1000*60*60*24)).toFixed(0)} days, ${((ms/(1000*60*60))%24).toFixed(0)} hours and ${((ms/(1000*60))%60).toFixed(0)} minutes`

// 📝 TODO: Find the filming location with the longest duration
// 1. Implement the function
// 2. Log the filming location, and its computed duration
function FindLongestDuration()
{
	let longestduration = 0;
	let longestfilmlocation = [];
	let actualDuration = 0;
	for(let i=0; i<filmingLocations.length;i++)
	{
		 actualDuration = new Date(filmingLocations[i].fields.date_fin) - new Date(filmingLocations[i].fields.date_debut);
		 if(actualDuration > longestduration)
		 {
			longestduration = actualDuration;
			longestfilmlocation =[filmingLocations[i].fields.adresse_lieu,duration(longestduration)];
		 }
	}
	return longestfilmlocation;
}
var longestfilm = FindLongestDuration();
console.log("longest film : ")
console.log("location : "+longestfilm[0]);
console.log("duration : "+longestfilm[1]);

// 📝 TODO: Compute the average filming duration
// 1. Implement the function
// 2. Log the result

function getAverageFilmDuration()
{
	let averageduration = 0;
	let actualDuration = 0;
	for(let i=0; i<filmingLocations.length;i++)
	{
		 actualDuration = new Date(filmingLocations[i].fields.date_fin) - new Date(filmingLocations[i].fields.date_debut);
		 averageduration = averageduration+actualDuration;
	}
	averageduration = averageduration/filmingLocations.length;
	return duration(averageduration);
}

var averagefilmduration = getAverageFilmDuration();
console.log("average film duration :",averagefilmduration);
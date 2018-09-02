/*jshint esversion: 6 */
console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json'); //loads the file
        return JSON.parse(noteString);

    } catch (err) {
        return [];
    }
};

var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes)); //saves the file
};
var addNote = (title, body) => {
    // console.log('Adding', title, body);
    var notes = fetchNotes(); //[]; previous
    var note = {
        title,
        body
    };
    //IN case notes-data.json get deleted we can use try and catch method
    // try {
    //     var noteString = fs.readFileSync('notes-data.json'); //loads the file
    //     notes = JSON.parse(noteString);

    // } catch (err) {

    // }
    var duplicateNotes = notes.filter((note) => note.title === title); //in this case duplicates or say unique unique titles are writen
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNote(notes);
        return note;
        // fs.writeFileSync('notes-data.json', JSON.stringify(notes)); //saves the file
    }
};
//this will work in case notes-data.json file Exist in the folder
// var noteString = fs.readFileSync('notes-data.json'); 
// notes = JSON.parse(noteString);
//console.log(notes); //To look for the object stored in the array
// notes.push(note);
// fs.writeFileSync('notes-data.json', JSON.stringify(notes));

var getAll = () => {
    return fetchNotes();
    // console.log('Getting all the Notes', title);
};
var readNote = (title) => {
    var notes = fetchNotes();
    var filter = notes.filter((note) => note.title === title);
    return filter[0];
    // console.log('Title is', title);
};
var rmvNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNote(filteredNotes);
    return notes.length !== filteredNotes.length;
    // console.log('Remove note', title);
};
var logNotes = (note) => {

    console.log('---');
    console.log(`Title:,${note.title}`);
    console.log(`Body:,${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    readNote,
    rmvNote,
    logNotes,
    titleFn
};
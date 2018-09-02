/*jshint esversion: 6 */
console.log('Starting App...');
const fs = require('fs');
const _ = require('lodash');
//const os = require('os');
const yargs = require('yargs');

const notes = require('./notes.js');

//**notes app */
const titleOption = {
    describe: 'Title of Note',
    demand: true,
    alias: 't' //'t' is a flag version of title i.e insted of --title in commandline we can use -t
};
const bodyOption = {
    describe: 'Body of Note',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOption,
        body: bodyOption
    })
    .command('list', 'List all the Notes')
    .command('read', 'Read the Note', {
        title: titleOption
    })
    .command('remove', 'Remove The Note', {
        title: titleOption
    })
    .help()
    .argv;
var command = process.argv[2];
console.log('Command', command);
//console.log('Process', process.argv);
console.log('Yargs', argv);
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note Created');
        notes.logNotes(note);
    } else {
        console.log('Title is Taken');
    }
    // console.log('Adding new Note');
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNotes(note));
    // console.log('Listning all Notes');
} else if (command === 'read') {
    var note = notes.readNote(argv.title);
    if (note) {
        console.log('Read the notes');
        notes.logNotes(note);
    } else {
        console.log('Note not found');
    }
    // console.log('Reading from the Notes');
} else if (command === 'remove') {
    var notesRemoved = notes.rmvNote(argv.title);
    var message = notesRemoved ? 'Notes was removed' : 'No notes found';
    console.log(message);
    // console.log('Remove the Notes');
} else {
    console.log('Command Not Recogonized');
}
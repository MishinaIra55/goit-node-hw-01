// const moduleContacts = require('./contacts');
const yargs = require("yargs");
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


const {listContacts, getContactById, addContact, removeContact} = require("./contacts");

// moduleContacts.listContacts();
// moduleContacts.getContactById(7);
// moduleContacts.removeContact(5);
// moduleContacts.addContact('Iryna', 'gortenzia@gmail.com', '063-077-11-62');



function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            console.table(listContacts());
            break;

        case "get":
            console.log(getContactById(id));
            break;

        case "add":
            console.log(addContact(name,email,phone));
            break;

        case "remove":
           console.log(removeContact(id));
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);
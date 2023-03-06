const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;


const {listContacts, getContactById, addContact, removeContact} = require("./contacts");


function invokeAction({action, id, name, email, phone}) {
    switch (action) {
        case "list":
            console.table(listContacts());
            break;

        case "get":
            console.log(getContactById(id));
            break;

        case "add":
            console.log(addContact(name, email, phone));
            break;

        case "remove":
            console.log(removeContact(id));
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);
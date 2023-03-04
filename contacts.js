//импорт модулей fs и path для работы с файловой системой
const path = require('path');
const fs = require('fs');

//Создай переменную contactsPath и запиши в нее путь к файлу contacts.json.
// Для составления пути используй методы модуля path
const contactsPath = path.basename('./db/contacts.json');

 console.log(contactsPath);

//Чтение файла + //Запись файла
// В функциях используй модуль fs и его методы readFile() и writeFile()
//Первым аргументом метода "readFileSync" передаётся абсолютный или относительный
// адрес файла, который необходимо считать. Второй параметр - это кодировка файла для считывания.
// fs.readFile('db/contacts.json', 'utf8', (error, contactsFile) => {
//     if (error) throw error; // ошибка чтения файла, если есть
//     console.log(contactsFile);// содержимое файла
//
//     //Первым параметром этой функции передаётся название файла, вторым данные для записи.
//     // При этом в третьем параметре необходимо передать callback функцию
//     // с единственным параметром - переменной, в которую запишется ошибка.
//     let toWrite = contactsFile + "Mishyna Ira";
//
//     fs.writeFile('db/contacts.json', toWrite, (error) => {
//         if (error) throw error;// ошибка чтения файла, если есть
//         console.log('Contact was added in the file');
//     });
// });

function listContacts() {
    fs.readFile('db/contacts.json', 'utf8', (error, contactsFile) => {
        if (error) throw error; // ошибка чтения файла, если есть
        console.log(contactsFile);// содержимое файла
    })
}

 // listContacts();

function getContactById(contactId) {
    fs.readFile('db/contacts.json', 'utf8', (error, contactsFile) => {
        if (error) throw error; // ошибка чтения файла, если есть
        let data = JSON.parse(contactsFile);
        let result = {};
        data.forEach((contact) => {
            if (contactId === Number(contact.id)) {
                result = contact;
                return true;
            }
        })

        if (Object.keys(result).length) {
            console.log(result);
        } else {
            console.log('Контакт с переданным id не существует');
        }
    })
}

// getContactById(5);


function removeContact(contactId) {
    fs.readFile('db/contacts.json', 'utf8', (error, contactsFile) => {
        if (error) throw error; // ошибка чтения файла, если есть
        let data = JSON.parse(contactsFile);


        const index = data.findIndex((item) => Number(item.id) === contactId);

        if (index === -1) {
            return console.log('Елемента с таким id не существует');
        }

        data.splice(index, 1);

        fs.writeFile('db/contacts.json', JSON.stringify(data), (error) => {
            if (error) throw error;// ошибка чтения файла, если есть
        });
        console.log(`Contact with id ${contactId} was deleted successfully`);
    })
}

removeContact(2);
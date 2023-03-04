//импорт модулей fs и path для работы с файловой системой
const path = require('path');
const fs = require('fs');

//Создай переменную contactsPath и запиши в нее путь к файлу contacts.json.
// Для составления пути используй методы модуля path
const contactsPath = path.basename('./db/contacts.json');

// console.log(contactsPath);

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
        data.forEach((contact) => {
            if (contactId === Number(contact.id)) {
                console.log(contact);
            }
        })
    })
}

// getContactById(4);
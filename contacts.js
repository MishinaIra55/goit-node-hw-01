//импорт модулей fs и path для работы с файловой системой
const path = require('path');
const fs = require('fs');
const colors = require('colors');

//Создай переменную contactsPath и запиши в нее путь к файлу contacts.json.
// Для составления пути используй методы модуля path
const contactsPath = path.resolve('./db/contacts.json');



function listContacts() {
    fs.readFile(contactsPath, 'utf8', (error, contactsFile) => {
        if (error) throw error; // ошибка чтения файла, если есть
        console.table(contactsFile.green);// содержимое файла
    })
}

function getContactById(contactId) {
    fs.readFile(contactsPath, 'utf8', (error, contactsFile) => {
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
            console.log('Контакт с переданным id не существует'.red);
        }
    })
}

function removeContact(contactId) {
    fs.readFile(contactsPath, 'utf8', (error, contactsFile) => {
        if (error) throw error; // ошибка чтения файла, если есть
        let data = JSON.parse(contactsFile);

        const index = data.findIndex((item) => Number(item.id) === contactId);

        if (index === -1) {
            return console.log('Елемента с таким id не существует'.red);
        }
        data.splice(index, 1);

        fs.writeFile('db/contacts.json', JSON.stringify(data), (error) => {
            if (error) throw error;// ошибка чтения файла, если есть
        });
        console.log(`Contact with id ${contactId} was deleted successfully`.yellow);
    })
}


function addContact(name, email, phone) {
  fs.readFile(contactsPath, 'utf8',(error, contactsFile) => {
      if (error) throw error; // ошибка чтения файла, если есть
      let data = JSON.parse(contactsFile);

      let maxId = 0;

      data.forEach((element) => {
          if (Number(element.id) > maxId) {
              maxId = Number(element.id);
          }
      })
      console.log(maxId);

      data.push({
          id: String(maxId + 1),
          name: name,
          email: email,
          phone:phone
      });

      fs.writeFile(contactsPath, JSON.stringify(data), (error) => {
          if (error) throw error;// ошибка чтения файла, если есть
      });
      console.log(`Contact was added successfully`.yellow);
  })
}


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};

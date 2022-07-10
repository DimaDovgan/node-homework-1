const fs = require('fs').promises;
const path = require('path');
var uniqid = require('uniqid'); 
const contactsPath = path.join(__dirname, "./db/contacts.json")

const listContacts = async () => {
    const list = await fs.readFile(contactsPath);
    const contacts = JSON.parse(list);
    return contacts;
  
}


const getContactById = async (contactId) => {
    const list = await fs.readFile(contactsPath);
    const contacts = JSON.parse(list);
    const result = contacts.find(contact => contact.id === contactId);
    if (!result) { return null };
    return result;
}
const  removeContact=async(contactId) =>{
  const list = await fs.readFile(contactsPath);
    const contacts = JSON.parse(list);
    const index = contacts.findIndex(contact => contact.id === contactId);
    if (index === -1) {
        return null
    }
    const delataContact = contacts.splice(index, 1);
    await fs.writeFile(contactsPath,JSON.stringify(contacts) );
    return delataContact[0] ;
}

const addContact = async ({ name, email, phone })=> {
  const list = await fs.readFile(contactsPath);
    const contacts = JSON.parse(list);
    const newContact = { name, email, phone, id: uniqid() }
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;

}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}




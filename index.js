const data = new Date();
const contactsFunc = require("./contacts")
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();



const invokeAction=async({ action, id, name, email, phone })=> {
  switch (action) {
    case 'list':
          const contactsList = await contactsFunc.listContacts();
          console.log(contactsList);
      break;

      case 'get':
          const getContact = await contactsFunc.getContactById(id);
      if (!getContact) {
            console.log(`contact with id=${id} not found`)
          }
          console.log(getContact);
      // ... id
      break;

    case 'add':
      const addContact = await contactsFunc.addContact({name,email,phone});
      console.log(addContact);
      // ... name email phone
      break;

      case 'remove':
      const getRemoveContact = await contactsFunc.removeContact(id);
      if (getRemoveContact === null) {
        console.log(`contact with id=${id} not found`)
      }
          console.log(getRemoveContact);
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
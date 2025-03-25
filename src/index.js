import { program } from 'commander';
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from './contacts.js';

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');
program.parse();
const options = program.opts();

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case 'list':
      const allContacts = await listContacts();
      return console.table(allContacts);
    case 'get':
      const oneContact = await getContactById(id);
      return console.log(oneContact);
    case 'add':
      const newContact = await addContact(data);
      return console.log(newContact);
    case 'remove':
      const removedContact = await removeContact(id);
      return console.log(removedContact);
    default:
      console.error('Unknown action');
  }
};

invokeAction(options);

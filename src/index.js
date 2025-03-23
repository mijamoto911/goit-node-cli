import { program } from 'commander';
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from './contacts.js';

const invokeAction = async ({ action, contactId, ...data }) => {
  switch (action) {
    case 'list':
      const allContacts = await listContacts();
      return console.table(allContacts);
    case 'get':
      const oneContact = await getContactById(contactId);
      return console.log(oneContact);
    case 'add':
      const newContact = await addContact(data);
      return console.log(newContact);
    case 'remove':
      const removedContact = await removeContact(contactId);
      return console.log(removedContact);
    default:
      console.error('Unknown action');
  }
};
program
  .option('-a, --action <type>')
  .option('-i, --contactId <type>')
  .option('-n, --name <type>')
  .option('-e,--email <type>')
  .option('-p,--phone <type>');
program.parse();
const options = program.opts();
invokeAction(options);

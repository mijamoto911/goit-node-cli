import fs from 'fs/promises';
import path from 'node:path';
import { nanoid } from 'nanoid';

const contactsPath = path.resolve('src', 'db', 'contacts.json');
const updateContacts = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), 'utf-8');

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(data);
};

export const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.contactId === contactId);
  return result || null;
};

export const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.contactId === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return result;
};

export const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = { contactId: nanoid(), ...data };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

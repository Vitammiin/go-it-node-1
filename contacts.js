const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log(contactsPath);

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.log("error");
  }
};

const getContactById = async (contactId) => {
  try {
    const allContacts = await listContacts();
    return allContacts.find((contact) => contact.id === contactId) || null;
  } catch (error) {
    console.log("Error");
  }
};

const addContact = async (data) => {
  try {
    const allContacts = await listContacts();
    const newContact = {
      id: nanoid(),
      ...data,
    };
    allContacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return newContact;
  } catch (error) {
    console.log("Error");
  }
};

const removeContact = async (id) => {
  try {
    const allContacts = await listContacts();
    const index = allContacts.findIndex((item) => item.id === id);
    if (index === -1) {
      return null;
    }
    const [result] = allContacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return result;
  } catch (error) {
    console.log("Error");
  }
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};

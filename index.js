// "dev": "nodemon index",

const argv = require("yargs").argv;

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "read":
        const allContacts = await contacts.listContacts();
        console.log(allContacts);
        break;
      case "getContactById":
        const oneContact = await contacts.getContactById(id);
        console.table(oneContact);
        break;

      case "add":
        const addContatc = await contacts.addContact({ name, email, phone });
        console.log(addContatc);
        break;
      case "remove":
        const removeContact = await contacts.removeContact(id);
        console.log(removeContact);
        break;
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log("error");
  }
};

invokeAction(argv);

//
// invokeAction({ action: "getContactById", id: "vza2RIzNGIwutCVCs4mCL" });
// invokeAction({ action: "read" });
// invokeAction({
//   action: "add",
//   name: "Seragey Gru",
//   email: "sergy.photograph@vestibul.co.uk",
//   phone: "(093) 944-3732",
// });

// invokeAction({
//   action: "remove",
//   id: "e6ywwRe4jcqxXfCZOj_1e",
//   name: "Thomas Lucas",
//   email: "nec@Nulla.com",
//   phone: "(704) 398-7993",
// });

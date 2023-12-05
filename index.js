// "dev": "nodemon index",

const contacts = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getContactById":
      break;
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
      break;
    // case "add":
    //   const  = await contacts.addContact(name, email, phone);
    //   console.log(addContatc);
    //   break;
    case "remove":
      const removeContact = await contacts.removeContact(id, {
        name,
        email,
        phone,
      });
      return console.log(removeContact);
  }
};

// invokeAction({ action: "getContactById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({ action: "read" });
// invokeAction({
//   action: "add",
//   name: "Seragey Gru",
//   email: "sergy.photograph@vestibul.co.uk",
//   phone: "(093) 944-3732",
// });

invokeAction({
  action: "remove",
  id: "rsKkOQUi80UsgVPCcLZZW",
  name: "Alec Howard",
  email: "Donec.elementum@scelerisquescelerisquedui.net",
  phone: "(748) 206-2688",
});

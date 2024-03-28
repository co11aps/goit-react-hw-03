import { useState, useId, useEffect } from "react";
import initialContactsList from "../contacts.json";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
import { nanoid } from "nanoid";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

const App = () => {
  const [contacts, setContacts] = useState(initialContactsList);
  const [filter, setFilter] = useState("");

  console.log(filter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;

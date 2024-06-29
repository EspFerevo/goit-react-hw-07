import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

import Contact from "../Contact/Contact.jsx";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.listCard}>
      {filteredContacts.map((contlist) => {
        return (
          <li key={contlist.id} className={css.card}>
            <Contact
              id={contlist.id}
              name={contlist.name}
              number={contlist.number}
            />
          </li>
        );
      })}
    </ul>
  );
}

import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filteredName = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filteredName.toLocaleLowerCase())
  );
  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact key={contact.id} contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}

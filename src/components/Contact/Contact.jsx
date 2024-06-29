import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.card}>
        <div>
          <p className={css.contField}>
            <BsFillPersonFill /> {name}
          </p>
          <p className={css.contField}>
            <BsFillTelephoneFill /> {number}
          </p>
        </div>
        <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </div>
    </>
  );
}

import { Field, Form, Formik, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const validSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too small")
    .max(50, "To large")
    .required("Not valid"),
  number: Yup.string().min(5, "Min 5 numbers").required("Not valid"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        dispatch(addContact({ ...values }));

        actions.resetForm();
      }}
      validationSchema={validSchema}
    >
      <Form className={css.form}>
        <h2 className={css.textH}>Phonebook</h2>
        <div className={css.box}>
          <div>
            <p className={css.text}>Name</p>
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage name="name" component="span" className={css.input} />

            <p className={css.text}>Number</p>
            <Field type="text" name="number" className={css.input} />
            <ErrorMessage
              name="number"
              component="span"
              className={css.input}
            />
          </div>
          <button type="submit" className={css.btn}>
            Add Contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}

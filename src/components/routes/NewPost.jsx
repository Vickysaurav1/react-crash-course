import { redirect, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import classes from "./NewPost.module.css";
import { Form } from "react-router-dom";

function NewPost() {
  const navigate = useNavigate();

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p className={classes.actions}>
          <button
            type="button"
            onClick={() => {
              navigate("..");
            }}
          >
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "content-type": "application/json",
    },
  });

  return redirect('/');
}

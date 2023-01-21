import { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";

const init = {
  title: "",
  bio: "",
  skills: "",
};

function App() {
  const [values, setValues] = useState({ ...init });
  const [errors, setErrors] = useState({ ...init });
  const [focuse, setFocuses] = useState({
    title: false,
    bio: false,
    skills: false,
  });
  const handelChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const { isValid, errorStore } = checkValidity(values);
    console.log(isValid);
    console.log(errorStore);
    if (isValid) {
      console.log(values);
      setErrors({ ...errorStore }); //probleam
    } else {
      setErrors({ ...errorStore });
    }
  };

  const handelFocus = (e) => {
    setFocuses((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  const handelBlur = (e) => {
    const key = e.target;
    console.log(key);
    const { errorStore } = checkValidity(values);

    if (errorStore[key] && focuse[key] === true) {
      setErrors((prev) => ({
        ...prev,
        [key]: errors[key],
      }));
    }
  };

  const checkValidity = (valueStore) => {
    const errorStore = {}; //probleam
    console.log(errorStore);
    const { title, bio, skills } = valueStore;

    if (!title) {
      errorStore.title = "Invalid Title";
    }
    if (!bio) {
      errorStore.bio = "Invalid Bio";
    }
    if (!skills) {
      errorStore.skills = "Invalid Skills";
    }
    return {
      errorStore,
      isValid: Object.keys(errorStore).length === 0, //probleam
    };
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <InputGroup
            value={values.title}
            label={"Title:"}
            name={"title"}
            placeholder={"Software Engineer"}
            onChange={handelChange}
            onFocus={handelFocus}
            onBlur={handelBlur}
            error={errors.title}
          />

          <InputGroup
            value={values.bio}
            label={"Bio:"}
            name={"bio"}
            placeholder={"i am a software engineer"}
            onChange={handelChange}
            onFocus={handelFocus}
            onBlur={handelBlur}
            error={errors.bio}
          />

          <InputGroup
            value={values.skills}
            label={"Skills:"}
            name={"skills"}
            placeholder={"JavaScript,React"}
            onChange={handelChange}
            onFocus={handelFocus}
            onBlur={handelBlur}
            error={errors.skills}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

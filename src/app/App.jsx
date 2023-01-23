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
  const [focuses, setFocuses] = useState({
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
    const { isValid, errors } = checkValidity(values);
    console.log(isValid);
    console.log(errors);
    if (isValid) {
      console.log(values);
      setErrors({ ...errors }); //probleam
    } else {
      setErrors({ ...errors });
    }
  };

  const handelFocus = (e) => {
    setFocuses((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  const handelBlur = (e) => {
    const key = e.target.name;
    const { errors } = checkValidity(values);

    if (errors[key] && focuses[key] === true) {
      setErrors((prev) => ({
        ...prev,
        [key]: errors[key],
      }));
    } else {
       setErrors((prev) => ({
        ...prev,
        [key]: '',
      }))
    }
  };

  const checkValidity = (values) => {
    const errors = {}; //probleam
    console.log(errors);
    const { title, bio, skills } = values;

    if (!title) {
      errors.title = "Invalid Title";
    }
    if (!bio) {
      errors.bio = "Invalid Bio";
    }
    if (!skills) {
      errors.skills = "Invalid Skills";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0, //probleam
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
            error={errors.title}
            onChange={handelChange}
            onFocus={handelFocus}
            onBlur={handelBlur}
            
          />

          <InputGroup
            value={values.bio}
            label={"Bio:"}
            name={"bio"}
            placeholder={"i am a software engineer"}
            error={errors.bio}
            onChange={handelChange}
            onFocus={handelFocus}
            onBlur={handelBlur}
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

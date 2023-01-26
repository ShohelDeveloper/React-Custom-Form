// import { useState } from "react";
// import InputGroup from "../components/shared/forms/InputGroup";

// const init = {
//     title: {
//         value: '',
//         error: '',
//         focus:false
//     },
//     bio: {
//         value: '',
//         error: '',
//         focus:false
//     },
//     skills:{
//         value: '',
//         error: '',
//         focus:false
//     }, 
//   };

// function App() {
//   const [state, setState] = useState({ ...init })
  
//   const handelChange = (e) => {
   
//     const { name: key, value } = e.target
//     setState((prev) => ({
//       ...prev,
//       [key]: {
//         ...prev[key],
//         value:value
//       }
//     }))
    
//   };

//   const handelSubmit = (e) => {
//     e.preventDefault();
//     const { isValid, errors } = checkValidity(values);
//     console.log(isValid);
//     console.log(errors);
//     if (isValid) {
//       console.log(values);
//       setErrors({ ...errors }); //probleam
//     } else {
//       setErrors({ ...errors });
//     }
//   };

//   const handelFocus = (e) => {
//     setFocuses((prev) => ({
//       ...prev,
//       [e.target.name]: true,
//     }));
//   };

//   const handelBlur = (e) => {
//     const key = e.target.name;
//     const { errors } = checkValidity(values);

//     if (errors[key] && focuses[key] === true) {
//       setErrors((prev) => ({
//         ...prev,
//         [key]: errors[key],
//       }));
//     } else {
//        setErrors((prev) => ({
//         ...prev,
//         [key]: '',
//       }))
//     }
//   };

//   const checkValidity = (values) => {
//     const errors = {}; //probleam
//     console.log(errors);
//     const { title, bio, skills } = values;

//     if (!title) {
//       errors.title = "Invalid Title";
//     }
//     if (!bio) {
//       errors.bio = "Invalid Bio";
//     }
//     if (!skills) {
//       errors.skills = "Invalid Skills";
//     }
//     return {
//       errors,
//       isValid: Object.keys(errors).length === 0, //probleam
//     };
//   };

//   return (
//     <div>
//       <form onSubmit={handelSubmit}>
//         <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//           <InputGroup
//             value={state.title.value}
//             label={"Title:"}
//             name={"title"}
//             placeholder={"Software Engineer"}
//             error={state.title.error}
//             onChange={handelChange}
//             onFocus={handelFocus}
//             onBlur={handelBlur}
            
//           />

//           <InputGroup
//             value={state.bio.value}
//             label={"Bio:"}
//             name={"bio"}
//             placeholder={"i am a software engineer"}
//             error={state.bio.error}
//             onChange={handelChange}
//             onFocus={handelFocus}
//             onBlur={handelBlur}
//           />

//           <InputGroup
//             value={state.skills.value}
//             label={"Skills:"}
//             name={"skills"}
//             placeholder={"JavaScript,React"}
//             onChange={handelChange}
//             onFocus={handelFocus}
//             onBlur={handelBlur}
//             error={state.skills.error}
//           />
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;

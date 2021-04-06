import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
    setError({});
  };

  return {
    values,
    setValues,
    error,
    setError,
    handleInputChange,
    resetForm,
  };
};

export default useForm;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiFormControl-root": {
//       margin: theme.spacing(1),
//       width: "80%",
//     },
//   },
// }));
// const Form = (props) => {
// const classes = useStyle()
//   return (
//    <form className={classes.root} autoComplete='off'>

//      {props.children}
//    </form>
//   )
// }

// export default Form

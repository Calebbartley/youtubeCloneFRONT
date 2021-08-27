import { useState } from 'react';

const useForm = (reply) => {
    const [values, setValues] = useState({});
    

    const handleChange = (event) => {
        event.persist();

        setValues(values => ({...values, [event.target.name]: event.target.value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        reply();
    };

    return { values, handleChange, handleSubmit }
};

export default useForm;
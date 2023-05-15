import {useState} from "react";

const useForm = ( initialState = {}, validationCallback ) => {

    const [ values, setValues ] = useState(initialState);

    const handleInputOnChange = e => {
        console.log(e);
        try {
            e.preventDefault();
        } catch (ex) {

        }
        e.target.classList.remove('valid', 'invalid');
        const { name, value } = e.target;
        if(validationCallback(name, value)) {
            e.target.classList.add('valid');
        } else {
            e.target.classList.add('invalid');
        }
        setValues({
            ...values,
            [ name ]: value,
        });
    };

    return [
        values,
        handleInputOnChange,
        setValues
    ];
};

export default useForm;

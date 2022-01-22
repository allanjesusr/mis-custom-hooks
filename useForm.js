import { useState } from "react";

// custom hook que se encarga de llenar formularios en la caja de texto

export const useForm = ( initialState = {} ) => {
  
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange, reset ];


};

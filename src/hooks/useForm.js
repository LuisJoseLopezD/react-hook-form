import React, { useState, useEffect } from "react";

const useForm = ({ initialForm = {} }) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    // reset
    const resetVariables = () => {
        setFormState(initialForm);
        console.log(formState);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        resetVariables,
    }
}

export default useForm;
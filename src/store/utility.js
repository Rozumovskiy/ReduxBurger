export const updateObject = (oldObject, updatedProprties) => {
    return  {
        ...oldObject,
        ...updatedProprties
    };
};
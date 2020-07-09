export const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) return true;

    if (rules.required) {
        isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
        isValid = value.trim().length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
        isValid = value.trim().length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
        const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = regex.test(value.trim()) && isValid;
    }
    if (rules.isNumeric) {
        const regex = /^\d+$/;
        isValid = regex.test(value.trim()) && isValid;
    }
    return isValid;
};

export const FormDataValidate=(email,password)=>{
    const isValidEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)

    if(!isValidEmail) return("Email is not Valid")
    if(!isPasswordValid) return("your Password must contain atlease 1 uppercase, 1 lowercase ,1 special character, 1 number")

    return null;

}
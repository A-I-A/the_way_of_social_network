export const textRequired = (value) =>{
    if (value) {return undefined}
    return "Field required";
}

export const maxLengthCreator =(maxLength)=>(value)=>{
    if(value.length > maxLength) {return `превышен лимит в ${maxLength} символов`}
    return undefined;

}
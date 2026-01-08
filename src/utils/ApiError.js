class ApiError extends Error{
    constructor(
        StatusCode,
        message = "Something went wrong",
        errors = [],
        Stack = " "
    ){
        super(message);
        this.StatusCode=StatusCode;
        this.message = message;
        this.success = false;
        this.errors = errors;
        if(stack){
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export default {ApiError};
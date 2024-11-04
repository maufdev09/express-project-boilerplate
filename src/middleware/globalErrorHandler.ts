import { ErrorRequestHandler } from "express";
import { TErrorSources } from "../interface/error.interface";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {

let statusCode=500;
let message="Something went wrong";
const errorSources:TErrorSources=[{
    path:"",
    message:"Something went wrong "
}]

if (err.name === "ValidationError") {
    const simplified=handleValidationError(err)
    
}


  res.status(500).json({
    success: false,
    message: "Something went wrong ",
    err,
  });
};

export default globalErrorHandler;

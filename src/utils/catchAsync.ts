import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync=(fn:RequestHandler)=>{

    return (req:Request, res:Response, next:NextFunction)=>{
        Promise.resolve(fn(req, res, next)).catch((err)=>next(err));
    }
}


export default catchAsync


// এই কোডটি একটি  Higher-Order Function  (HOF), যা  Express.js -এর জন্য একটি  error-handling middleware  তৈরি করে। এটি  async/await  ব্যবহারের সময় সম্ভাব্য  unhandled promise rejections  আটকাতে সাহায্য করে।  

// ###  কোডের ব্যাখ্যা:   
// 1. `catchAsync` হলো একটি  higher-order function , যা একটি  RequestHandler  (Express middleware) নেয়।  
// 2. এটি একটি  নতুন ফাংশন রিটার্ন করে , যা `req`, `res`, এবং `next` আর্গুমেন্ট গ্রহণ করে।  
// 3. এই  নতুন ফাংশনটি `fn(req, res, next)` কে Promise-এ র‍্যাপ করে , যাতে যদি কোনো  error  হয়, তাহলে তা  catch  ব্লকের মাধ্যমে `next(err)` দিয়ে Express-এর  error-handling middleware -এ পাঠিয়ে দেয়।  
// 4. এর ফলে  try-catch ব্লক  ব্যবহার না করেও আমরা  async functions -এর error সহজেই হ্যান্ডেল করতে পারি।  

// ---

// ###  উদাহরণ কোড:   
// নিচে `catchAsync` ব্যবহার করে একটি `getUser` API লেখা হলো, যেখানে যদি কোনো সমস্যা হয়, তাহলে `catchAsync` অটোমেটিক্যালি `next(err)` দিয়ে error handle করবে।  

// ```typescript
// import express, { Request, Response, NextFunction } from "express";
// import catchAsync from "./catchAsync";

// const app = express();

// // Mock database call
// const getUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
//     // এখানে ধরে নিচ্ছি, user ID পেতে হবে
//     const userId = req.params.id;
//     if (!userId) {
//         throw new Error("User ID is required!"); // যদি ID না থাকে, তাহলে error throw করবে
//     }

//  
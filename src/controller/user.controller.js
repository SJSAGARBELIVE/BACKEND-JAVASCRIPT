import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiERROR} from "../utils/ApiError.js"

const registerUser = asyncHandler(async (req, res) => {

  const {fullname , email, username, password } =req.body
  console.log(   "email :",  email);
  console.log("Password ", password);
  
  if(fullname === ""){
    throw new ApiERROR(400,"Fullname is Required")
  }

  // console.log(req.body);
  
});

export { registerUser };

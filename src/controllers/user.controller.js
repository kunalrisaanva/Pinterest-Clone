import { asyncHandler } from "../utils/asynchHandler.js";


const renderHomePage = asyncHandler( async(req,res) => {
    res.render("index")
}) 



export {
    renderHomePage
}

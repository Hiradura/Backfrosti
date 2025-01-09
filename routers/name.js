const express = require("express")
const router = express.Router()
const name = require("../services/name")

// router.patch("/:id",
//     async function (res, res , next) {
//         console.log("Patch", req.body)
//         try{
//             res.json(await names.patch(req.params.id,reg.body))
//         }
//         catch(err){
//             next(err)
//         }
// })
router.get("/", 
    async function(req, res, next){
        try{
            res.json(await name.getDatas())
        }
        catch(err){
            next(err)
        }
})

module.exports = router


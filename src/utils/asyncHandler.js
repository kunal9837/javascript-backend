const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }

//const asyncHandler = () => {}
//const asyncHandler = (fn) =>{}
//const asyncHandler = (fn) => async () => {}

// const asyncHandler = (func) => async (res, req, next) => {
//     try {
//         await func(res, req, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
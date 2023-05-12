// const Admin = require('../Model/admin')

// exports. = async(req,res,next)=>{
// const { name,email,password } = req.body
//   ////// validate the request body
//   if (!name || !email || !password) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

// ////// Add new teacher to the database
// try {
//     const teacher = Admin.create({name,email,password})
//     .then(()=>{
//         res.status(201).json({
//             data:teacher,
//             message:'Admin Successfully Created',
//             success:true
//         })
//     })
// } catch (error) {
//     res.status(500).json({
//         success:false,
//         message:'Failed To Create Admin',
//         error:error.message
//     })
//     next()
// }


// }
// exports.getTeacher = async(req,res,next)=>{
// const { id } = req.params
// try {
//    const teacher = await Admin.findById(id) 
   
//    if(!teacher){
//     res.status(404).json({
//         message:'Admin Not Found',
//         success:false
//     })
//    }

//    res.status(200).json({
//     data:teacher,
//     message:'Admin Founded',
//     success:true
//    })

// } catch (error) {
//     res.status(500).json({
//         message:error.message,
//         success:false
//     })
// }


    
// }
// exports.getAllTeachers = async(req,res,next)=>{
// const { id } = req.params
// try {
//     const teachers = await Admin.find({})

    
//     if(!teachers){
//         return res.status(404).json({
//             message:'No Admin Founded',
//             success:false
//         })

       
//     }
//     res.status(200).json({
//         data:teachers,
//         message:'All teachers founded',
//         success:true
//     })
// } catch (error) {
//     res.status(500).json({
//         message:error.message,
//         success:false

//     })
// }
    
// }
// exports.updateTeacher = async(req,res,next)=>{
//    const { id } = req.params

//    const updates = req.body

//       const teacher = await Admin.findByIdAndUpdate(id,updates,{new:true})
//         console.log(teacher)
// try{
//       if(!teacher){
//         return res.status(404).json({
//             message:'No Admin Founded',
//             success:false
//         })

       
//     }
//     res.status(200).json({
//         data:teacher,
//         message:' teacher updated brother',
//         success:true
//     })
// } catch (error) {
//     res.status(500).json({
//         message:error.message,
//         success:false

//     })
//   }
// }
// exports.deleteTeacher = async(req,res,next)=>{

//     const { id } = req.params



//     try {
//         const teacher = Admin.findByIdAndDelete({id})


//         if(!teacher){
//             return res.status(404).json({
//                 message:'No Admin Founded',
//                 success:false
//             })
//         }

//         res.status(200).json({
//             message:'Admin Deleted',
//             success:true
//         })
//     } catch (error) {
//         res.status(500).json({
//             message:error.message,
//             success:false
//         })
//     }
// }
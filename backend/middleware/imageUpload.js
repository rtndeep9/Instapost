const multer = require("multer");

//Multer file upload settings
const DIR = './public';
const storage = multer.diskStorage({
    destination: (req,file,next) => {
        next(null,DIR);
    },
    filename: (req,file,next) => {
        const filename = file.originalname.toLowerCase().split(' ').join('-');
        next(null,filename)
    }
});

//Multer Mime Type Validation
const upload = multer({
    storage:storage,
    limits: {
        fileSize: 1024*1024*5
    },
    
    fileFilter: (req,file,next) => {
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
            next(null,true);
        }else{
            next(null,false);
            return next(new Error('Only .png, .jpg, .jpeg format allowed'));
        }
    }
})

module.exports = upload;
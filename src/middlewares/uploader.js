import multer from "multer";
 const uploaderObject = {
    upload: multer({
      storage: multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, "public");
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname);
          // let temp = file.originalname.split('.');
          cb(null, Date.now() + "-" + file.originalname + ".jpg .png .jpeg ");
          // cb(null, file.fieldname + '-' + Date.now()+'.'+ temp[temp.length-1])
        },
      }),
    })
  };
  export default uploaderObject;
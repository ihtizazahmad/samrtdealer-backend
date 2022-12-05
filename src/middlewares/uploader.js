import multer from "multer";
import * as path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public");
    },
    filename: (req, file, cb) => {
      let filename =
        file.originalname.split(path.extname(file.originalname))[0] +
        "-" +
        Date.now() +
        path.extname(file.originalname);
      cb(null, filename);
    },
  });
  
 export const upload = multer({ storage });
// import multer from "multer";
//  const uploaderObject = {
//     upload: multer({
//       storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//           cb(null, "public");
//         },
//         filename: function (req, file, cb) {
//           cb(null, file.originalname);
//           // let temp = file.originalname.split('.');
//           cb(null, Date.now() + "-" + file.originalname + ".jpg .png .jpeg ");
//           // cb(null, file.fieldname + '-' + Date.now()+'.'+ temp[temp.length-1])
//         },
//       }),
//     })
//   };
//   export default uploaderObject;
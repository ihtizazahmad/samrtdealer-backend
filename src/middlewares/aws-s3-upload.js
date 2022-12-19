import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import dotenv from 'dotenv'
dotenv.config();

aws.config.update({
 secretAccessKey: process.env.SECRET_ACCESS_KEY,
 accessKeyId: process.env.ACCESS_KEY_ID,
 region: 'YOUR AWS REGION' //E.g us-east-1
});

const s3 = new aws.S3();

/* In case you want to validate your file type */
const fileFilter = (req, file, cb) => {
 if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
  cb(null, true);
 } else {
  cb(new Error('Wrong file type, only upload JPEG and/or PNG !'), 
  false);
 }
};

const awsupload = multer({
fileFilter: fileFilter,
storage: multerS3({
 acl: 'public-read',
 s3,
 bucket: 'YOUR S3 BUCKET NAME',
 key: function(req, file, cb) {
   /*I'm using Date.now() to make sure my file has a unique name*/
   req.file = Date.now() + file.originalname;
   cb(null, Date.now() + file.originalname);
  }
 })
});

module.exports = awsupload;
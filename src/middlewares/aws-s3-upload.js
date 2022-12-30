import aws from 'aws-sdk'
import multer from 'multer'
import multerS3 from 'multer-s3'
import dotenv from 'dotenv'
dotenv.config();

aws.config.update({
 secretAccessKey:"fVNlcqC4/8w7vWdX5gY6PKTSI5AItqko17UqpCMN",
 accessKeyId: "AKIAX3G56OYJCAAIYRML",
 region: 'us-west-2' //E.g us-east-1
});

const s3 = new aws.S3();

/* In case you want to validate your file type */
const fileFilter = (req, file, cb) => {
  cb(null, true);
  // if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/svg+xml' ) {
  //  } else {
  //   cb(new Error('Wrong file type, only upload JPEG and/or PNG SVG !'), 
  //   false);
  //  }
 
};

export const awsupload = multer({
fileFilter: fileFilter,
storage: multerS3({
 acl: 'public-read',
 s3,
 bucket: 'patronworks',
 key: function(req, file, cb) {
  //  /I'm using Date.now() to make sure my file has a unique name/
   req.file = Date.now() + file.originalname;
   cb(null, Date.now() + file.originalname);
  }
 })
})
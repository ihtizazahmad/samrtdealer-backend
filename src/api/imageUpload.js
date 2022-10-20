import {v2 as cloudinary} from "cloudinary"


async function uploadToCloudinary(locaFilePath) {
  
    // locaFilePath: path of image which was just
    // uploaded to "uploads" folder
  
    var mainFolderName = "main";
    // filePathOnCloudinary: path of image we want
    // to set when it is uploaded to cloudinary
    var filePathOnCloudinary = 
        mainFolderName + "/" + locaFilePath;
  
    return cloudinary.uploader
        .upload(locaFilePath, { public_id: filePathOnCloudinary })
        .then((result) => {
  
            // Image has been successfully uploaded on
            // cloudinary So we dont need local image 
            // file anymore
            // Remove file from local uploads folder
            fs.unlinkSync(locaFilePath);
  
            return {
                message: "Success",
                url: result.url,
            };
        })
        .catch((error) => {
  
            // Remove file from local uploads folder
            fs.unlinkSync(locaFilePath);
            return { message: "Fail" };
        });
}
  
app.post(
    "/profile-upload-single",
    upload.single("profile-file"),
    async (req, res, next) => {
  
        // req.file is the `profile-file` file
        // req.body will hold the text fields,
        // if there were any
  
        // req.file.path will have path of image
        // stored in uploads folder
        var locaFilePath = req.file.path;
  
        // Upload the local image to Cloudinary 
        // and get image url as response
        var result = await uploadToCloudinary(locaFilePath);
  
        // Generate html to display images on web page.
        var response = buildSuccessMsg([result.url]);
  
        return res.send(response);
    }
);
  
app.post(
    "/profile-upload-multiple",
    upload.array("profile-files", 12),
    async (req, res, next) => {
  
        // req.files is array of `profile-files` files
        // req.body will contain the text fields,
        // if there were any
        var imageUrlList = [];
  
        for (var i = 0; i < req.files.length; i++) {
            var locaFilePath = req.files[i].path;
  
            // Upload the local image to Cloudinary
            // and get image url as response
            var result = await uploadToCloudinary(locaFilePath);
            imageUrlList.push(result.url);
        }
  
        var response = buildSuccessMsg(imageUrlList);
  
        return res.send(response);
    }
);
  
const azure = require('azure-storage');
const toStream = require('buffer-to-stream');
const { v4: uuidv4 } = require('uuid');

module.exports.uploadImage = async (req, res, next) => {

    if (!req.files) {
        return res.status(400).send("No files are received.");
    }

    const blobService = azure.createBlobService("DefaultEndpointsProtocol=https;AccountName=brestatcc;AccountKey=QZpoHNqxy8Lv0mrUSOoIOI5EzqwfxxwzZauWqWGltme6nDYfylK9+nZUAz9B/Xzup+VjU8k3tmyV+AStd5EEXw==;EndpointSuffix=core.windows.net");
    // 11.1.  
    const blobName = `${uuidv4()}-${req.files.file.name}`;
    // 11.2. 
    const stream = toStream(req.files.file.data);
    // 11.3. 
    const streamLength = req.files.file.data.length;
    // 11.4. 
    blobService.createBlockBlobFromStream(
        "tcc",
        blobName,
        stream,
        streamLength,
        (err) => {
          if (err) {
            res.status(500);
            res.send({ message: "Error Occured" });
            return;
          }
          const fileUrl = `https://brestatcc.blob.core.windows.net/tcc/${blobName}`;
          res.status(200).json({file: fileUrl});
        }
      );
}
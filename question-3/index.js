var fs = require("fs");
var path = require("path");

const logsDirectory = path.join(__dirname, "Logs");

fs.readdir(logsDirectory, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
  } else if (files.length === 0) {
    console.log("Logs directory is empty.");
    for(var i = 0; i <= 10; i ++) {
        const fileName = `log${i}.txt`;
        const filePath = path.join(logsDirectory, fileName);
        const fileContent = `This is log file ${i}`;
        fs.writeFile(filePath, fileContent, (err) => {
            if(err) {
                console.error("Error creating file:" + fileName, err);
            } else {
                console.log(fileName)
            }
        })
    }
  } else {
    console.log("Logs directory is not empty.");
    files.forEach((file) => {
      const filePath = path.join(logsDirectory, file);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file: ${filePath}`, err);
        } else {
          console.log(`deleted files .... ${file}`);
        }
      });
    });
  }
});

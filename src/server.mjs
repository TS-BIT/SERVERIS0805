import * as fs from "fs/promises";
import * as path from "path";
import { Server } from "net";

const PORT = 3000;
const WEB = "web";

const server = new Server(socket => {
    socket.setEncoding("utf-8");
    let allData = "";
    socket.on("data", async data => {
        allData += data;
        const lines = allData.split("\r\n");
        if (lines.findIndex(l => l === "") >= 0) {
            // console.log(allData);
            let fileName = lines[0].split(" ")[1];
            console.log(fileName);
            let response;
            if (fileName === "/end") {
                response = createResponse(200, "OK", 
                { 
                "Content-Type": "text/html"
                },
                `<html><body><h1>Server is going down. Bye, bye.</h1></body></html>\r\n`
            );
                socket.write(response, () => {
                socket.end(undefined, undefined, () => {
                    server.close();
                });
            });
            return;
        }
/*
try {
                fileName = path.join(WEB, fileName);
                const fileContent = await fs.readFile(fullFileName);
                response = createResponse("200", "OK", null, fileContent);

*/

            try {
                let fullFileName = path.join(WEB, fileName);
                const fileStats = await fs.stat(fullFileName);
                if (fileStats = isDirectory()) {
                let html = "<html>";
                html += "<body>";
                const dirFiles = await fs.readdir(fullFileName);
                let = hrefFile = fileName;
                    if (!hrefFile.endsWith("/")) {
                    hrefFile += "/";
                    }
                    if (fileName !== "/") {

                    }
                for (const dirFile of dirFiles) {
                    let f = fileName;
                    if(f.endsWith("/")) {
                        hrefFile += "/";
                    }
                    hrefFile += dirFile;
                    html += `<a href=""
                    ` 
                    response = createResponse(200, "OK", null, fileContent);
            } catch (err) {
                if (err instanceof TypeError) {
                    throw err;
                }
                response = createResponse(
                    404,
                    "Not Found",
                    {
                        "Content-Type": "text/html"
                    },
                    `<html><body><h1>${fileName} not found</h1></body></html>\r\n`
                );
            }
            console.log(response);
            socket.write(response, () => {
                socket.end();
            });
        }
    })
});

function createResponse(status, msg, headers, content) {
    // if (arguments.length < 4) {
    //     content = headers;
    //     headers = undefined;
    // }
    if (typeof status !== "number") {
        throw new TypeError("status must be number");
    }
    if (typeof msg !== "string") {
        throw new TypeError("msg must be string");
    }
    if (headers && typeof headers !== "object") {
        throw new TypeError("headers must be object");
    }
    if (content && typeof content !== "string") {
        throw new TypeError("content must be string");
    }
    let res = `HTTP/1.1 ${status} ${msg}\r\n`;
    if (headers) {
        for (const header in headers) {
            res += `${header}: ${headers[header]}\r\n`;
        }
    }
    res += "\r\n";
    if (content) {
        res += content;
    }
    res += "\r\n";
    return res;
}

server.listen(PORT);
console.log(`Server started on port: ${PORT}`);

/*
const PORT = 3000;
const WEB = "web";

const server = new Server(socket => {
    socket.setEncoding("utf-8");
    let allData = "";
    socket.on("data", async data => {
        allData += data;
        const lines = allData.split("\r\n");
        if (lines.findIndex(l => l === "") >= 0) {
            // console.log(allData);
            let fileName = lines[0].split(" ")[1];
            console.log(fileName);
            let response = "";            
            try {
                fileName = path.join(WEB, fileName);
                const fileContent = await fs.readFile(fullFileName);
                response = createResponse("200", "OK", null, fileContent);
                response += "HTTP/1.1 200 OK\r\n";
                response += "\r\n";
                response += fileContent;
                response += `<html><body><h1>${fileName} not found</h1></body></html>\r\n`;
                response += "\r\n";
            } catch (err) {
                response = createResponse ("404, Not Found", {

                }
            }



            console.log(response);
            socket.write(response, () => {
                socket.end();
            });
        }
        
    })
});

function createResponse (status, msg, headers, content) {
    if (typeof status !== "nümber") {
        throw new TypeError("status must be number");
    }
    if (typeof msg !=)
}


/*
                const fileContent = await fs.readFile(fileName);
                    response += fileContent;
                    response += "\r\n";
                    console.log(response);
                    socket.write(response, () => {
                        socket.end();
                    });
                } catch (err) {
                    resp = "HTTP/1.1 404 Not Found\r\n\r\n";
                }
            }
        }
    })
});

server.listen(PORT);
console.log(`Server started on port: ${PORT}`);
*/
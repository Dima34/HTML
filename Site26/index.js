const express = require("express");
const {google} = require("googleapis");

const app = express()
app.set("view engine", 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.get("/", (req,res)=>{
    res.render("index")
})

app.post('/',async (req, res)=>{

    const {yourContactsFIO, yourContactsRank} = req.body;



    const auth = new google.auth.GoogleAuth({
       keyFile: "credential.json",
       scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    // Create client instance for auth
    const client = await auth.getClient();

    // Instance of google sheets api
    const googleSheets = google.sheets({version: "v4", auth: client});

    const spreadsheetId = "1QHNJK27yXrft2PvJ_6Y1t2-BgdJjBYE5lX1Oy7sP5GU";

    // Get metadata about spreadsheet
    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId
    })

    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'new',
        
    })

    console.log(yourContactsFIO);
    console.log(yourContactsRank);

    // Write row(s) to spreadsheet
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "new",
        valueInputOption: "USER_ENTERED",
        resource:{
            values:[
                ["123", "yourContactsRank"],
            ]
        }
    })

    res.send();
})

app.listen(1337, (res,req)=>console.log("run ind 1337"));

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready at port 5000");
});


app.post("/", (req, res) => {
    res.send( "i want to connect with you");
  });
app.post("/signup", async (req, res) => {
      const newConnection = (req.body.clientfullname, 12);
    
      connection.query(
        `INSERT INTO contacts (clientfullname, phonenumber, email) VALUES (?, ?, ?) `,
        [req.body.clientfullname,phonenumber, email,],
        (err, results, fields) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(201).send(results);
          }
        }
      );
    });

app.listen(5000,()=>{
    console.log("server at http://localhost:5000")
})
const app = require("express")();
app.get("/", (req, res) => {
  res.json({ message: "Docker is cool" });
});
const port = process.env.PORT || 8080;
// just a comment
app.listen(port, () => console.log("app listening on http://localhost:", port));

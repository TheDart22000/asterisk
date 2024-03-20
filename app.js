const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.listen(PORT, () => {
    console.log(`Opened on ${PORT}`);
});
app.get('/', (req, res) => {
  res.status(200).json({
    "RETURNED_RES_STATUS":'200 HTTP OK',
    "RETURNED_RES_MESSAGE":"The request was completed successfully, but there is no page that can be rendered."
  });
)};

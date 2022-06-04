const express = require('express')
const app = express()
const webroutes = require('./routes/webRoutes')
const path = require('path')
const PORT = process.env.PORT || 4000

app.use(webroutes)
app.use(express.static(path.join(__dirname,"/public")))
app.set('view engine','ejs')
app.set('views','./views')


app.listen(PORT,()=>{
    console.log(`Example running at http://localhost:${PORT}`);
})

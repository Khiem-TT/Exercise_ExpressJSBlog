const express = require('express');
const app = express();
const port = 8000;
const multer = require('multer');
const upload = multer();

app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('blog');
});

const arrayBlog = [];
app.post('/newsfeed', upload.none(), (req, res) => {
    if (req.body.title && req.body.content) {
        const blog = {
            title: req.body.title,
            content: req.body.content
        }
        arrayBlog.push(blog);
        res.render('view', {data: arrayBlog});
    } else {
        console.log('error');
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
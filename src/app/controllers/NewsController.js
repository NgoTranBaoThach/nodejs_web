class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug -> biến động, có thể thay đổi nhiều giá trị (slug)
    show(req, res) {
        res.send('news details');
    }
}

module.exports = new NewsController;
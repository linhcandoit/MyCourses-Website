class NewController {
  index(req, res) {
    res.render("news");
  }
  tuanlinh(req, res) {
    res.render("tuanlinh");
  }
}

module.exports = new NewController();

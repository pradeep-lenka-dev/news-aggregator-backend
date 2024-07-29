const newsService = require('../services/newsService');

const newsController = {
    getNews: async (req, res) => {
        const user = req.user;

        try {
            const newsData = await newsService.getNews(user);
            res.json(newsData);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch news' });
        }
    }
};

module.exports = newsController;

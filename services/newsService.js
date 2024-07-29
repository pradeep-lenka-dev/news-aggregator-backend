const axios = require('axios');
require('dotenv').config();
const newsApiUrl = process.env.NEWS_API_URL;
const newsApiKey = process.env.NEWS_API_KEY;
const commonService = require('../services/commonService');

const newsService = {
    getNews: async (user) => {
        
        // Read users from a file
        const usersData = await commonService.readFile();
        const userData = usersData.find((userItem) => userItem.email === user.email);

        if (!userData) {
            throw new Error('User not found');
        }

        const categories = userData.preferences;

        try {
            const newsPromises = categories.map(category => 
                axios.get(newsApiUrl, {
                    params: {
                        country: 'us',
                        category,
                        apiKey: newsApiKey
                    }
                })
            );

            const newsResponses = await Promise.all(newsPromises);
            const newsData = newsResponses.map(response => response.data.sources);

            return newsData;
        } catch (error) {
            throw new Error('Failed to fetch news');
        }
    }
};

module.exports = newsService;

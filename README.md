News API Project
Endpoints
1. Register a New User
    Endpoint: POST /users/signup
2. Log In a User
    Endpoint: POST /users/login

3. Retrieve News Preferences
    Endpoint: GET /preferences
    Headers:
        Authorization: Bearer <token>

4. Update News Preferences
    Endpoint: PUT /preferences
    Headers:
        Authorization: Bearer <token>

5. Fetch News Articles
    Endpoint: GET /news
    Headers:
       Authorization: Bearer <token>

The API endpoints have been tested using Postman. While all core functionalities are working as expected, there are some issues with passing all test cases. If you find any issues or errors during the review, please provide feedback and code review comments to assist in resolving them.
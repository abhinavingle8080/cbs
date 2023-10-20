const { google } = require('googleapis');

async function getGoogleOAuthClient() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {},
            scopes: 'https://www.googleapis.com/auth/firebase',
        });
        const client = await auth.getClient();
        const accessToken = await client.getAccessToken();
        return accessToken;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getGoogleOAuthClient,
}
export const oktaConfig = {
    clientId: '0oaa8x8m6g5mClTTz5d7',
    issuer: 'https://dev-08866031.okta.com/oath2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
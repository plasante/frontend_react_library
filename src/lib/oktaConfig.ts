export const oktaConfig = {
    clientId: '0oaa9jl82dRSfAf315d7',
    issuer: 'https://dev-16564339.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
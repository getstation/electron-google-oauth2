# @getstation/electron-google-oauth2
> Library that manages Google OAuth2 authentication for your [Electron](http://electron.atom.io) app.

## Install
```
// npm
$ npm install --save @getstation/electron-google-oauth2
// yarn
$ yarn add @getstation/electron-google-oauth2
```

## Usage
```typescript
import ElectronGoogleOAuth2 from '@getstation/electron-google-oauth2';

const config = {
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
    authorizationUrl: 'AUTHORIZATION_URL',
    tokenUrl: 'TOKEN_URL',
    useBasicAuthorizationHeader: false,
    redirectUri: 'http://localhost'
};

app.on('ready', () => {
  const windowParams = {
    alwaysOnTop: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false
    }
  }

  const myApiOauth = new ElectronGoogleOAuth2(config, windowParams);

  myApiOauth.openAuthWindowAndGetTokens()
    .then(token => {
      // use your token.access_token
    });
});
```

## License
MIT

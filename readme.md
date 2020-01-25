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

### Access Token
```typescript
import ElectronGoogleOAuth2 from '@getstation/electron-google-oauth2';

app.on('ready', () => {
  const myApiOauth = new ElectronGoogleOAuth2(
    'CLIENT_ID',
    'CLIENT_SECRET',
    ['https://www.googleapis.com/auth/drive.metadata.readonly']
  );

  myApiOauth.openAuthWindowAndGetTokens()
    .then(token => {
      // use your token.access_token
    });
});
```

### Refresh Token
```typescript
import ElectronGoogleOAuth2 from '@getstation/electron-google-oauth2';

app.on('ready', () => {
  const myApiOauth = new ElectronGoogleOAuth2(
    'CLIENT_ID',
    'CLIENT_SECRET',
    ['https://www.googleapis.com/auth/drive.metadata.readonly']
  );
  
  const refreshToken = \\ Read the saved refresh token
  
  if(refreshToken) {
    myApiOauth.SetTokens({ refresh_token: refreshToken });
  } else {
    myApiOauth.openAuthWindowAndGetTokens()
      .then(token => {
        // save the token.refresh_token secured to use it the next time the app loading
        // use your token.access_token
      });
  }
});
```

## License
MIT

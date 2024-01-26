# Shazarr - Unofficial Shazam mobile app web UI
Shazarr project is a mobile app (android, ios) providing Shazam song recognition service with [Lidarr](https://github.com/linuxserver/docker-lidarr) and [Tidarr](https://github.com/cstaelen/tidarr) integration.

<img src="https://github.com/cstaelen/docker-shazarr/blob/b436440b628ff5c8a0925a57e63e6659b1bf273e/.github/screenshot.jpg" />

## Features
- Audio microphone capture and song recognition using python [node-shazam-api](https://github.com/asivery/node-shazam-api).
- Download discovered album with [Lidarr](https://github.com/linuxserver/docker-lidarr)
- Download discovered song/album with [Tidarr](https://github.com/cstaelen/tidarr)
- Add custom search service
- Listen on streaming app Spotify, Apple Music and Deezer
- Show lyrics
- Offline mode : record and recognize later (if network down)
- Records history

## Get started

- **Client apps**:
  - **android**: ✅ APK download
  - **ios**: ⚠️ build app from Xcode ONLY (needs xcode and paired device)


### App options (fit with your data)

- **Lidarr URL** : `http://<lidarr-web-ui-url>`
- **Lidarr API key**: `123456789abcdef`
- **Lidarr library path**: `/music/`
- **Tidarr URL**: `http://<tidarr-web-ui-url>`

FYI you will find your lidarr music path in web ui :

<img src="https://github.com/cstaelen/docker-shazarr/blob/c30c348adedabb62e760a344a5347e90cc1b1056/.github/lidarr-path.png" width="500"/>

### Android APP
  APK available [here](https://github.com/cstaelen/docker-shazarr/raw/main/outputs/shazarr-app.apk)

#### iOS (source build)
Requirements: `npm`, `ionic`, `xcode`.

1. Git clone project first
2. in project folder run:
```
cd docker-shazarr
npm run ios:build
```
XCode should open project.

3. [Pair your iOS device](https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device/#Connect-real-devices-to-your-Mac)
4. build the app.
5. After few secs, it should be installed on your ipad/iphone.

## Roadmap
- [x] Android app
- [x] Record history: access last shazamed songs
- [x] Offline record: record without API access, recognize song later 
- [-] iOS app: find a way to distribute packaged app without using app store and without have to build it

## Development
- Android + iOS mobile app (ReactJS + Ionic/Capacitor)

### Watch mode
Start app in watch mode :
```sh
npm run start # Listening on http://localhost:3000/
npm run android:live # Listening on http://localhost:8100/ + emulate
npm run ios:live # Listening on http://localhost:8100/ + emulate
```

### Build
Build APK with Android studio:
```
npm run android:build
```
Build ios app with Xcode:
```
make ios/build
```

## Credits
- Big thanks to the [node-shazam-api](https://github.com/asivery/node-shazam-api) team for the awesome works and reactivness 👏💪🙏
- UI inspiration : https://github.com/codrops/ShazamButtonEffect
- See Lidarr project: https://github.com/linuxserver/docker-lidarr 
- See Tidarr project: https://github.com/cstaelen/tidarr


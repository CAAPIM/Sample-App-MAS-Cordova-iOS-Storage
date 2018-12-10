# Sample-App-MAS-Cordova-iOS-Storage

1. In Xcode, drag and drop the msso_config.json file anywhere in the app. On the confirmation dialog, verify that Destination: ‘Copy Items if Needed’ is checked.
2. This app depends upon the MAS iOS Native dependencies 1.9.00 pulled, which have been already ingested into the build file i.e. you don't need to make any change in build configurations. Just open the app in XCode, build and run.
3. If you want to point to latest MAS iOS Native dependencies, run the following command :

```
cd ./MASStorage/platforms/ios
pod update; pod install

```

In case, if you need to work with native libraries directly i.e. not using the Cocoapods denpendecy injection, then follow the steps mentioned in [*MAS Cordova Developer Guide*](http://mas.ca.com/docs/cordova/1.8.00/guides/) under the section Developer Mode.

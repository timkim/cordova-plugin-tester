/**
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

module.exports = {
    'cordova-plugin-battery-status' : {
        name : 'org.apache.cordova.core.BatteryListener',
        url  : gitUrl('cordova-plugin-battery-status')
    },
    'cordova-plugin-camera' : {
        name : 'org.apache.cordova.core.CameraLauncher',
        url  : gitUrl('cordova-plugin-camera')
    },
    'cordova-plugin-console' : {
        name : 'org.apache.cordova.core.console',
        url  : gitUrl('cordova-plugin-console')
    },
    'cordova-plugin-contacts' : {
        name : 'org.apache.cordova.core.contacts',
        url  : gitUrl('cordova-plugin-contacts')
    },
    'cordova-plugin-device-motion' : {
        name : 'org.apache.cordova.core.AccelListener',
        url  : gitUrl('cordova-plugin-device-motion')
    },
    'cordova-plugin-device-orientation' : {
        name : 'org.apache.cordova.core.CompassListener',
        url  : gitUrl('cordova-plugin-device-orientation')
    },
    'cordova-plugin-device' : {
        name : 'org.apache.cordova.core',
        url  : gitUrl('cordova-plugin-device')
    },
    'cordova-plugin-dialogs' : {
        name : 'org.apache.cordova.core',
        url  : gitUrl('cordova-plugin-dialogs')
    },
    'cordova-plugin-file-transfer' : {
        name : 'org.apache.cordova.core',
        url  : gitUrl('cordova-plugin-file-transfer')
    },
    'cordova-plugin-file' : {
        name : 'org.apache.cordova.core',
        url  : gitUrl('cordova-plugin-file')
    },
    'cordova-plugin-geolocation' : {
        name : 'org.apache.cordova.core.GeoBroker',
        url  : gitUrl('cordova-plugin-geolocation')
    },
    'cordova-plugin-globalization' : {
        name : 'org.apache.cordova.core.Globalization',
        url  : gitUrl('cordova-plugin-globalization')
    },
    'cordova-plugin-inappbrowser' : {
        name : 'org.apache.cordova.core.InAppBrowser',
        url  : gitUrl('cordova-plugin-inappbrowser')
    },
    'cordova-plugin-media-capture' : {
        name : 'org.apache.cordova.core.Capture',
        url  : gitUrl('cordova-plugin-media-capture')
    },
    'cordova-plugin-media' : {
        name : 'org.apache.cordova.core.AudioHandler',
        url  : gitUrl('cordova-plugin-media')
    },
    'cordova-plugin-network-information' : {
        name : 'org.apache.cordova.core.NetworkManager',
        url  : gitUrl('cordova-plugin-network-information')
    },
    'cordova-plugin-splashscreen' : {
        name : 'org.apache.cordova.core.SplashScreen',
        url  : gitUrl('cordova-plugin-splashscreen')
    },
    'cordova-plugin-vibration' : {
        name : 'org.apache.cordova.core.Notification',
        url  : gitUrl('cordova-plugin-vibration')
    },
};

function gitUrl(pluginName){
    return 'https://git-wip-us.apache.org/repos/asf/'+pluginName+'.git';
}
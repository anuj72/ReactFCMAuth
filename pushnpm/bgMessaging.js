// @flow

// Optional flow type
import type { RemoteMessage } from 'react-native-firebase';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, AsyncStorage } from 'react-native';
import firebase from 'react-native-firebase';

import store from './store'
import {Provider} from 'react-redux'

export default async (message: RemoteMessage) => {

	console.log(JSON.stringify(message));
	var text=JSON.stringify(message);
	 var text1=JSON.parse(text).data.gcm_message;
	  var text2=JSON.parse(text1).title;
      var text3=JSON.parse(text1).body;
	 

	 const notification = new firebase.notifications.Notification()
  .setNotificationId('notificationId')
  .setTitle(text2)
  .setBody(text3)
  .setData({
    key1: 'value1',
    key2: 'value2',
  });
  notification
  .android.setChannelId('channelId')
  .android.setSmallIcon('ic_launcher');
  firebase.notifications().displayNotification(notification);


	
    // handle your message

    return Promise.resolve();
}

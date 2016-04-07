/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  // Part 1
  TouchableHighlight,
  AlertIOS,
  // Part 2
  ActionSheetIOS,
  UIManager,
} from 'react-native';

// Part 2
let BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];
let DESTRUCTIVE_INDEX = 3;
let CANCEL_INDEX = 4;


class CrossDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.popUp}
          underlayColor="#FFFFFF"
          style={styles.active}>
          <Text style={styles.welcome}>
            กดฉันสิ
          </Text>
          </TouchableHighlight>
         
      </View>
    );
  }

  popUp() {
    // AlertIOS.alert(
    //    'Oh Yeah!',
    //    'All your data are belong to us.'
    //   );

    // Part 2
    // ActionSheetIOS.showActionSheetWithOptions({
    //     options: BUTTONS,
    //     cancelButtonIndex: CANCEL_INDEX,
    //     destructiveButtonIndex: DESTRUCTIVE_INDEX,
    //   },
    //   (buttonIndex) => {
    //      AlertIOS.alert(
    //        'คุณเลือก',
    //        'ปุ่ม ' + BUTTONS[buttonIndex]  
    //       );
    //   });

    // Part 2.1
    // Take the snapshot (returns a temp file uri)
    UIManager.takeSnapshot('window').then((uri) => {
      // Share image data
      ActionSheetIOS.showShareActionSheetWithOptions({
        url: uri,
        excludedActivityTypes: [
          'com.apple.UIKit.activity.PostToTwitter'
        ]
      },
      (error) => alert(error),
      (success, method) => {
        var text;
        if (success) {
          text = `Shared via ${method}`;
        } else {
          text = 'You didn\'t share';
        }
        AlertIOS.alert(
           'คุณเลือก',
           text 
          );
      });
    }).catch((error) => alert(error));
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  active:{
    borderRadius: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CrossDemo', () => CrossDemo);

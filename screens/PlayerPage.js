import React, { Component } from "react";
import { Text, Image, View, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../constrains/colors'

export default class PlayerPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.main}>
          <View style={styles.headerView}>
            <View style={styles.headerIconView}>
              <Icon size={25} color={'gray'} name='md-arrow-back' />
            </View>
            <Text style={styles.defaultText}>PLAYING NOW</Text>
            <View style={styles.headerIconView}>
              <Icon size={25} color={'gray'} name='md-menu' />
            </View>
          </View>
          <Image style={styles.songImage} source={require('../assets/image-asset.jpeg')} />
          <View style={styles.songNameView}>
            <Text style={styles.songNameText}>In the End</Text>
            <Text style={styles.albumNameText}>Hybrid Theory-Linkin Park</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
            <Text style={styles.defaultText}>1.47</Text>
            <Text style={styles.defaultText}>3.37</Text>
          </View>
          <View style={styles.progressView}>
            <View style={styles.playedPartView} />
            <View style={styles.progressCircleView}>
              <View style={styles.progressInsideCircle} />
            </View>
            <View style={styles.restPlayPartView} />
          </View>
          <View style={styles.playerButtonsView}>
            <View style={styles.rewindForwardIconView}>
              <Icon size={25} color={'gray'} name='ios-rewind' />
            </View>
            <View style={styles.playIconView}>
              <Icon size={25} color={'white'} name='ios-pause' />
            </View>
            <View style={styles.rewindForwardIconView}>
              <Icon size={25} color={'gray'} name='ios-fastforward' />
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: color.appThemeColor },
  main: { padding: 20, },
  headerView: { marginTop: 20, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' },
  headerIconView: { elevation: 10, justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderRadius: 50 / 2, borderColor: color.iconBorderColor, backgroundColor: color.iconBackgroundColor, borderWidth: 5 },
  songImage: { height: 250, width: 250, borderRadius: 250 / 2, alignSelf: 'center', marginTop: 30, borderColor: color.iconBorderColor, backgroundColor: color.iconBackgroundColor, borderWidth: 5 },
  songNameView: { alignItems: 'center', marginTop: 30 },
  songNameText: { color: 'gray', fontSize: 23, fontFamily: 'proximaBold' },
  albumNameText: { color: 'gray', fontSize: 15, fontFamily: 'ProximaReg' },
  defaultText: { color: 'gray', fontFamily: 'ProximaReg' },
  progressView: { height: 10, marginTop: 5, flexDirection: 'row' },
  playedPartView: { height: 5, width: '20%', backgroundColor: 'rgba(211, 157, 88, 1)', borderRadius: 50, elevation: 3 },
  restPlayPartView: { height: 5, width: '80%', backgroundColor: 'rgba(1,1,1,0.3)', borderRadius: 50, elevation: 3 },
  progressCircleView: { position: 'absolute', elevation: 10, justifyContent: 'center', alignItems: 'center', top: -10, left: 50, backgroundColor: 'white', height: 25, width: 25, borderRadius: 25 / 2, borderColor: color.iconBorderColor, backgroundColor: color.iconBackgroundColor, borderWidth: 5 },
  progressInsideCircle: { backgroundColor: 'white', height: 10, width: 10, borderRadius: 10 / 2, backgroundColor: 'rgba(211, 157, 88, 1)' },
  playerButtonsView: { paddingHorizontal: 50, marginTop: 60, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' },
  rewindForwardIconView: { elevation: 10, justifyContent: 'center', alignItems: 'center', width: 60, height: 60, borderRadius: 60 / 2, borderColor: color.iconBorderColor, backgroundColor: color.iconBackgroundColor, borderWidth: 5 },
  playIconView: { justifyContent: 'center', alignItems: 'center', width: 70, height: 70, borderRadius: 70 / 2, borderColor: color.iconBorderColor, backgroundColor: '#FF5722', borderWidth: 5 },
});
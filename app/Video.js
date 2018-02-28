import React, {Component} from 'react';
import {
    Button,
    Platform,
    Text,
    View,
    NativeModules
} from 'react-native';

import styles from "../styles/main";
import {navigate} from "react-navigation";

export default class Video extends Component<{}> {
    static navigationOptions = {
        title : 'Second screen',
    };

    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest"
        };
    }

    render() {
        const {navigate} = this.props.navigation;
	var CalendarManager = NativeModules.CalendarManager;
        return (<View style={styles.container}>
                 <Button
                    title="Create event"
                    onPress={() => {CalendarManager.addEvent('Birthday Party',{location:'4 Privet Drive, Surrey',time:new Date('28 February 2018 20:48 UTC').toISOString()});}}/>
                </View>);
    }
}


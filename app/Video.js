import React, {Component} from 'react';
import {
    Button,
    Platform,
    Text,
    View
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

        return (<View style={styles.container}>
                 <Text>
			{this.state.titleText}
		</Text>
                    
            </View>);
    }
}


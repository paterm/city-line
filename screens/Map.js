import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import Block from '../components/Block';

export default class Map extends Component {
    render() {
        return (
            <Block flex={1} justifyContent='center'>
                <Text>Map</Text>
            </Block>
        );
    }
}

const styles = StyleSheet.create({

});

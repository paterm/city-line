import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import Block from '../components/Block';

export default class Welcome extends Component {
    render() {
        return (
            <Block justifyContent='center'>
                <Text>Welcome</Text>
            </Block>
        );
    }
}

const styles = StyleSheet.create({

});


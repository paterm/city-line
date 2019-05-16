import React, {Component} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

export default class Block extends Component {
    render() {
        const {
            flex,
            row,
            column,
            center,
            middle,
            left,
            right,
            top,
            bottom,
            card,
            shadow,
            color,
            space,
            padding,
            margin,
            animated,
            wrap,
            style,
            children,
            ...props
        } = this.props;

        const blockStyles = [
            styles.block,
            flex && { flex },
            flex === false && { flex: 0 }, // reset / disable flex
            row && styles.row,
            column && styles.column,
            center && styles.center,
            middle && styles.middle,
            left && styles.left,
            right && styles.right,
            top && styles.top,
            bottom && styles.bottom,
            space && { justifyContent: `space-${space}` },
            wrap && { flexWrap: 'wrap' },
            color && styles[color], // predefined styles colors for backgroundColor
            color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
            style, // rewrite predefined styles
        ];

        if (animated) {
            return (
                <Animated.View style={blockStyles} {...props}>
                    {children}
                </Animated.View>
            )
        }

        return (
            <View style={blockStyles} {...props}>
                {children}
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    center: {
        alignItems: 'center',
    },
    middle: {
        justifyContent: 'center',
    },
    left: {
        justifyContent: 'flex-start',
    },
    right: {
        justifyContent: 'flex-end',
    },
    top: {
        justifyContent: 'flex-start',
    },
    bottom: {
        justifyContent: 'flex-end',
    }
    // accent: { backgroundColor: theme.colors.accent, },
    // primary: { backgroundColor: theme.colors.primary, },
    // secondary: { backgroundColor: theme.colors.secondary, },
    // tertiary: { backgroundColor: theme.colors.tertiary, },
    // black: { backgroundColor: theme.colors.black, },
    // white: { backgroundColor: theme.colors.white, },
    // gray: { backgroundColor: theme.colors.gray, },
    // gray2: { backgroundColor: theme.colors.gray2, },
});

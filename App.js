import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {AppLoading} from 'expo';
import Navigation from './navigation';
import Block from './components/Block';

const images = [
    // require('./assets')
];

export default class App extends React.Component {
  static propTypes = {
    skipLoadingScreen: PropTypes.bool
  };

  state = {
    isProgress: true
  };

  handleResourcesAsync = async () => {
      const cacheImages = images.map(image => {
        return Asset.fromModule(image).downloadAsync();
      });

      return Promise.all(cacheImages);
  };

  render() {
    if (this.state.inProgress && !this.props.skipLoadingScreen) {
      return (
          <AppLoading
            startAsync={this.handleResourcesAsync}
            onError={e => console.error(e)}
            onFinish={() => this.setState({inProgress: false})}
          />
      )
    }

    return (
      <Block>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({

});

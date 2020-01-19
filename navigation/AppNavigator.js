import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PlayerPage from '../screens/PlayerPage'

const AppNavigator = createStackNavigator({
    Player: {
        screen: PlayerPage,
    },
}, {
    headerMode: 'none',
});

export default createAppContainer(AppNavigator);
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Search from './Search';
import JobList from './JobList';
import JobInfo from './JobInfo';

const AppNavigator = createStackNavigator({
  Search: { screen: Search },
  JobList: { screen: JobList },
  JobInfo: { screen: JobInfo },
});

const Navegar = createAppContainer(AppNavigator);

export default Navegar;
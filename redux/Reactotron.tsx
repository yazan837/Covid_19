import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

export default Reactotron.configure({name: 'Covid_19'})
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: false,
    errors: {veto: stackFrame => false},
    overlay: false,
  })
  .use(reactotronRedux())
  .connect();


// import { Provider } from 'react-redux'
// 1.
// import store from './components/1-SimpleRedux/store'
// import SimpleRedux from './components/1-SimpleRedux/SimpleReducer'

// 2.
// import SimpleReducerWithPayload from './components/2-SimpleReducerWithPayload/SimpleReducerWithPayload'
// import store from './components/2-SimpleReducerWithPayload/store'

// // 3.
// import MultipleReducers from './components/3-MultipleReducers/MultipleReducers'
// import store from './components/3-MultipleReducers/store'

// 4.
// import Example2withPersist from './components/4-Example2withPersist/Example2withPersist'
// import store from './components/4-Example2withPersist/store'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist';
// let persistor = persistStore(store);

// // 5.
// import AsyncOperations from './components/5-AsyncOperations/AsyncOperations'
// import store from './components/5-AsyncOperations/store'
// 6.
// import ToolKitWithThunk from './components/6-ToolKitWithThunk/ToolKitWithThunk'
// import store from './components/6-ToolKitWithThunk/store'

// for persist laptopqty
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react'
// let persistor = persistStore(store);

// for context
// import {ContextProvider} from './components/7-ReactContext/Context'
// import CompA from "./components/7-ReactContext/CompA";

import {ContextProvider} from './components/8-ContextWithHook/Context'
import CompA from "./components/8-ContextWithHook/CompA";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Hasnain");
  return (
    <div className="App">
      {/* <Provider store={store}> */}
        
        {/* <SimpleRedux /> */}
        {/* <SimpleReducerWithPayload /> */}

            {/* <MultipleReducers /> */}

          {/* <PersistGate persistor={persistor}>
            <Example2withPersist />
          </PersistGate> */}

          {/* <AsyncOperations /> */}


          {/* same componenents */}
          {/* <ToolKitWithThunk /> */}

          {/* <PersistGate persistor={persistor}>
            <ToolKitWithThunk />
          </PersistGate> */}
          {/* same componenents */}


          
      {/* </Provider> */}

      {/* for React Context Api */}
      {/* <ContextProvider value="Hasnain">
          <CompA/>
      </ContextProvider> */}

      <ContextProvider value={{name, setName}}>
          <CompA/>
      </ContextProvider>
      
    </div>
  );
}

export default App;

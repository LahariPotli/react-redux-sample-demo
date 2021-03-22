import React from 'react';
import './App.css';
 import CakeContainer from './components/CakeContainer';
 import HooksCakeContainer from './components/HooksCakeContainer';
 import { Provider } from 'react-redux';
 import store from './redux/store';
 import IceCreamContainer from './components/IceCreamContainer';
 import NewCakeContainer from './components/NewCakeContainer';
//import Tabs from "./components/Tabs";

function App() {
  return (
    <Provider store={store}>
    <div className='App'>
       <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <NewCakeContainer /> 
      {/* <h1>SAMPLE TABS</h1>
      <Tabs> 
       <div label="Chennai"> 
       Chennai, on the Bay of Bengal in eastern India, 
       is the capital of the state of Tamil Nadu. 
       The city is home to Fort St. George, 
       built in 1644 and now a museum showcasing the city’s roots as,
        a British military garrison and East India Company trading outpost, 
        when it was called Madras. , <em>Metro City</em>! 
       </div> 
       <div label="Hyderabad"> 
       Hyderabad is the capital of southern India's Telangana state. 
       A major center for the technology industry, 
       it's home to many upscale restaurants and shops. 
       Its historic sites include Golconda Fort, 
       a former diamond-trading center that was once the Qutb-
       Shahi dynastic capital.  <em>MetroCity</em>! 
       </div> 
       <div label="Pune"> 
       Pune is a sprawling city in the western Indian state of Maharashtra.
        It was once the base of the Peshwas (prime ministers) of the Maratha Empire,
        which lasted from 1674 to 1818. It's known for the grand Aga Khan Palace,
         built in 1892 and now a memorial to Mahatma Gandhi,
          whose ashes are preserved in the garden. <em>Non-MetroCity</em>! 
       </div> 
     </Tabs>  */}
    </div>
    </Provider>
  );
}

export default App;

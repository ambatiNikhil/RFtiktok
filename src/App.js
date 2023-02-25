
import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className='app__videos'>
      <Video 
        url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
        channel="nikhilambati"
        description="Macbook Air to new Windows editing beast"
        likes = {234}
        shares={245}
        messages={890}/>

        <Video 
        url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
        channel="ambatiNikhil"
        description="Technology is the booming business in todays age"
        likes = {256}
        shares={254}
        messages={900}/>
      
      <Video 
        url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
        channel="nikhilambati"
        description="Macbook Air to new Windows editing beast"
        likes = {234}
        shares={245}
        messages={890}/>

<Video 
        url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
        channel="ambatiNikhil"
        description="Technology is the booming business in todays age"
        likes = {286}
        shares={345}
        messages={870}/>
      </div>
    </div>
  );
}

export default App;

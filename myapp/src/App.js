import './App.css';
import Profile from './compenent/profile';
import photo from './compenent/image/OIP.jpg'

function App() {
  const alertMyProfile = name => alert('Profile : ' + name);
  const stylePhoto = {
    border: '5px solid darkred',
    borderRadius: '300px',
    marginTop: '40px',
    marginBottom: '10px',
  }
  return (
    <div className="App">
      <Profile
        fullName='Najwa Dhahri'
        bio='Im  FullStack  JS  at  Gomycode'
        profession='developper full stack js'
        handleName={alertMyProfile}>
        <img src={photo} alt="PicNasr" style={stylePhoto} />
      </Profile>
    </div>
  );
}

export default App;
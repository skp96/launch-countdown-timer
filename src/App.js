import './App.css';
import SocialMedia from './components/social_media';
import CountDown from './components/count_down';

const App = () => {
	return (
		<div className='main'>
			<div className='container'>
				<h1 className='main-font'>WE'RE LAUNCHING SOON!</h1>
				<CountDown />
				<div>
					<SocialMedia app='github' />
					<SocialMedia app='linkedin' />
					<SocialMedia app='facebook' />
					<SocialMedia app='instagram' />
				</div>
			</div>
		</div>
	);
};

export default App;

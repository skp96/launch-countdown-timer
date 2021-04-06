import './App.css';
import SocialMedia from './components/social_media';
import CountDown from './components/count_down';

const App = () => {
	return (
		<div className='main'>
			<h1 className='heading'>WE'RE LAUNCHING SOON!</h1>
			<CountDown />
			<footer>
				<SocialMedia app='github' />
				<SocialMedia app='linkedin' />
				<SocialMedia app='facebook' />
				<SocialMedia app='instagram' />
				</footer>
		</div>
	);
};

export default App;

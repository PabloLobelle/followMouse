import { useState } from 'react';
import './App.css';
import { FollowMouse } from './components/Followmouse';

function App() {
	const [mounted, setMounted] = useState(false);

	return (
		<main className='main'>
			{mounted && <FollowMouse />}
			<button onClick={() => setMounted(!mounted)}>
				Toggle mounted component
			</button>
		</main>
	);
}

export default App;

import { useState, useEffect } from 'react';

export const FollowMouse = () => {
	const [enabled, setEnabled] = useState(false);
	const [position, setPosition] = useState({ x: -50, y: -50 });

	useEffect(() => {
		const handleMove = (event) => {
			const { clientX, clientY } = event;
			setPosition({ x: clientX, y: clientY });
		};
		if (enabled) {
			window.addEventListener('click', handleMove);
			window.addEventListener('pointermove', handleMove);
		}
		return () => {
			window.removeEventListener('click', handleMove);
			window.removeEventListener('pointermove', handleMove);

			setPosition({ x: -50, y: -50 });
		};
	}, [enabled]);

	return (
		<>
			<div
				style={{
					position: 'absolute',
					backgroundColor: '#09f',
					borderRadius: '50%',
					opacity: 0.8,
					pointerEvents: 'none',
					left: -20,
					top: -20,
					width: 40,
					height: 40,
					transform: `translate(${position.x}px,${position.y}px)`,
				}}
			></div>
			<button
				onClick={(clientX, clientY) => {
					setEnabled(!enabled), setPosition({ x: clientX, y: clientY });
				}}
			>
				{enabled ? 'Deactivate' : 'Activate'} Follow Pointer
			</button>
		</>
	);
};

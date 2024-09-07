import { useState, useEffect, ReactNode } from "react";

function Timer(): ReactNode {
	const [seconds, setSeconds] = useState<number>(0);
	const [minutes, setMinutes] = useState<number>(0);
	const [hours, setHours] = useState<number>(0);
	const [countDown, setCountDown] = useState<boolean>(false);
	const [totalTime, setTotalTime] = useState<number | null>(null);

	useEffect(() => {
		let clickAudio = new Audio("sounds/mixkit-old-camera-shutter-click-1137.wav");
		let alarmAudio = new Audio("sounds/mixkit-classic-short-alarm-993.wav");
		console.log("i am running..");
		setTimeout(() => {
			let hours;
			let remainingMinutes;
			let remainingSeconds;
			if (totalTime && totalTime > 0 && countDown) {
				setTotalTime(totalTime - 1);
				hours = Math.floor(totalTime / 60 / 60);
				remainingMinutes = Math.floor((totalTime / 60) % 60);
				remainingSeconds = Math.floor(totalTime % 60);
				setHours(hours);
				setMinutes(remainingMinutes);
				setSeconds(remainingSeconds);
			}
			if (remainingSeconds == 11) {
				clickAudio.play();
			}
			if (remainingSeconds && remainingSeconds < 6) {
				clickAudio.play();
			}
			if (totalTime == 0) {
				alarmAudio.play();
			}
		}, 1000);
	}, [totalTime, countDown]);

	function startTimer() {
		let minutesInSeconds = minutes * 60;
		let hoursInMinutes = hours * 60;
		let totalTimeInSeconds = hoursInMinutes * 60 + minutesInSeconds + seconds;
		setTotalTime(totalTimeInSeconds);
		console.log("totaltime", totalTimeInSeconds);
		setCountDown(true);
	}

	return (
		<div className="container w-2/3">
			<label htmlFor="seconds" className="input input-bordered flex items-center gap-2">
				Seconds
				<input
					id="seconds"
					title="seconds"
					className="grow"
					type="number"
					name="seconds"
					min="1"
					max="60"
					onChange={(e) => setSeconds(Number(e.target.value))}
				/>
			</label>
			<label htmlFor="minutes" className="input input-bordered flex items-center gap-2">
				Minutes
				<input
					id="minutes"
					title="minutes"
					className="grow"
					type="number"
					name="minutes"
					min="1"
					max="59"
					onChange={(e) => setMinutes(Number(e.target.value))}
				/>
			</label>

			<label htmlFor="hours" className="input input-bordered flex items-center gap-2">
				Hours
				<input
					id="hours"
					title="hours"
					className="grow"
					type="number"
					name="hours"
					min="1"
					max="5"
					onChange={(e) => setHours(Number(e.target.value))}
				/>
			</label>
			<div className="flex justify-evenly gap-2 text-5xl font-bold">
				<div>
					hours: <p>{hours}</p>
				</div>
				<div>
					minutes: <p>{minutes}</p>
				</div>
				<div>
					seconds: <p>{seconds}</p>
				</div>
			</div>
			<button className="btn btn-secondary" onClick={startTimer}>
				Start Timer
			</button>
		</div>
	);
}

export default Timer;

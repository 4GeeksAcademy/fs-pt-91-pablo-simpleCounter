import React, { useEffect, useState } from "react";
import { SecondsCounter } from "./SecondsCounter";

const Home = () => {
	const [isStopped, setIsStopped] = useState(false)
	const [time, setTime] = useState(0)
	const [isCountDown, setIsCountDown] = useState(false)
	const [isTimer, setIsTimer] = useState(false)
	const [selectedTime, setSelectedTime] = useState(undefined)

	const handleStop = (stopState) => {
		setIsStopped(stopState)
	}

	const handleReset = () => {
		
		setIsStopped(false)
		setTime(0)
		setIsCountDown(false)
		setIsTimer(false)
	}

	const startTimer = () => {
		if (isNaN(selectedTime)) {
			alert("Por favor selecciona un número válido")
			return
		}
		handleReset();
		setIsTimer(true);
	}

	const startCountdown = () => {
		if (isNaN(selectedTime)) {
			alert("Por favor selecciona un número válido")
			return
		}
		handleReset();
		setTime(selectedTime)
		setIsCountDown(true)
	}

	useEffect(() => {
		const myInterval = setInterval(() => {
			
			if(isTimer && !isStopped && time == selectedTime) {
				alert("Se acabó el tiempo")
				setIsStopped(true)
				return () => clearInterval(myInterval)
			}

			if(isStopped) setTime(time)
			else if(!isCountDown) setTime(time+1)
			else if(time > 0) setTime(time-1)
		}, 1000);

		return () => clearInterval(myInterval)
	}, [time, isStopped, isCountDown])

	return (
		<div className="container-fluid">
			<SecondsCounter time={time} />
			<div className="d-flex justify-content-center gap-2 my-2">
				<button className="btn btn-danger" onClick={() => handleStop(true)}>Parar</button>
				<button className="btn btn-primary" onClick={() => handleStop(false)}>Continuar</button>
				<button className="btn btn-secondary" onClick={() => handleReset()}>Reiniciar contador</button>
			</div>

			<div className="d-flex justify-content-center gap-2">
				<button className="btn btn-success" onClick={startTimer}>Comenzar temporizador</button>
				<input className="form-control w-auto" type="text" placeholder="segundos" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}/>
				<button className="btn btn-warning" onClick={startCountdown}>Comenzar cuenta regresiva</button>
			</div>
		</div>
	)
};

export default Home;

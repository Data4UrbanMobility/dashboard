import React , {Component } from 'react';
import {getEvents } from '../lib/service.js'

	//update(){
		//console.log('sdsd');
		//let since =new Date(2017,10,12,0);
			//let until =new Date(2017,10,12,24);
			//since.setDate(since.getDate() + 2);
			//until.setDate(until.getDate() + 2);
		//getEvents( since.toISOString(),until.toISOString()).then(res=> {
			//var b = res.json().then(data => { 
				//console.log(data);
			//});
		//})
		//.catch(error => console.log('Error:', error));
	//}




export default (props) => {

	const next = () =>{
		let since = new Date(props.filter.since);
		let until = new Date(props.filter.until);
		since.setDate(since.getDate() + 1);
		until.setDate(until.getDate() + 1);
		props.changeFilter({since:since.toISOString(), until: until.toISOString()});
	}
	const reset = () => {
		props.resetFilter();
		props.unselectSelectedEvent();
	}
	const prev = () => {
		let since = new Date(props.filter.since);
		let until = new Date(props.filter.until);
		since.setDate(since.getDate() - 1);
		until.setDate(until.getDate() - 1);
		props.changeFilter({since:since.toISOString(), until: until.toISOString()});
	}
	//var intervalId = setInterval(this.update, 500);
	const date = props.filter.since.substr(0,10).replace('-','.').replace('-','.');
	return(
			<div className="Play">
				<div className="Play__header">

				</div>
				<div className="Play__prev" onClick={prev}> Prev </div>
				<div className="Play__display"> 
				<div className="Play__currentDate">{date}</div>
				<div className="Play__reset" onClick={reset}> Reset </div>
				</div>
				<div className="Play__next"  onClick={next}> Next </div>
			</div>
	)
}
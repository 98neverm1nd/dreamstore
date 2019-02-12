import React from 'react';
import classes from '../Footer/Footer.module.scss';

class Clocks extends React.Component{
    state = {
        time: ''
      }

      setTime = () => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        if (hours <= 9) {
            hours = '0' + hours;
        }
        if (minutes <= 9) {
            minutes = '0' + minutes;
        }
        if (seconds <= 9) {
            seconds = '0' + seconds;
        }
        let time = hours+':'+minutes+':'+seconds;

        this.setState({time: time});
      }

      componentDidMount(){
        setInterval(this.setTime,1000);
      }
    
    render(){
    return (
        <div className = {classes.Clocks}>
            {this.state.time}
        </div>);
    }
}


export default Clocks;
import React, {Component} from 'react';
import classes from './SearchForm.css';
import Calendar from 'react-calendar';

import calenderIcon from '../../assets/calender.png';

class SearchForm extends Component {
    state = {
        oneWayDate: '',
        returnDate: '',
        oneWayCalenderFlag: false,
        returnCalenderFlag: false
    };

    oneWayCalenderClicked = () => {
        this.setState(prevState => {
            return {
                oneWayCalenderFlag: !prevState.oneWayCalenderFlag
            }
        });
    };

    returnCalenderClicked = () => {
        this.setState(prevState => {
            return {
                returnCalenderFlag: !prevState.returnCalenderFlag
            }
        });
    };

    formatDate = (selectedDate) => {
        let date= selectedDate.getDate();
        let month= selectedDate.getMonth();
        let year= selectedDate.getYear()+1900;
        let formatedDate =  date + '/' + month + '/' + year;

        return formatedDate
    }

    oneWayCalenderChange = oneWayDate => {
        let selectedDate = this.formatDate(oneWayDate);
        this.setState({
            oneWayDate: selectedDate,
            oneWayCalenderFlag: false
        })
    };

    returnCalenderChange = returnDate => {
        let selectedDate = this.formatDate(returnDate);
        this.setState({
            returnDate : selectedDate,
            returnCalenderFlag: false
        })
    };

    render() {
        const {
            oneWayClicked,
            twoWayClicked,
            originChange,
            destinationChange,
            departureDateChange,
            passangerChange
        } = this.props;

        let oneWayCalender = null;
        if (this.state.oneWayCalenderFlag) {
            oneWayCalender = (
                <Calendar
                    onChange={this.oneWayCalenderChange }
                    value={this.state.date}/>
            )
        }

        let returnCalender = null;
        if (this.state.returnCalenderFlag) {
            returnCalender = (
                <Calendar
                    onChange={this.returnCalenderChange}
                    value={this.state.date}/>
            )
        }


        let returnDate = null;
        if (this.props.returnFlightFlag) {
            returnDate = (
                <div className={classes.CalenderWrap}>
                    <input type="text" placeholder="Return date" onChange={this.props.returnDateChange} value={this.state.returnDate} />
                    <img src={calenderIcon} alt="Calender Icon" className={classes.calenderIcon} onClick={this.returnCalenderClicked} />
                    <div className={classes.CalenderBox}>{returnCalender}</div>
                </div>
            )
        }

        return (
            <div className={classes.SearchSection}>
                <div className={classes.BtnWrap}>
                    <span className={classes.Btn} onClick={oneWayClicked}>One Way</span>
                    <span className={classes.Btn} onClick={twoWayClicked}>Two Way</span>
                </div>

                <input type="text" placeholder="Enter Origin" onChange={originChange}/>
                <input type="text" placeholder="Enter Destination" onChange={destinationChange}/>
                <div className={classes.CalenderWrap}>
                    <input type="text" placeholder="Departure date" onChange={departureDateChange} value={this.state.oneWayDate}/>
                    <img src={calenderIcon} alt="Calender Icon" className={classes.calenderIcon} onClick={this.oneWayCalenderClicked} />
                    <div className={classes.CalenderBox}>
                        {oneWayCalender}
                    </div>
                </div>
                {returnDate}
                <input type="number" placeholder="No. of Passanger" onChange={passangerChange}/>

                <button className={classes.SearchBtn}
                        onClick={()=> this.props.onSearch({'oneWayData': this.state.oneWayDate, 'returnDate': this.state.returnDate })}>Search</button>
            </div>
        )
    }
}


export default SearchForm;
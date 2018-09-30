import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import FlightWrapper from '../../components/FlightWrapper/FlightWrapper';
import PriceSlider from '../../components/PriceSlider/PriceSlider'


import classes from './Layout.css';

const jsonData = [
    {
        'pune': {
            'mumbai': {
                '2/8/2018': {
                    'details': {
                        'origin': 'pune',
                        'destination': 'mumbai',
                        'price': '1000',
                        'date': '2/8/2018',
                        'originCode': 'PNQ',
                        'destinationCode': 'BOM',
                        'departureTime': '12 AM',
                        'ArrivalTime': '1 PM',
                        'flightNumber': 'AI 202',
                        'via': null
                    },
                    'details1': {
                        'origin': 'pune',
                        'destination': 'mumbai',
                        'price': '1200',
                        'date': '2/8/2018',
                        'originCode': 'PNQ',
                        'destinationCode': 'BOM',
                        'departureTime': '2 PM',
                        'ArrivalTime': '3 PM',
                        'flightNumber': 'AI 222',
                        'via': null
                    }
                },
                '3/8/2018': {
                    'details': {
                        'origin': 'pune',
                        'destination': 'mumbai',
                        'price': '1100',
                        'date': '3/8/2018',
                        'originCode': 'PNQ',
                        'destinationCode': 'BOM',
                        'departureTime': '12 AM',
                        'ArrivalTime': '1 PM',
                        'flightNumber': 'AI 202',
                        'via': null
                    },
                    'details1': {
                        'origin': 'pune',
                        'destination': 'mumbai',
                        'price': '1300',
                        'date': '3/8/2018',
                        'originCode': 'PNQ',
                        'destinationCode': 'BOM',
                        'departureTime': '2 AM',
                        'ArrivalTime': '3 PM',
                        'flightNumber': 'AI 222',
                        'via': null
                    }
                }
            }
        },
        'mumbai': {
            'pune': {
                '2/8/2018': {
                    'details': {
                        'origin': 'mumbai',
                        'destination': 'pune',
                        'price': '1500',
                        'date': '2/8/2018',
                        'originCode': 'BOM',
                        'destinationCode': 'PNQ',
                        'departureTime': '9 AM',
                        'ArrivalTime': '10 AM',
                        'flightNumber': 'AI 311',
                        'via': null
                    },
                    'details1': {
                        'origin': 'mumbai',
                        'destination': 'pune',
                        'price': '1600',
                        'date': '2/8/2018',
                        'originCode': 'BOM',
                        'destinationCode': 'PNQ',
                        'departureTime': '2 PM',
                        'ArrivalTime': '3 PM',
                        'flightNumber': 'AI 312',
                        'via': null
                    }
                },
                '3/8/2018': {
                    'details': {
                        'origin': 'mumbai',
                        'destination': 'pune',
                        'price': '51',
                        'date': '3/8/2018',
                        'originCode': 'BOM',
                        'destinationCode': 'PNQ',
                        'departureTime': '9 AM',
                        'ArrivalTime': '10 AM',
                        'flightNumber': 'AI 311',
                        'via': null
                    },
                    'details1': {
                        'origin': 'mumbai',
                        'destination': 'pune',
                        'price': '52',
                        'date': '3/8/2018',
                        'originCode': 'BOM',
                        'destinationCode': 'PNQ',
                        'departureTime': '2 PM',
                        'ArrivalTime': '3 PM',
                        'flightNumber': 'AI 312',
                        'via': null
                    }
                }
            }
        }
    }
];

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerDetailsObj: {
                origin: null,
                destination: null,
                departureDate: null,
                returnDate: null,
                passenger: null
            },
            returnFlightFlag: true,
            oneWayflightDetails: null,
            returnflightDetails: null,
            priceSliderValue: 10000
        }
    }

    originUpdateHandler = (e) => {
        const customerDetailsObj = {...this.state.customerDetailsObj};
        customerDetailsObj['origin'] = e.target.value;
        this.setState({
            customerDetailsObj
        });
    };

    destinationUpdateHandler = (e) => {
        const customerDetailsObj = {...this.state.customerDetailsObj};
        customerDetailsObj['destination'] = e.target.value;
        this.setState({
            customerDetailsObj
        });
    };

    departureDateUpdateHandler = (e) => {
        const customerDetailsObj = {...this.state.customerDetailsObj};
        customerDetailsObj['departureDate'] = e.target.value;
        this.setState({
            customerDetailsObj
        });
    };

    returnDateUpdateHandler = (e) => {
        const customerDetailsObj = {...this.state.customerDetailsObj};
        customerDetailsObj['returnDate'] = e.target.value;
        this.setState({
            customerDetailsObj
        });
    };

    passangerUpdateHandler = (e) => {
        const customerDetailsObj = {...this.state.customerDetailsObj};
        customerDetailsObj['passenger'] = e.target.value;
        this.setState({
            customerDetailsObj
        });
    };

    oneWayClickHandler = () => {
        this.setState({
            returnFlightFlag: false
        });
    };

    twoWayClickHandler = () => {
        this.setState({
            returnFlightFlag: true
        })
    };

    onSearchHandler = (dateValues) => {
        const searchObj = {...this.state.customerDetailsObj};

        if(dateValues.oneWayData){
            searchObj.departureDate = dateValues.oneWayData || '';
        }

        if(dateValues.returnDate){
            searchObj.returnDate = dateValues.returnDate || '';
        }

        const oneWayflightDetails = this.fetchOneWayFlightDetailsObj(searchObj);
        const returnflightDetails = this.fetchReturnFlightDetailsObj(searchObj);

        this.setState({
            oneWayflightDetails,
            returnflightDetails
        });
    };

    fetchOneWayFlightDetailsObj = (searchObj) => {
        let oneWayflightDetails = jsonData.map(detail => {

            if (!detail[searchObj['origin']]) {
                return null;
            }
            if (!detail[searchObj['origin']][searchObj['destination']]) {
                return null;
            }
            if (!detail[searchObj['origin']][searchObj['destination']][searchObj['departureDate']]) {
                return null;
            }
            return detail[searchObj['origin']][searchObj['destination']][searchObj['departureDate']];

        });
        return oneWayflightDetails[0];
    };

    fetchReturnFlightDetailsObj = (searchObj) => {
        let returnflightDetails = jsonData.map(arr => {

            if (!arr[searchObj['destination']]) {
                return null;
            }
            if (!arr[searchObj['destination']][searchObj['origin']]) {
                return null;
            }
            if (!arr[searchObj['destination']][searchObj['origin']][searchObj['returnDate']]) {
                return null;
            }
            return arr[searchObj['destination']][searchObj['origin']][searchObj['returnDate']];

        });

        return returnflightDetails[0];
    };

    priceUpdateHandler = (value) => {
        console.log(value);
        this.setState({
            priceSliderValue: value
        })
    };

    render() {
        return (
            <div className={classes.Layout}>
                <Header />

                <div className={classes.Container}>
                    <div>
                        <SearchForm
                            originChange={this.originUpdateHandler}
                            destinationChange={this.destinationUpdateHandler}
                            departureDateChange={this.departureDateUpdateHandler}
                            returnDateChange={this.returnDateUpdateHandler}
                            passangerChange={this.passangerUpdateHandler}
                            onSearch={this.onSearchHandler}
                            oneWayClicked={this.oneWayClickHandler}
                            twoWayClicked={this.twoWayClickHandler}
                            returnFlightFlag={this.state.returnFlightFlag}/>

                        <PriceSlider sliderValue={this.state.priceSliderValue}
                                     priceUpdate={this.priceUpdateHandler} />
                    </div>


                    <FlightWrapper
                        customerDetailsObj={this.state.customerDetailsObj}
                        returnFlight={this.state.returnFlightFlag}
                        priceSliderValue={this.state.priceSliderValue}
                        oneWayflightDetails={this.state.oneWayflightDetails}
                        returnflightDetails={this.state.returnflightDetails}/>
                </div>
            </div>
        )
    }
}

export default Layout;
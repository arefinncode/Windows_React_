import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


 ReactDOM.render(<App />, document.getElementById('root'));
 registerServiceWorker();



function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('body1')
);



// fahrenheit and celsius in windows final.

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
// signature of the invoking method tryConvert(temperature, toCelsius)
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
/*

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

*/

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    // this method establishes the value to target element.
    // From where the change was made i.e. target.
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    // when a new change/ update is made it is propagated to
    // render method which calls trycovert method.

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;

        // default scale and temperature value
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}



ReactDOM.render(
    <Calculator2/>,
    document.getElementById('body2')
);



// Facny Border

// FancyBorder- is class  name
function FancyBorder(props) {


    console.log("props: ");
    console.log(props);

    console.log("props.children: ");
    console.log(props.children);

    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

// Anything "inside the <FancyBorder> JSX tag" gets passed into the FancyBorder
// component as a children prop. Since FancyBorder renders {props.children}
// inside a <div>, the passed elements appear in the final output.

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>

            <p>test</p>

            <p>test</p>
        </FancyBorder>
    );
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('body3')
);


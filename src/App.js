import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        deaths: null,
        confirmed: null,
        recovered: null,
        loading: true
    };

    async componentDidMount() {

        try {
            const response = await fetch('https://enrichman.github.io/covid19/world/full.json');
            const data = await response.json();
            this.setState({
                deaths: data.deaths,
                confirmed: data.confirmed,
                recovered: data.recovered,
                loading: false
            })
        } catch (e) {
            console.log(e);
        }
    }

    componentWillUnmount() {
        console.log('Will unmount');
    }

    handleInput = event => {
        const value = event.target.value;
        this.setState({ count: value });
    }


    render() {
        if (this.state.loading) {
            return (<div>Cargando los datos de hoy...</div>)
        }
        return (
            <>
                <div> Muertes:  {this.state.deaths} </div>
                <div> Casos confirmados:  {this.state.confirmed} </div>
                <div> Recuperados:  {this.state.recovered} </div>

            </>
        )

    }

}

export default App;
import React from 'react';
import 'bulma';
// import './style.scss';


class clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
        this.timer = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        let time = this.state.time;
        return (
            <div className="app">
                <h1 style={{ color: 'green' }}>
                    {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
                </h1>
            </div>
        );
    }
}
export default clock
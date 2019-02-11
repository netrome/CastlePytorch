import React from "react";

export class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
            <h1>Fantastic gradients</h1>
            <h4>and where to find them.</h4>
            <br /><br />
            <p className='clock'>{this.state.date.toLocaleTimeString()}.</p>
            </div>
        );
    }
}


export function BulletSlide (props){
    const title = props.title
    const items = props.items
    const listItems = items.map((item) => 
        <li key={item.toString()}>{item}</li>
    )
    return (
        <div className="slide">
        <h1>{title}</h1>
        <ul>{listItems}</ul>
        </div>
    );
}

export function ImageSlide (props){
    return <div className="imageSlide"><img src={props.src} className={props.extras}/></div>
}



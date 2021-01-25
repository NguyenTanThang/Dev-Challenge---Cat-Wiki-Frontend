import React, { Component } from 'react'

export default class ProgressBar extends Component {

    renderProgress = () => {
        const {progressNum} = this.props;
        let data = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= progressNum) {
                data.push(
                    <div className="progress__item active"></div>
                )
            } else {
                data.push(
                    <div className="progress__item"></div>
                )
            }
        }

        return data;
    }

    render() {
        return (
            <div className="progress">
               {this.renderProgress()}
            </div>
        )
    }
}

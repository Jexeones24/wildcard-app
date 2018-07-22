import React, { Component } from 'react';
import { buildWorkoutObject } from './util';

class Workout extends Component {
  constructor() {
    super();

    this.state = {
      time: 8,
      workout: {}
    };
  }

  handleTimeChange = (e) => {
    this.setState({ time: e.target.value });
  }

  buildWorkout = () => {
    const time = Number(this.state.time);
    const workout = buildWorkoutObject(time);

    this.setState({ workout });
  }

  renderReps = (reps) => {
    if (Array.isArray(reps)) {
      return (
        <div>
          { reps.map((rep, idx) => <h4 key={idx}>{rep}</h4>) }
        </div>
      );
    }

    return (
      <div>
        <h4>{reps}</h4>
      </div>
    );
  }

  render() {
    const {
      title,
      repsWithLoads: reps,
      workoutFormatToString: format,
    } = this.state.workout;

    return (
      <React.Fragment>
        <div>
          <div>
            <input
              type='number'
              min={8}
              max={60}
              onChange={this.handleTimeChange}
              value={this.state.time}
            />
            <button onClick={this.buildWorkout}>
              NEW WORKOUT
            </button>
          </div>
        </div>
        { this.state.workout &&
          <div>
            <h1>{ title }</h1>
            <h2>{ format }</h2>
              { this.renderReps(reps) }
          </div>
        }
      </React.Fragment>
    );
  }
};

export default Workout;

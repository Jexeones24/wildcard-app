import React, { Component } from 'react';
import { buildWorkoutObject } from '../../util/buildFullWorkout';

class Workout extends Component {
  constructor() {
    super();

    this.state = {
      timeDomain: 8,
      workout: {}
    };
  }

  handleTimeDomainChange = (e) => {
    this.setState({ timeDomain: e.target.value });
  }

  buildWorkout = () => {
    const timeDomain = Number(this.state.timeDomain);
    const workout = buildWorkoutObject(timeDomain);

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
              onChange={this.handleTimeDomainChange}
              value={this.state.timeDomain}
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

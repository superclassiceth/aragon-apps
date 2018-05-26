import React from 'react'
import { Trail, config as springs } from 'react-spring'
import SurveyOption from './SurveyOption'
import { percentageList } from '../../math-utils'

const ANIM_DELAY_MIN = 100
const ANIM_DELAY_MAX = 300

class SurveyOptions extends React.Component {
  static defaultProps = {
    options: [],

    // animationDelay can also be a number to disable the random delay
    animationDelay: { min: ANIM_DELAY_MIN, max: ANIM_DELAY_MAX },
  }
  state = {
    animate: false,
  }
  componentDidMount() {
    const { animationDelay } = this.props

    const delay = Number.isInteger(animationDelay)
      ? animationDelay
      : animationDelay.min +
        Math.random() * (animationDelay.max - animationDelay.min)

    // animate after a delay
    this._transitionTimer = setTimeout(() => {
      this.setState({ animate: true })
    }, delay)
  }
  componentWillUnmount() {
    clearTimeout(this._transitionTimer)
  }
  render() {
    const { options, totalPower } = this.props
    const { animate } = this.state

    const percentages = percentageList(options.map(o => o.power / totalPower))

    return (
      <Trail
        from={{ showProgress: 0 }}
        to={{ showProgress: Number(animate) }}
        keys={options.map(option => option.label)}
        native
      >
        {options.map((option, i) => ({ showProgress }) => (
          <SurveyOption
            key={option.optionId}
            showProgress={showProgress}
            config={springs.stiff}
            value={Math.floor(option.power / totalPower * 100) / 100}
            percentage={percentages[i]}
            {...option}
          />
        ))}
      </Trail>
    )
  }
}

export default SurveyOptions
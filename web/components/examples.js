import { connect } from 'react-redux'
import Clock from './clock'
import Counter from './counter'
import DataList from './data-list'
import { useDispatch } from 'react-redux'
import useInterval from '../lib/useInterval'
import { startClock } from '../store'
function Examples({ lastUpdate, light }) {
  const dispatch = useDispatch()
  useInterval(() => {
    dispatch(startClock())
  }, 1000)
  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <DataList />
    </div>
  )
}

function mapStateToProps(state) {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Examples)

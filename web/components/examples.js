import { connect } from 'react-redux'
import Clock from './clock'
import Counter from './counter'
// import DataList from './data-list'
import { useDispatch } from 'react-redux'
import useInterval from '../lib/useInterval'
// import { startClock } from '../store'
function Examples({ lastUpdate, light,placeholderData }) {
  // const dispatch = useDispatch()
  // useInterval(() => {
  //   dispatch(startClock())
  // }, 1000)
  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
    </div>
  )
}

function mapStateToProps(state) {
  const { lastUpdate, light ,placeholderData} = state
  return { lastUpdate, light ,placeholderData}
}

export default connect(mapStateToProps)(Examples)

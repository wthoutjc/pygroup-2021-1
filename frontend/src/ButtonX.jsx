const ButtonX = (props) => {
  const { dispatch } = props
  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    </>
  )
}

export default ButtonX

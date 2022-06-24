import UseRefreshToken from "../hooks/refreshToken"

function payment() {

  const refresh = UseRefreshToken()
  return (
    <div>
      <h2>payment</h2>
      <button onClick={() => refresh()}>refresh</button>
    </div>
  )
}

export default payment
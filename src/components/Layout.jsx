import Header from './Header'

const layout = ({children}) => {
  return (
    <>
      <Header>
        {children}
      </Header>
    </>
  )
}

export default layout
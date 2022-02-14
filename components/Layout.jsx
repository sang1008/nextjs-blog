import SideBar from "./SideBar"
import Meta from "./meta"

const Layout = (props) =>{
  const { models = [], title } = props

  const modelsObj = {}

  models.forEach(item=>{
    modelsObj[item.configKey] = item.configValue
  })

  return (
    <div className='flex h-screen'>
      <Meta {...modelsObj} title={ title } />
      <SideBar />
      <main className='flex-1'> { props.children } </main>
    </div>
  )
}

export default Layout
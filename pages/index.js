import Layout from '../components/Layout'
import { websiteInfo } from '../api'
import { useState } from 'react'


export default function Index({models}) {

  const [value,setValue] = useState('')

  const handleSubmit = ()=>{
    setValue('')
  }

  const handleInput = (e)=> setValue(e.target.value)

  return (
    <Layout models={models} title='首页'>
      123123
      <input value={value} onInput={handleInput} />
      <button onClick={handleSubmit}>clear</button>
    </Layout>
  )
}

export const getStaticProps = async ()=>{
	const res = await websiteInfo()
  const { models } = res
	return {
		props:{
			models
		}
	}
}
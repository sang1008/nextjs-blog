import Layout from "../../components/Layout"

import { websiteInfo } from "../../api"

export default function Friend ({models}){
    return (
        <Layout models={models} title='友人帐'>
            这是 友人帐 页
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
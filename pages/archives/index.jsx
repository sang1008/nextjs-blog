import Layout from "../../components/Layout"

import { websiteInfo } from "../../api"

export default function Archives({models}){
    return (
        <Layout models={models} title='归档'>
            这是 归档 页
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
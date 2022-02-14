import Layout from "../../components/Layout"

import { websiteInfo } from "../../api"

export default function Tags({models}){
    return (
        <Layout models={models} title='标签墙'>
            这是标签页
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
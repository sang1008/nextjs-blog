import Layout from "../../components/Layout"

import { websiteInfo } from "../../api"

export default function Categories({models}){
    return (
        <Layout models={models} title='分类'>
            这是 分类 页
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
import Head from 'next/head'

export default function Meta({ name, title, description, content }) {
  return (
    <Head>
      <title>{ title } - { name }</title>
      <meta name='description' content={description} />
      <meta name='content' content={content} />
    </Head>
  )
}
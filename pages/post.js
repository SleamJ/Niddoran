import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

const Post = (props) => (
    <Layout>
       <div className="container">
        <h1 className="text-center">{props.show.name}</h1><br/><hr/>
        <div className="row">
          <div className="col-md-4">
            <img src={props.show.image.medium}/>
          </div>
          <div className="col-md-8">
            <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
          </div>
        </div>
        <hr/>
       </div>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
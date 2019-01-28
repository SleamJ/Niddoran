import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Index = (props) => (
    <div>
        <Layout>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center">Top films you can find here!</h1><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu diam sed nisi dictum blandit. Sed at fermentum purus. Fusce nisl ante, efficitur vel tortor eu, egestas ornare orci.</p> 
                </div>
            </div>
        </Layout>

        <div>
            <ul className="list-group">
                {props.shows.map(({show}) => (
                    <li className="list-group-item " key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                    </li>
                ))}
            </ul>
        </div>

    </div>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=vikings')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      shows: data
    }
  }

export default Index
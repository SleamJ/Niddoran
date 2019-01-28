import Layout from '../components/Layout'

const containerStyle = {
    textAlign: 'center',
}

const index = () => (
    <Layout>
        <div>
            <div className="container">
                <h2 className="text-center">Contact Us</h2><br/>
                <h5 className="text-center">Contact us from custom quote</h5>
                <form style={containerStyle}>
                    <br/><br/>
                    <input type="text" placeholder="Your name"/>
                    <br/><br/>
                    <input type="text" placeholder="Your E-mail address"/>
                    <br/><br/>
                    <input type="text" placeholder="Your Number"/>
                    <br/><br/>
                    <textarea rows="4" cols="50" placeholder="Tipe your message here...">
                    
                    </textarea><br/><br/>
                    <input type="button" value="submit"/>
                    <br/><br/>
                </form>
            </div>
        </div>
    </Layout>
)

export default index
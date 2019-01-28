import Layout from '../components/Layout'


let styles = {
    borderRadius: '50%',
    width: '250px',
    height: '250px',
    backgroundColor: 'gray',
    marginLeft: '215px',
    marginTop: '70px',
};

const index = () => (
    <div>
        <Layout />
        <div>
            <h2 className="text-center">- Our Mission -</h2>
            <h4 className="text-center">To provide the most actionable app store data</h4><br/><br/>

            <h2 className="text-center">About</h2><br/>
            <p className="container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare metus a turpis mattis pretium. Vivamus a elit mollis risus tempor ullamcorper. Morbi pulvinar semper purus, sit amet sodales arcu egestas ac. Nunc tristique eros lorem, id dapibus odio efficitur vitae. Sed vel felis elementum, placerat turpis sit amet, consequat nisi. Phasellus molestie, arcu imperdiet vehicula porta, tortor nunc tempor odio, a hendrerit est metus et ligula. Sed porta tincidunt tortor, id aliquet tortor fermentum non. Integer sed nunc lorem. Pellentesque porta, nisi vel facilisis interdum, ligula quam tincidunt sapien.mcorper. Morbi pulvinar semper purus, sit amet sodales arcu egestas ac. Nunc tristique eros lorem, id dapibus odio efficitur vitae. Sed vel felis elementum, placerat turpis sit amet, consequat nisi. Phasellus molestie, arcu imperdiet vehicula porta, tortor nunc tempor odio, a hendrerit est metus et ligula. Sed porta 
            </p><br/>
            <h2 className="text-center">Leadership</h2><br/>
            <div className="container">
                <div className="row">
                    <div class="col-md-6" style={styles}></div>
                    <div class="col-md-6" style={styles}></div>
                </div>
                
            </div>

        </div>
    </div>
)

export default index
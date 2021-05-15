import React from 'react'
import Wrapper from '../Wrapper'
import image from '../../data/images/Colin.jpg'

function Intro() {
    return (

        <Wrapper>
            <div class="container">
                <div class="row" style={{marginBottom: "30px"}}>
                    <div class="col-md-6">
                        <img class="img-fluid shadow-lg" src={image} alt="Colins Image" style={{height: "auto"}} />
                    </div>
                    <div class="col-md-6 border shadow" style={{paddingTop: "80px;"}}>
                        <h1 class="text-center">This is Colin's Page</h1>
                        <h2 class="text-center text-muted">It's a work in progress...</h2>
                        <p class="text-center text-muted">More to Come...</p>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12">
                        <div class="card shadow">
                            <div class="card-header text-center">
                                <h3>General Info</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <h3>I'm migrating info from the following page...</h3>
                                    <a href="https://sites.google.com/view/cobell206/home">Colin Bell</a> 
                                    <br />
                                    <br />
                                    <h3>Contact Info</h3>
                                    <h5>Email: cobell206@gmail.com</h5>
                                    <h5>Phone Number: 206-708-4883</h5>
                                    <a href="https://github.com/cobell206">github</a>
                                    <br />
                                    <a href="https://www.linkedin.com/in/cobell206/">linkedin</a>
                                    <br />
                                    <a href="ColinBell_Resume.pdf">Resume</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </Wrapper>
        
    )
}

export default Intro
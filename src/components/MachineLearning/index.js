import React from 'react'
import image from '../../data/images/machine_learning.png'

function MLblock() {
    return (
        <div class="container">
        <div class="row" style={{marginBottom: "30px"}}>
            <div class="col-md-12">
                <div class="card shadow">

                    {/* <!-- Card Header -->
                    <!-- Need to fill this in with new links --></div> */}
                    <div class="card-header text-center">
                        <h3>Machine Learning</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">

                            {/* <!-- Image --> */}
                            <div class="col-md-6">
                                <img class="img-fluid" src={image} alt="Machine Learning" />
                            </div>

                            {/* <!-- List of pages --> */}
                            <div class="col-md-6">
                                <h3 class="text-center text-muted">Click below to read about a project</h3>
                                <ul class="list-group text-center borderless">
                                    <li class="list-group-item" style={{border: "none"}}><a href="https://sites.google.com/view/cobell206/machine-learning/predictive-machine-maintenance">Predictive Machine Maintenance </a></li>
                                    <li class="list-group-item" style={{border: "none"}}><a href="https://drive.google.com/file/d/1F4pSxYqrYVdaMlBziJVfxmtj1uqKrSQc/view">SVD on Yale Faces</a></li>
                                    <li class="list-group-item" style={{border: "none"}}><a href="https://drive.google.com/file/d/1wXYljh74gMgrmJLrA2Wfa200s0b8bvew/view">PCA for Image Tracking</a></li>
                                    <li class="list-group-item" style={{border: "none"}}><a href="https://drive.google.com/file/d/1RYk6He23OEbkevvtABxkDm-jtFuOVrbt/view">Song Recognition</a></li>
                                    <li class="list-group-item" style={{border: "none"}}><a href="https://drive.google.com/file/d/1KpCkbnc1Zz9nkd4en-XsxpmYC_x-M9qU/view">Social Media and Stock Price Prediction</a></li>
                                    <li class="list-group-item" style={{border: "none"}}><a href="https://drive.google.com/file/d/1qREeWhm7CedPA1wvmJURChs50918H3rc/view">Letter Detection via Neural Network</a></li>
                                    <li class="list-group-item" style={{border: "none"}}><a href="https://drive.google.com/file/d/1-uMmoB81_E9_yQx0w1HxVejoF6AIPRP0/view">DMD to Remove Video Backgrounds</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default MLblock
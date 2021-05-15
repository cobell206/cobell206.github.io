import React from 'react'

function Project(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='card'>
                    <div className='card-header'>
                        {props.title}
                    </div>
                    <div className='card-body'>
                        {/* <h4>Overview</h4> */}
                        <p className='card-text m-1'>Overview: {props.overview}</p>
                        <a href={props.githubLink} class="btn btn-primary m-1">Github Repo</a>
                        <a href={props.deployedLink} class="btn btn-primary m-1">Deployed Site</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Project
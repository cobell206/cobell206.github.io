import React from 'react'
import Project from '../Project'
import Wrapper from '../Wrapper'

const data = [
    {
        "title": "Employee Data Tracker",
        "overview": "This project allows you to sort and filter on fake employee data.",
        "githubLink": "https://github.com/cobell206/UW_homework_19",
        "deployedLink": "https://lit-bastion-60012.herokuapp.com"
    },
    {
        "title": "Fitness Tracker",
        "overview": "This project allows a user to track their activities and view their previous workouts.",
        "githubLink": "https://github.com/cobell206/UW_homework_17",
        "deployedLink": "https://mysterious-basin-31617.herokuapp.com/?id=609726fb61ea9e0015cc7eb5"
    },
    {
        "title": "GrammaGram",
        "overview": "This project is for our wonderful grandparents to use a social media platform with very large text",
        "githubLink": "https://github.com/rsowald/GrammaGram",
        "deployedLink": "https://boiling-savannah-28129.herokuapp.com/login"
    },
    {
        "title": "Tech Blog",
        "overview": "This project was to create a tech blog for users to be able to post and comment about their tech interests",
        "githubLink": "https://github.com/cobell206/UW_homework_14",
        "deployedLink": "https://secret-oasis-35874.herokuapp.com/login"
    }
  ]

function Bootcamp() {
    return (
        <Wrapper>
            <Project 
      title={data[0].title}
      overview={data[0].overview}
      githubLink={data[0].githubLink}
      deployedLink={data[0].deployedLink}
    />,
    <Project 
      title={data[1].title}
      overview={data[1].overview}
      githubLink={data[1].githubLink}
      deployedLink={data[1].deployedLink}
    />,
    <Project 
      title={data[2].title}
      overview={data[2].overview}
      githubLink={data[2].githubLink}
      deployedLink={data[2].deployedLink}
    />,
    <Project 
      title={data[3].title}
      overview={data[3].overview}
      githubLink={data[3].githubLink}
      deployedLink={data[3].deployedLink}
    />
        </Wrapper>
        
    )
}

export default Bootcamp
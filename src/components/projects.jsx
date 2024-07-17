import project1 from '../assets/YT.bmp'
import project2 from '../assets/sunlight.bmp'
import project3 from '../assets/panto.bmp'
import project4 from '../assets/tattoo.bmp'
import project5 from '../assets/ecommerce.bmp'
import project6 from '../assets/ruskasatelier.bmp'
const Projects = () => {


    const projects = [
        {
            name:'YT',
            photo: project1,
            link:'https://gega-jikuridze.github.io/YT/'
        },
        {
            name:'SunLight',
            photo: project2,
            link:'https://gega-jikuridze.github.io/SunLight/'
        },
        {
            name:'Panto',
            photo: project3,
            link:'https://gega-jikuridze.github.io/Panto/'
        },
        {
            name:'Tattoo Studio',
            photo: project4,
            link:'https://gega-jikuridze.github.io/Tattoo-studio/'
        },
        {
            name:'ecommerce',
            photo: project5,
            link:'https://gega-jikuridze.github.io/New-Project-Ecommerce/'
        },
        {
            name:'Atelier',
            photo: project6,
            link:'https://ruskas-atelier.vercel.app/'
        },
    ]


    return <div className="projects container">
        {projects.map((el, index) => (
            <a href={el.link} key={index} target="_blank" rel="noreferrer">
                <img src={el.photo} alt="Project" />
                <h1>{el.name}</h1>
            </a>
        ))}
    </div>
}

export default Projects
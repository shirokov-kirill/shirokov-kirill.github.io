import './css/Body.css'
import About from './AboutSection.js'
import Experience from './ExperienceSection.js'
import Contacts from './ContactsSection.js'

function Body() {
    return(
        <div className="body-wrapper">
            <About/>
            <Experience/>
            <Contacts/>
        </div>
    )
}

export default Body
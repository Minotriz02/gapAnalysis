import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Home.css"
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="px-4 py-5 text-center container-page">
            <h1 className="display-5 fw-bold text-light shadow-text">LGA Dashboard</h1>
            <div className="col-lg-10 mx-auto">
                <p className="lead mb-4 text-light shadow-text">Traditional farmer varieties (“landraces”) are a foundation of subsistence agriculture and are among the most important genetic resources for contemporary plant breeding (Camacho Villa et al., 2005). Major international ex situ collections have been established following collecting missions especially during the 1970s-90s to collect landrace diversity led by the IBPGR/IPGRI, particularly from the primary regions of diversity of crops worldwide, also called Vavilov centers (Khoury et al. 2016). In the period 1974-2012, such efforts resulted in over 225,000 plant samples of ca. 4,300 species collected during more than 500 collecting missions (Thormann et al., 2015). As a result, the 11 international genebanks managed by CGIAR centers are among the largest, most diverse, and most widely used of the world's ex situ collections, with ~700K accessions currently conserved (CGIAR Genebank Platform, 2019), complementing the important national collections conserved around the world.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link type="button" className="btn btn-primary btn-lg px-4 text-white" to="/maptools">Go to Map Tools <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>
            </div>
        </div >
    )
}

export default Home;
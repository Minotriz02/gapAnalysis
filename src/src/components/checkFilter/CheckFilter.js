import './CheckFilter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function CheckFilter(props) {

    return (
        <div className="mt-1">
            {props.title}
            <div className="mb-2 d-flex justify-content-between align-items-center">
                <div class="position-relative w-100">
                    <span class="position-absolute search"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></span>
                    <input class="form-control w-100" placeholder="Search by name..." />
                </div>
            </div>
            <div class="table-responsive" style={{ height: "170px" }}>
                <table class="table table-responsive table-borderless table-striped">
                    <tbody>
                        <tr>
                            <th scope="row"><input class="form-check-input" type="checkbox" /></th>
                            <td><img src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png" width="25" /> Banana</td>
                        </tr>
                        <tr>
                            <th scope="row"><input class="form-check-input" type="checkbox" /></th>
                            <td><img src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png" width="25" /> Rice</td>
                        </tr>
                        <tr>
                            <th scope="row"><input class="form-check-input" type="checkbox" /></th>
                            <td><img src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png" width="25" /> Bean</td>
                        </tr>
                        <tr>
                            <th scope="row"><input class="form-check-input" type="checkbox" /></th>
                            <td><img src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png" width="25" /> Coofe</td>
                        </tr>
                        <tr>
                            <th scope="row"><input class="form-check-input" type="checkbox" /></th>
                            <td><img src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png" width="25" /> Rice-2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="container horizontal-scrollable">
                <div class="row text-center">
                    <div className='col-xs-4'>
                        <img src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png" width="25" /> Rice-2
                    </div>
                    <div className='col-xs-4'>
                        <img src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png" width="25" /> Rice-2
                    </div>
                    <div className='col-xs-4'>
                        <img src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png" width="25" /> Rice-2
                    </div>
                    <div className='col-xs-4'>
                        <img src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png" width="25" /> Rice-2
                    </div>
                    <div className='col-xs-4'>
                        <img src="https://ciat.shinyapps.io/LGA_dashboard/_w_ff143018/crops_icons/banana.png" width="25" /> Rice-2
                    </div>
                </div>
            </div>

        </div >
    )
}

export default CheckFilter;
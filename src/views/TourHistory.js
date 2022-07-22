import './TourHistory.scss';
import { Link } from 'react-router-dom'

const TourHistory = () => {
  return (
    <div className="Tour-History">
      <h3>My tours</h3>
      <Link to="/addTour">
        <button type="button">Add Tour+</button>
      </Link>
      <div className="Tour-History-Content">
        <table>
          <tr className="TourHistory-Head">

            <th> Tour Name </th>
            <th> Details </th>
            <th> Prices </th>
            <th> Date of Tours </th>
            <th> Actions </th>

          </tr>
          <tr>
            <td>6D5N South Cebu Tours</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Orci nulla pellentesque dignissim enim sit amet venenatis urna.</td>
            <td>4399.66</td>
            <td>07.22.2022</td>
            <td>
              <div className="Tour-History__actions">
                <td><img className="Tour-History__actions__edit" src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png" alt="data1" /></td>
                <td><img className="Tour-History__actions__delete" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="data2" /></td>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default TourHistory
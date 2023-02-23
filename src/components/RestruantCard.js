import { IMG_CDN_URL } from "../constants"
const RestrauntCard = ({name, cuisines, cloudinaryImageId, deliveryTime}) =>{
    {/**const {name, cuisines, cloudinaryImageId, deliveryTime} = restaurant; Destructure to make code clean */}
   return (
    <div className="card">
        <img alt="card-image" src={IMG_CDN_URL+cloudinaryImageId}/>
        <h3>{name}</h3>{/*optional chainging data?.name (if name not exits*/}
        <h4>{cuisines.join(',')}</h4>{/** join array element with "," e.g:Burgers,Snacks */}
        <h5>Delivery Time: {deliveryTime} minutes</h5>
    </div>
)}

export default RestrauntCard 
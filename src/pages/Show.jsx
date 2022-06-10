import { useParams } from "react-router"
import Reviews from "../components/Reviews"

export default function Show ({therapists, createReview, updateReview, deleteReview, url, getTherapists}) {
    
    const { id } = useParams()

    const therapist = therapists?.find((therapist)=> therapist._id === id)
    


    return (
        <div className="show-wrapper">
            <h1>{therapist.name}</h1>
            <div>
                <img style={{maxWidth:"100px"}} src={therapist.portrait} alt={therapist.name} />
            </div>
            <div className="description">
                <h2>About me</h2>
                <p>{therapist.description}</p>
            </div>
            <div className="specialties">
                <h2>Specialties</h2>
                <ul>
                    {therapist.tags.map(tag=>{
                        return(
                            <li key={tag}>{tag}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="contact">
                    <h2>Contact Information</h2>
                    <p>{therapist.phoneNumber}</p>
                    <p>{therapist.adress}</p>
            </div>
            <Reviews reviews={therapist.reviews}
            //  createReview={createReview} updateReview={updateReview} deleteReview={deleteReview} 
            url={url}
            getTherapists={getTherapists}
            id={id}
            />
        </div>
    )
}
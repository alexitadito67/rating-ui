import { useState } from "react"

function Rating(){
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = () => {
        console.log("Enviado calificación:", rating)
        setSubmitted(true)
    }

    const closeModal = () => {
        setSubmitted(false)
        setRating(0)
    }

    const feedbackMessage = ["Terrible", "Poor", "Fair", "Good", "Excellent"]

    return(
        <div className="rating-container">
            <h2>Rate Your Experience!</h2>
            <div className="stars">
                {[1,2,3,4,5].map((star) => (
                    <span
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        className={`star ${star <= (hover || rating) ? 'active' : ''}`}
                    >
                        {'\u2605'}
                    </span>
                ))}
            </div>
            {rating > 0 && <p className="feedback">{feedbackMessage[rating - 1]}</p>}
            <button
                className="submit-btn"
                onClick={handleSubmit}
                disabled={rating === 0}
            >
                Submit
            </button>
            {
                submitted && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <h2>Thank you!</h2>
                            <p>You rated us {rating} star{rating > 1 ? 's' : ''}</p>
                            <button
                                onClick={closeModal}
                                className="close-btn"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Rating
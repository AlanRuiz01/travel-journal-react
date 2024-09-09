import data from '../data/data.jsx'
import './Section.css'
const Section = () => {

    const datos = data.map((item) => {
        return (
            <div key={item.id} className='locations'>
                <img src={item.imageUrl} alt={item.title} />
                <div className='details'>
                    <p><img src="/images/location-logo.svg" alt="location-logo" className='location-logo' /> {item.location} <span className='link'><a href={item.googleMapsUrl}>View on Google Maps</a></span></p>
                    <h2>{item.title}</h2>
                    <p className='bold'>{item.startDate} - {item.endDate}</p>
                    <p>{item.description}</p>
                </div>
            </div>
        )
    })

    return (
        <section>
            {datos}
        </section>
    )
}

export default Section

import user from './../images/user.jpg'
import './Galery.css'

function Card() {
    return (
        <div class="card">
            <img src={user} class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>

                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
    );
}

function Galery() {
    return (
        <div className='bg-secondary'>
            <div className='row'>
                <div className='col'> <Card /></div>
                <div className='col'> <Card /></div>
                <div className='col'> <Card /></div>

            </div>

        </div>

    );
}

export default Galery;
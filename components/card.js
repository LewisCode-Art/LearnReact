import React from 'react'
import styles from './CardStyles.module.css'

function Card() {
    return (
        <div>
            <div className={`card ${styles.cardWidth}`}>

                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <img className={`card-img-left ${styles.cardImg}`} src="./assets/1.jpg" alt="Card image cap" />
                        </div>

                        <div className="col-6">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card

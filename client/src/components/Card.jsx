import React from "react";
import Styles from "./Card.module.css";
import { Link } from "react-router-dom"
import { FcPlus } from "react-icons/fc";


export function Card({ name, img, types, id }) {

    return (
        <div className={Styles.Container}>

            <div className={Styles.nombre}>
                <h2>{name?.toUpperCase()}</h2>
            </div>

            <div className={Styles.Card}>
                <div>{
                    img === " "?
                    <img src="https://i.pinimg.com/236x/bb/65/ac/bb65acb8eced7c4a1fbce90916211e80--sticker-vinyl-car-decals.jpg" alt="img"/>:
                    <img src={img} className={Styles.img} alt="img not found" />
                    }
                </div>
            </div>

            <div className={Styles.footerCard}>

                <div className={Styles.tipos}>
                    <h4>
                        {
                            types?.map((type, i) =>
                                <h3 key={i}>
                                    {`✔ ${type.name.toUpperCase()}`}
                                </h3>)
                        }
                    </h4>
                    <div className={Styles.position}>
                        <Link to={`/${id}`} >
                            <button className={Styles.bnt}> <FcPlus /> </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Card;
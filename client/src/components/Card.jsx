import React from "react";
import Styles from "./Card.module.css";


export function Card({ name, img, types,  }) {
    
    return (
        <div className={Styles.Container}>
            <div className={Styles.Card}>
                
            <div className={Styles.fondoimg}>
                <img src={img} className={Styles.img} alt="img not found"  />
            </div>
                <div className={Styles.nombre}>
                <h2>{name?.toUpperCase()}</h2>
                </div>

            <div className={Styles.tipos}>
                <h4>{types?.map((type, i) =>
                    <h3 key={i}>
                        {`✔ ${type.name.toUpperCase()}`}
                    </h3>)
                }
                </h4>
            </div>
           </div>
        </div>
    )
}
export default Card;
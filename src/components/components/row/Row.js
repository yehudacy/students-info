import "./row.css";

export function Row({ firstName, lastName, age, city, hobby, phoneNumber }) {
    return (
        <div className="row">
            <div className="first-name cell">{firstName}</div>
            <div className="last-name cell">{lastName}</div>
            <div className="age cell">{age}</div>
            <div className="city cell">{city}</div>
            <div className="hobby cell">{hobby}</div>
            <div className="phone-number cell">{phoneNumber}</div>
        </div>
    );
}

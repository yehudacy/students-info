export function TableHeaders({handleSort, sortBy, arrowDown}) {
    return (
        <div className="row">
            <div className="first-name cell" onClick={() => handleSort("firstName")}>
                <b>first name</b>{sortBy === "firstName" && (arrowDown > 0 ? <>&#x2193;</> : <>&#x2191;</>)}
            </div>
            <div className="last-name cell" onClick={() => handleSort("lastName")}>
                <b>lastName</b>{sortBy === "lastName" && (arrowDown > 0 ? <>&#x2193;</> : <>&#x2191;</>)}
            </div>
            <div className="age cell" onClick={() => handleSort("age")}>
                <b>age</b>{sortBy === "age" && (arrowDown > 0 ? <>&#x2193;</> : <>&#x2191;</>)}
            </div>
            <div className="city cell" onClick={() => handleSort("city")}>
                <b>city</b>{sortBy === "city" && (arrowDown > 0 ? <>&#x2193;</> : <>&#x2191;</>)}
            </div>
            <div className="hobby cell" onClick={() => handleSort("hobby")}>
                <b>hobby</b>{sortBy === "hobby" && (arrowDown > 0 ? <>&#x2193;</> : <>&#x2191;</>)}
            </div>
            <div className="phone-number cell" onClick={() => handleSort("phoneNumber")}>
                <b>phoneNumber</b>{sortBy === "phoneNumber" && (arrowDown > 0 ? <>&#x2193;</> : <>&#x2191;</>)}
            </div>
        </div>
    );
}

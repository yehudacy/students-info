import { useState } from "react";
import { Row } from "../row/Row";
import { TableHeaders } from "../tableHeaders/TableHeaders";

export function Table({data}) {

    const [sortBy, setSortBy] = useState("");
    const [arrowDown, setArrowDown] = useState(-1);

   



    const handleSort = (field) => {
        setSortBy(field);
        setArrowDown(arrowDown * -1);
    }

    if(sortBy !== ""){
        if(sortBy === "age"){
            data.sort((studentA, studentB) => 
                (studentA.age - studentB.age) * arrowDown
            )
        } else {
            data.sort((studentA, studentB) => 
                studentA[sortBy].localeCompare(studentB[sortBy]) * arrowDown
            )
        }
    }

    return (
        <div>
            <TableHeaders handleSort={handleSort} sortBy={sortBy} arrowDown={arrowDown}/>
            {data.map((stu) => {
                return <Row 
                    key={stu.phoneNumber}
                    firstName={stu.firstName}
                    lastName={stu.lastName}
                    age={stu.age}
                    hobby={stu.hobby}
                    city={stu.city}
                    phoneNumber={stu.phoneNumber}
                />
            })}
        </div>
    );
}

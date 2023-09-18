import { useEffect, useState } from "react";
import { FilterData } from "../filterData/FilterData";
import { Header } from "../header/Header";
import { Table } from "../table/Table";
import axios from "axios";

export function MainPage({ message }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [filterTerm, setFilterTerm] = useState("");

  const [filterAge, setFilterAge] = useState("0 120");

  console.log(data);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://students-api-sgnv.onrender.com/"
        );
        setData(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  const filterAgeArr = filterAge.split(" ");

  const filteredData = data.filter((student) => {
    return (
      student.age >= Number(filterAgeArr[0]) &&
      student.age <= Number(filterAgeArr[1]) &&
      (student.firstName.toLowerCase().includes(filterTerm.toLowerCase()) ||
        student.lastName.toLowerCase().includes(filterTerm.toLowerCase()) ||
        student.city.toLowerCase().includes(filterTerm.toLowerCase()) ||
        student.phoneNumber.toLowerCase().includes(filterTerm.toLowerCase()) ||
        student.hobby.toLowerCase().includes(filterTerm.toLowerCase()))
    );
  });

  const handleTerm = ({ target }) => {
    setFilterTerm(target.value);
  };

  const handleSelect = ({ target }) => {
    setFilterAge(target.value);
  };

  return (
    <div>
      <Header />
      <FilterData
        filterTerm={filterTerm}
        handleTerm={handleTerm}
        filterAge={filterAge}
        handleSelect={handleSelect}
      />
      {loading ? <div>loding</div> : <Table data={filteredData} />}
    </div>
  );
}

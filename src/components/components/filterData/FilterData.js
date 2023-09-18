export function FilterData({filterTerm, handleTerm, filterAge, handleSelect}) {




    return (
        <div>
            search
            <input value={filterTerm} onChange={handleTerm}/>
            <select value={filterAge} onChange={handleSelect}>
                <option value={"0 120"}>all ages</option>
                <option value={"20 25"}>20 - 25</option>
                <option value={"26 30"}>26 - 30</option>
                <optionv value={"31 35"}>31 - 35</optionv>
                <option value={"36 40"}>36 - 40</option>
            </select>
        </div>
    );
}

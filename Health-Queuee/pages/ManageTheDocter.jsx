import { useState } from "react";
import { Button } from "react-bootstrap";

const ManageTheDocter = () => {

    //search Docter
    function SearchDocter() {
        const [SearchName, SetSearchName] = useState('')
        const items = [
            { id: 1, name: 'นายแพทย์	ธีรวัฒน์ วรธนันท์' },
            { id: 2, name: 'แพทย์หญิง กานต์สินี ไพศาลสกุล' },
            { id: 3, name: 'นายแพทย์	พงศกร รัตนโกสินทร์' },
            { id: 4, name: 'แพทย์หญิง อารยา ศิริพัฒนากุล' }
        ]

        const handleSearchChange = (event) => {
            SetSearchName(event.target.value)
        }

        const filteredItems = items.filter((item) =>
            item.name.toLowerCase().includes(SearchName.toLowerCase())
        )
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Search..."></input>
            </div>
            <div>
                <div></div>
                <div></div>
                <Button></Button>
            </div>
            <div></div>
            <div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default ManageTheDocter;
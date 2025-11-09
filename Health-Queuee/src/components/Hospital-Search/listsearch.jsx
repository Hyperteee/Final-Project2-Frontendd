import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import hospitalData from "../../data/listhospital";
import stateData from "../../data/liststate";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge'
import BTSstations from "../../data/btsstation";
import resolveAssetPath from "../../utils/assetPath.js";



export default function Listsearch() {
  const { state } = useLocation();
  const { selectedstate } = state || {};
  const [stateValue, setStateValue] = useState(selectedstate || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const [letterSearch, setLetterSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState([])
  const searchSection = useRef(null);
  const navigate = useNavigate();
  const hospitalThai = "โรงพยาบาล";
  const [selectedHospitalType, setSelectedHospitalType] = useState(["โรงพยาบาลรัฐ", "โรงพยาบาลเอกชน"]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedStars, setSelectedStars] = useState([]);
  const userLocation = { lat: 13.8591, lng: 100.5616 }
  const [selectedHospital, setSelectedHospital] = useState(null)


  // ฟังชั่นคำนวน

  function getDistance(lat1, lng1, lat2, lng2) {
    const kmPerDegreeLat = 111
    const kmPerDegreeLng = 111 * Math.cos((lat1 * Math.PI) / 180)
    const dLat = lat2 - lat1
    const dLng = lng2 - lng1
    return Math.sqrt(
      dLat * dLat * kmPerDegreeLat * kmPerDegreeLat +
      dLng * dLng * kmPerDegreeLng * kmPerDegreeLng
    );
  }

  function getNearestBTS(hospital, btsList) {
    let nearest = null;
    let minDistance = Infinity;
    btsList.forEach((bts) => {
      const dist = getDistance(hospital.location.lat, hospital.location.lng, bts.lat, bts.lng);
      if (dist < minDistance) {
        minDistance = dist;
        nearest = bts;
      }
    })
    return { station: nearest, distance: minDistance.toFixed(2) }
  }

const filteredHospitalList = hospitalData
  .filter((hospital) => {
    const matchesState = hospital.state === stateValue;
    const matchesType = selectedHospitalType.includes(hospital.type);
    const matchesStars =
      selectedStars.length === 0 ||
      selectedStars.some((s) => hospital.stars >= s);

    return matchesState && matchesType && matchesStars;
  }).map((hospital) => {
    const nearestBTS = getNearestBTS(hospital, BTSstations)
    const distanceFromUser = getDistance(
      userLocation.lat,
      userLocation.lng,
      hospital.location.lat,
      hospital.location.lng)
    return { ...hospital, nearestBTS, distanceFromUser: distanceFromUser}
  }).filter((hospital) => {
    if (selectedTag.includes("nearBTS")) {
      return hospital.nearestBTS.distance < 2;
    }
    return true;
  }).sort((a, b) => {
    if (selectedTag.includes("popular")) return b.reviews - a.reviews;
    if (selectedTag.includes("nearMe")) return a.distanceFromUser - b.distanceFromUser
    if (selectedTag.includes("nearBTS")) return a.nearestBTS.distance - b.nearestBTS.distance;
    
    return 0;
  });

  // /////////////     กดปิดdropdown          ////////////////////////////////////
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchSection.current && !searchSection.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // /////////////     กดเลือกจังหวัดใหม่         ////////////////////////////////////
  function handleSelect(state) {
    setStateValue(state);
    setShowDropdown(false);
    navigate("/hospitals", { state: { selectedstate: state } });
  }

  // /////////////     กดเลือกอะไรไปหน้าไหน ส่งค่าอะไร          ////////////////////////////////////
  function handleHospital(hospital) {
    navigate("/queue1", { state: { selectedHospital: hospital } });
  }



  // /////////////     dropdownแสดงค่าอะไร      ////////////////////////////////////
  const filteredStates = stateData.filter((s) =>
    s.toLowerCase().includes(letterSearch.toLowerCase())
  );

  const filteredHospitals = hospitalData.filter(
    (h) =>
      h.name.toLowerCase().includes(letterSearch.toLowerCase()) ||
      hospitalThai.includes(letterSearch)
  );

  function highlightText(text) {
    const search = letterSearch.toLowerCase();
    const lowerText = text.toLowerCase();
    const startIndex = lowerText.indexOf(search);

    if (startIndex === -1 || search === "") return text;

    const before = text.slice(0, startIndex);
    const match = text.slice(startIndex, startIndex + search.length);
    const after = text.slice(startIndex + search.length);

    return (
      <>
        {before}
        <span className="text-blue-500 font-bold">{match}</span>
        {after}
      </>
    );
  }
  
  function handleHospital(hospital){
        setSelectedHospital(hospital)
        navigate("/queue1", { state: { selectedHospital: hospital, showDropdown: false } })
    }














  return (
    <div className="max-w-4xl mx-auto px-8 text-center mb-5 pt-10">
      <h2 className="text-4xl font-bold text-black m-10 mb-15 text-center ml-27">
        ค้นหาโรงพยาบาล {stateValue} ( {filteredHospitalList.length} )
      </h2>




      {/*****************  ส่วนของ search ******************/}
      <div className="flex gap-4 justify-center mt-10 mb-4">
        <div
          ref={searchSection}
          className="d-flex border-1 border-primary rounded-3 position-relative"
          style={{ width: "100%", boxSizing: "border-box" }}
        >
          <i
            className="bi bi-search"
            style={{
              padding: "10px",
              background: "dodgerblue",
              color: "white",
              minWidth: "50px",
              textAlign: "center",
            }}
          ></i>

          <input
            type="text"
            placeholder={stateValue}
            name="hospital"
            value={letterSearch}
            onFocus={() => setShowDropdown(true)}
            onChange={(e) => setLetterSearch(e.target.value)}
            style={{ width: "100%", padding: "10px", outline: "5px" }}
          />
          
          {showDropdown && (
            <ul
              className="absolute bg-white border border-gray-300 mt-5 rounded-xl max-h-48 overflow-y-auto shadow-lg text-left"
              style={{ width: "100%", zIndex: 10 }}
            >
              {letterSearch ? (
                <>
                  {filteredHospitals.length > 0 &&
                    filteredHospitals.map((hospital, index) => (
                      <li
                        key={`hospital-${index}`}
                        onClick={() => handleHospital(hospital)}
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                      >
                        โรงพยาบาล{highlightText(hospital.name)}{" "}
                        <span className="text-gray-500">({hospital.state})</span>
                      </li>
                    ))}

                  {filteredStates.map((state, index) => (
                    <li
                      key={`state-${index}`}
                      onClick={() => handleSelect(state)}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    >
                      {highlightText(state)}
                    </li>
                  ))}
                </>
              ) : (
                filteredStates.map((state, index) => (
                  <li
                    key={`state-${index}`}
                    onClick={() => handleSelect(state)}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {state}
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
        
        <Button variant="primary" onClick={() => handleSelect(letterSearch)}>
          ค้นหา
        </Button>
      </div>
      <div className="d-flex mb-5 gap-3 justify-content-center">
        {/* ตัวกรองมี รัฐ เอกชน ดาว */}
        <Button variant="primary" className="rounded-5" onClick={handleShow}><i className="bi bi-filter-left"></i> ตัวกรอง</Button>

        <Button className={selectedTag.find((tag)=> tag == "popular") ? "rounded-5 border-2 bg-primary-subtle text-primary" : "rounded-5 border-primary bg-light text-primary"}
          onClick={()=>setSelectedTag(prev => prev.includes("popular") ?  prev.filter(tag => tag !== "popular"): [...prev, "popular"])}>{selectedTag.find((tag)=> tag == "popular") ? <><i class='bi bi-check-lg'></i>คนจองเยอะ</> :" คนจองเยอะ"}</Button>

        <Button className={selectedTag.find((tag)=> tag == "nearMe") ? "rounded-5 border-2 bg-primary-subtle text-primary" : "rounded-5 border-primary bg-light text-primary"}
          onClick={()=>setSelectedTag(prev => prev.includes("nearMe") ?  prev.filter(tag => tag !== "nearMe"): [...prev, "nearMe"])}>{selectedTag.find((tag)=> tag == "nearMe") ? <><i class='bi bi-check-lg'></i>ใกล้ฉัน</> :" ใกล้ฉัน"}</Button>

        <Button className={selectedTag.find((tag)=> tag == "nearBTS") ? "rounded-5 border-2 bg-primary-subtle text-primary" : "rounded-5 border-primary bg-light text-primary"}
          onClick={()=>setSelectedTag(prev => prev.includes("nearBTS") ?  prev.filter(tag => tag !== "nearBTS"): [...prev, "nearBTS"])}>{selectedTag.find((tag)=> tag == "nearBTS") ? <><i class='bi bi-check-lg'></i>ใกล้BTS</> :" ใกล้BTS"}</Button>

        {/* <Button className={selectedTag.find((tag)=> tag == "doctorAvailable") ? "rounded-5 border-2 bg-primary-subtle text-primary" : "rounded-5 border-primary bg-light text-primary"}
          onClick={()=>setSelectedTag(prev => prev.includes("doctorAvailable") ?  prev.filter(tag => tag !== "doctorAvailable"): [...prev, "doctorAvailable"])}>{selectedTag.find((tag)=> tag == "doctorAvailable") ? <><i class='bi bi-check-lg'></i>มีหมอพร้อมนัด</> :" มีหมอพร้อมนัด"}</Button> */}
      </div>

      {/* **************** ตัวกรอง ****************** */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="bg-primary text-light" closeButton>
          <Modal.Title className="fw-bold">ตัวกรอง</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fw-bold">ประเภทของโรงพยาบาล</p>
          <Form>
              {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                    inline
                    label="โรงพยาบาลรัฐ"
                    name="โรงพยาบาลรัฐ"
                    type="checkbox"
                    id="type-state"
                    checked={selectedHospitalType.includes("โรงพยาบาลรัฐ")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedHospitalType((prev) => [...prev, "โรงพยาบาลรัฐ"]);
                      } else {
                        setSelectedHospitalType((prev) => prev.filter((t) => t !== "โรงพยาบาลรัฐ"));
                      }
                    }}
                  />

                  <Form.Check
                    inline
                    label="โรงพยาบาลเอกชน"
                    name="โรงพยาบาลเอกชน"
                    type="checkbox"
                    id="type-private"
                    checked={selectedHospitalType.includes("โรงพยาบาลเอกชน")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedHospitalType((prev) => [...prev, "โรงพยาบาลเอกชน"]);
                      } else {
                        setSelectedHospitalType((prev) => prev.filter((t) => t !== "โรงพยาบาลเอกชน"));
                      }
                    }}
                  />

              </div>
              
            ))}
            
          </Form>


          <p className="fw-bold">คะแนนรีวิว</p>
                <Form>
                  {[5, 4, 3, 2, 1].map((num) => (
                    <Form.Check
                      key={num}
                      
                      type="checkbox"
                      id={`star-${num}`}
                      label=
                          {Array.from({ length: num }).map((_, i) => (
                            <i key={i} className="bi bi-star-fill text-warning"></i>
                          ))
                          
                      }
                      checked={selectedStars.includes(num)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedStars((prev) => [...prev, num]);
                        } else {
                          setSelectedStars((prev) => prev.filter((s) => s !== num));
                        }
                      }}
                    />
                  ))}

             
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> 
        </Modal.Footer>
      </Modal>


      {filteredHospitalList.length > 0 ? 
/////////////////////////// แสดงlistของรพที่ผ่านการกรองแล้ว
          (
      filteredHospitalList.map((hospital, index) => (
          <div
            key={index}
            className="rounded-4 d-flex p-3 justify-content-start mx-auto border-2 border-primary mt-3 bg-white shadow-sm"
            style={{ width: "800px" }}>
            <img
              src={resolveAssetPath(hospital.logo)}
              alt="hospital logo"
              className="rounded-3"
              style={{ width: "120px", height: "100px", objectFit: "cover" }}
            />


            <div className="d-flex flex-column flex-1 ms-3">

              <div className="d-flex justify-content-between align-items-start">

                <div>
                  <p className="fw-bold mb-1 fs-5">โรงพยาบาล{hospital.name}</p>
                  <div className="d-flex align-items-center mb-1 gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i
                        key={i}
                        
                        className={
                          i < Math.floor(hospital.stars)
                            ? "bi bi-star-fill text-warning"
                            : i < hospital.stars
                            ? "bi bi-star-half text-warning"
                            : "bi bi-star text-secondary"
                        }
                      ></i>
                    ))}
                    <span className="text-muted ms-2">
                      ({hospital.reviews} รีวิว)
                    </span>
                    
                  </div>
                  {hospital.nearestBTS.distance < 2 && selectedTag.includes("nearBTS") &&(
                    <div className="d-flex">
                      <i class="bi bi-train-front-fill text-primary"></i>
                      <span className="text-secondary">
                        &nbsp;ใกล้ สถานี{hospital.nearestBTS.station.name} ({hospital.nearestBTS.distance} กม.)
                      </span>

                    </div>
                      
                  )}
                  {selectedTag.includes("nearMe") && (
                    <div className="d-flex">
                      <i className="bi bi-geo-alt-fill text-primary"></i>
                      <span className="text-secondary">
                        &nbsp;ห่างจากฉัน {hospital.distanceFromUser.toFixed(2)} กม.
                      </span>
                    </div>
                  )}

                  
              </div>

                <div className="d-flex align-items-end align-items-center">
                  <div className="d-flex flex-column px-2">
                    <span className="text-dark fw-bold">
                      {hospital.stars > 4.5
                        ? "ดีเยี่ยม"
                        : hospital.stars > 4
                        ? "ดีมาก"
                        : hospital.stars > 3.5
                        ? "ดี"
                        : "พอใช้"}
                    </span>

                  </div>
                  
                  <span className="badge bg-primary-subtle text-primary fs-5 px-2 py-2">
                    {hospital.stars.toFixed(1)}
                  </span>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-2">
                <p className="mb-0 text-primary text-decoration-underline cursor-pointer">
                  ดูบนแผนที่
                </p>
                <Button variant="primary" style={{ height: "40px" }} onClick={() => handleHospital(hospital.name)}>
                  นัดหมายแพทย์
                </Button>
              </div>
            </div>
          </div>

      ))
    )
  : (
    
  <p>ไม่พบโรงพยาบาล</p>
)}

    </div>
  );
}

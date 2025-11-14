// ======= Sample Data =========
const hospitalData = [
  { name: "โรคกระเพราะ", state: "กรุงเทพ", type: "โรงพยาบาลรัฐ", stars: 4.5, reviews: 120, location: {lat: 13.7563, lng:100.5018}, logo:"  " },
  { name: "สมิติเวช", state: "กรุงเทพ", type: "โรงพยาบาลเอกชน", stars: 4.8, reviews: 200, location: {lat: 13.749, lng:100.534} , logo:"  "},
  { name: "รามคำแหง", state: "กรุงเทพ", type: "โรงพยาบาลรัฐ", stars: 4.0, reviews: 80, location: {lat: 13.756, lng:100.569} , logo:"  "}
];
const stateData = ["กรุงเทพ", "ชลบุรี", "เชียงใหม่"];
const BTSstations = [
  {name: "สยาม", lat:13.746, lng:100.534},
  {name: "อโศก", lat:13.730, lng:100.565}
];

const userLocation = { lat: 13.8591, lng: 100.5616 };

let selectedTag = [];
let selectedHospitalType = ["โรงพยาบาลรัฐ","โรงพยาบาลเอกชน"];
let selectedStars = [];
let letterSearch = "";

const searchInput = document.getElementById("search-input");
const searchDropdown = document.getElementById("search-dropdown");
const hospitalListEl = document.getElementById("hospital-list");

function getDistance(lat1, lng1, lat2, lng2){
  const kmPerDegreeLat = 111;
  const kmPerDegreeLng = 111 * Math.cos((lat1 * Math.PI) / 180);
  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;
  return Math.sqrt(dLat*dLat*kmPerDegreeLat*kmPerDegreeLat + dLng*dLng*kmPerDegreeLng*kmPerDegreeLng);
}

function getNearestBTS(hospital){
  let nearest = null;
  let minDistance = Infinity;
  BTSstations.forEach(bts=>{
    const dist = getDistance(hospital.location.lat,hospital.location.lng,bts.lat,bts.lng);
    if(dist < minDistance){
      minDistance = dist;
      nearest = bts;
    }
  });
  return {station: nearest, distance: minDistance.toFixed(2)};
}

function highlightText(text){
  if(!letterSearch) return text;
  const search = letterSearch.toLowerCase();
  const lowerText = text.toLowerCase();
  const startIndex = lowerText.indexOf(search);
  if(startIndex === -1) return text;
  const before = text.slice(0,startIndex);
  const match = text.slice(startIndex,startIndex+search.length);
  const after = text.slice(startIndex+search.length);
  return `${before}<span class="text-primary fw-bold">${match}</span>${after}`;
}

function renderDropdown(){
  if(!letterSearch){
    searchDropdown.style.display="none";
    return;
  }
  searchDropdown.innerHTML="";
  const filteredHospitals = hospitalData.filter(h => h.name.toLowerCase().includes(letterSearch.toLowerCase()));
  const filteredStates = stateData.filter(s=>s.toLowerCase().includes(letterSearch.toLowerCase()));

  filteredHospitals.forEach(h=>{
    const li = document.createElement("li");
    li.innerHTML = highlightText(h.name)+" ("+h.state+")";
    li.onclick = ()=> {
      letterSearch=h.name;
      renderHospitals();
      searchDropdown.style.display="none";
    };
    searchDropdown.appendChild(li);
  });

  filteredStates.forEach(s=>{
    const li = document.createElement("li");
    li.innerHTML = highlightText(s);
    li.onclick = ()=>{
      letterSearch = s;
      renderHospitals();
      searchDropdown.style.display="none";
    };
    searchDropdown.appendChild(li);
  });

  searchDropdown.style.display = "block";
}

function renderHospitals(){
  let list = hospitalData
    .filter(h=> selectedHospitalType.includes(h.type))
    .filter(h=> selectedStars.length===0 || selectedStars.some(s=>h.stars>=s))
    .filter(h=> h.name.toLowerCase().includes(letterSearch.toLowerCase()) || h.state.includes(letterSearch));

  list = list.map(h=>{
    const nearestBTS = getNearestBTS(h);
    const distanceFromUser = getDistance(userLocation.lat,userLocation.lng,h.location.lat,h.location.lng);
    return {...h, nearestBTS, distanceFromUser};
  });

  if(selectedTag.includes("popular")) list.sort((a,b)=>b.reviews-a.reviews);
  if(selectedTag.includes("nearMe")) list.sort((a,b)=>a.distanceFromUser-b.distanceFromUser);
  if(selectedTag.includes("nearBTS")) list.sort((a,b)=>a.nearestBTS.distance-b.nearestBTS.distance);

  hospitalListEl.innerHTML="";
  if(list.length===0){
    hospitalListEl.innerHTML="<p class='text-center'>ไม่พบโรงพยาบาล</p>";
    return;
  }

  list.forEach(h=>{
    const card = document.createElement("div");
    card.className="hospital-card";

    card.innerHTML=`
      <img src="${h.logo}" alt="${h.name}">
      <div>
        <p class="fw-bold">${highlightText(h.name)}</p>
        <div>
          ${"★".repeat(Math.floor(h.stars))}${h.stars%1>=0.5?"½":""}
          (${h.reviews} รีวิว)
        </div>
        ${selectedTag.includes("nearBTS")?`<div>ใกล้ BTS ${h.nearestBTS.station.name} (${h.nearestBTS.distance} กม.)</div>`:""}
        ${selectedTag.includes("nearMe")?`<div>ห่างจากฉัน ${h.distanceFromUser.toFixed(2)} กม.</div>`:""}
      </div>
    `;
    hospitalListEl.appendChild(card);
  });
}

searchInput.addEventListener("input", e=>{
  letterSearch = e.target.value;
  renderDropdown();
});

document.addEventListener("click", e=>{
  if(!e.target.closest(".search-section")) searchDropdown.style.display="none";
});

document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const tag = btn.getAttribute("data-tag");
    if(selectedTag.includes(tag)) selectedTag = selectedTag.filter(t=>t!==tag);
    else selectedTag.push(tag);
    btn.classList.toggle("active");
    renderHospitals();
  });
});

renderHospitals();

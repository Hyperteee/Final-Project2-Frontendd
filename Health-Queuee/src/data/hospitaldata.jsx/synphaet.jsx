import dataIcon from "../../../images/icon-department/icon-department";

const synphaet_ramintra = {
    id: 2,
    name: "โรงพยาบาลสินแพทย์",
    state: "กรุงเทพมหานคร",
    type: "โรงพยาบาลเอกชน",
    logo: "images/logohospital/synphaet.png",
    stars: 4.2,
    reviews: 153,
    location: { lat: 13.7620, lng: 100.5673 },
    district: "ห้วยขวาง",

    departments: [
        {
            name: "อายุรกรรม",
            logo: dataIcon.ayurkum,
            doctors: [
                {
                    name: "นพ. พงษ์พัฒน์ กล่ำอยู่สุข",
                    specialization: "อายุรแพทย์ทั่วไป",
                    schedule: [
                        { day: "จันทร์", time: "10:00 - 11:00", isBooked: false },
                        { day: "พุธ", time: "14:00 - 15:00", isBooked: false },
                    ],
                },
                {
                    name: "พญ. ปรียาภรณ์ ใจใส",
                    specialization: "อายุรแพทย์โรคไต",
                    schedule: [
                        { day: "อังคาร", time: "09:00 - 10:00", isBooked: false },
                        { day: "ศุกร์", time: "13:00 - 14:00", isBooked: false },
                    ],
                },
                {
                    name: "นพ. ดุษฎี เซี่ยงหลอ",
                    specialization: "อายุรแพทย์โรคหัวใจ",
                    schedule: [
                        { day: "พฤหัสบดี", time: "08:00 - 09:00", isBooked: false },
                        { day: "เสาร์", time: "10:00 - 11:00", isBooked: false },
                    ],
                },
            ],
        },
        {
            name: "ศัลยกรรม",
            logo: dataIcon.surgery,
            doctors: [
                {
                    name: "นพ. วรวิทย์ พัฒนา",
                    specialization: "ศัลยกรรมทั่วไป",
                    schedule: [
                        { day: "จันทร์", time: "13:00 - 14:00", isBooked: false },
                        { day: "พุธ", time: "08:00 - 09:00", isBooked: false },
                    ],
                },
                {
                    name: "พญ. เสาวรส ภู่แก้ว",
                    specialization: "ศัลยกรรมกระดูกและข้อ",
                    schedule: [
                        { day: "อังคาร", time: "10:00 - 11:00", isBooked: false },
                    ],
                },
            ],
        },
        {
            name: "กุมารเวชกรรม",
            logo: dataIcon.child,
            doctors: [
                {
                    name: "พญ. กินรี สรพิพัฒน์เจริญ",
                    specialization: "กุมารแพทย์ทั่วไป",
                    schedule: [
                        { day: "จันทร์", time: "08:00 - 09:00", isBooked: false },
                        { day: "พฤหัสบดี", time: "14:00 - 15:00", isBooked: false },
                    ],
                },
                {
                    name: "นพ. ธีรพงศ์ ว่องวิภาสมิตกุล",
                    specialization: "โรคภูมิแพ้ในเด็ก",
                    schedule: [
                        { day: "ศุกร์", time: "10:00 - 11:00", isBooked: false },
                    ],
                },
            ],
        },
        {
            name: "สูตินรีเวชกรรม",
            logo: dataIcon.woman,
            doctors: [
                {
                    name: "พญ. อริสรา คุปตารักษ์",
                    specialization: "สูติแพทย์ทั่วไป",
                    schedule: [
                        { day: "อังคาร", time: "13:00 - 14:00", isBooked: false },
                    ],
                },
                {
                    name: "พญ. กัญญาพัชร วรรธโนรมณ์",
                    specialization: "การตั้งครรภ์ความเสี่ยงสูง",
                    schedule: [
                        { day: "พุธ", time: "09:00 - 10:00", isBooked: false },
                    ],
                },
            ],
        },
        {
            name: "หัวใจ",
            logo: dataIcon.heart,
            doctors: [
                {
                    name: "นพ. ดุษฎี เซี่ยงหลอ",
                    specialization: "อายุรแพทย์โรคหัวใจ",
                    schedule: [
                        { day: "จันทร์", time: "09:00 - 10:00", isBooked: false },
                    ],
                },
                {
                    name: "นพ. อภิชัย บำรุง",
                    specialization: "สวนหัวใจและหลอดเลือด",
                    schedule: [
                        { day: "อังคาร", time: "10:00 - 11:00", isBooked: false },
                    ],
                },
            ],
        },
    ],
};

export default synphaet_ramintra;
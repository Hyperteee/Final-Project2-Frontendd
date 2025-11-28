import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            dasdwad: "{t('')}",
            nav_home: "HOME",
            nav_about: "ABOUT US",
            nav_dept: "DEPARTMENT",
            nav_pages: "PAGES",
            btn_book: "BOOK AN APPOINTMENT",
            hero_title: "Easy Appointments ",
            hero_title1: "Fast Queue",
            hero_subtitle: "Book your doctor's appointment easily.",
            hero_subtitle1: "Professional healthcare for your family.",
            hero_btn_booking: "Bookings",
            hero_btn_signup: "Sign Up",
            top_doctors: "Top Doctors",
            see_all: "See All",
            pkg_title: "Packages",
            pkg_subtitle: "and Promotions",
            select_type: "Select Category",
            search: "Search",
            search_placeholder: "Search packages...",
            details: "Details",
            book_now: "Book Now",
            footer_contact: "Contact",
            footer_products: "Products",
            footer_company: "Company"
        }
    },
    th: {
        translation: {
            dasdwad: "{t('')}",
            nav_home: "หน้าหลัก",
            nav_about: "เกี่ยวกับเรา",
            nav_dept: "แผนก",
            nav_pages: "หน้าเพจ",
            btn_book: "นัดหมายแพทย์",
            hero_title: "นัดหมายง่าย",
            hero_title1: "จองคิวรวดเร็ว",
            hero_subtitle: "จองคิวนัดหมายแพทย์ได้ง่ายๆ",
            hero_subtitle1: "บริการสุขภาพระดับมืออาชีพเพื่อครอบครัวของคุณ",
            hero_btn_booking: "จองคิว",
            hero_btn_signup: "ลงทะเบียน",
            top_doctors: "แพทย์แนะนำ",
            see_all: "ดูทั้งหมด",
            pkg_title: "แพ็กเกจ",
            pkg_subtitle: "และโปรโมชั่น",
            select_type: "เลือกประเภท",
            search: "ค้นหา",
            search_placeholder: "ค้นหาแพ็กเกจ...",
            details: "รายละเอียด",
            book_now: "จองเลย",
            footer_contact: "ติดต่อเรา",
            footer_products: "ผลิตภัณฑ์",
            footer_company: "บริษัท"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // ภาษาเริ่มต้น
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
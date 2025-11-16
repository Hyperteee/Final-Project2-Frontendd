const [role, setRole] = useState(null); // 👈 เก็บ role ของคนที่ login
const [password, setPassword] = useState(""); // ยังไม่ใช้แต่เผื่ออนาคต
import toast, { Toaster } from 'react-hot-toast';

const Userslist = [
  { Number: "003", role: "user" },
  { Number: "002", role: "admin" },
  { Number: "001", role: "superadmin" },
];

const handleLogin = (e) => {
  e.preventDefault();
  console.log("Login attempt:", { email, password, rememberMe });

  const foundUser = mockUsers.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );

  if (!foundUser) {
    toast.error("ไม่พบบัญชีผู้ใช้ในระบบ (ลองใช้ user/admin/superadmin)");
    return;
  }

  setRole(foundUser.role);

  setShowOtp(true);

  toast.success(
    `ส่ง OTP ไปยังอีเมลของคุณแล้ว (Role: ${foundUser.role.toUpperCase()})`
  )
};

toast.success(`ยืนยัน OTP สำเร็จ! Role ของคุณคือ ${role}`);

    if (role === "user") {
      navigate("/Profile");
    } else if (role === "admin") {
      navigate("/ProfileHistory");
    } else if (role === "superadmin") {
      navigate("/ProfilePrivacy");
    } else {
      navigate("/");
    }

export default function Userspass() {
  return (
    <div>
    </div>
  )
}

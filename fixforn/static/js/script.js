
// ==================================
// 1. ระบบแสดงและซ่อนรหัสผ่าน
// ==================================

// ดึงช่องรหัสผ่านจาก HTML
const passwordInput = document.getElementById("password");

// ดึงช่องทำเครื่องหมายแสดงรหัสผ่าน
const showPassword = document.getElementById("showPassword");

// ตรวจสอบว่าผู้ใช้กดช่องแสดงรหัสผ่านหรือไม่
showPassword.addEventListener("change", function () {

    if (showPassword.checked) {

        // แสดงรหัสผ่าน
        passwordInput.type = "text";

    } else {

        // ซ่อนรหัสผ่าน
        passwordInput.type = "password";

    }

});
// ==================================
// 2. ระบบตรวจสอบข้อมูลก่อนเข้าสู่ระบบ
// ==================================

// ดึงแบบฟอร์มเข้าสู่ระบบจาก HTML
const loginForm = document.getElementById("loginForm");

// ตรวจสอบเมื่อผู้ใช้กดปุ่มเข้าสู่ระบบ
loginForm.addEventListener("submit", function (event) {

    // ป้องกันไม่ให้หน้าเว็บรีเฟรช
    event.preventDefault();

    // รับค่าชื่อผู้ใช้
    const username = document.getElementById("username").value.trim();

    // รับค่ารหัสผ่าน
    const password = passwordInput.value;

    // ตรวจสอบประเภทผู้ใช้งาน
    const selectedRole = document.querySelector('input[name="role"]:checked');

    // ตรวจสอบว่ากรอกชื่อผู้ใช้หรือไม่
    if (username === "") {
        alert("กรุณากรอกชื่อผู้ใช้");
        return;
    }

    // ตรวจสอบว่ากรอกรหัสผ่านหรือไม่
    if (password === "") {
        alert("กรุณากรอกรหัสผ่าน");
        return;
    }

    // ตรวจสอบว่าเลือกประเภทผู้ใช้งานหรือไม่
    if (!selectedRole) {
        alert("กรุณาเลือกประเภทผู้ใช้งาน");
        return;
    }

    // แจ้งว่ากรอกข้อมูลครบแล้ว
    alert("กรอกข้อมูลครบแล้ว พร้อมเข้าสู่ระบบ");

});

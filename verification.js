function form_submit() {
    // const student = {};

    const std_name = document.getElementById("std_name");
    const f_name = document.getElementById("f_name");
    const m_name = document.getElementById("m_name");

    const std_ph = document.getElementById("std_ph").value.trim();
    const parent_ph = document.getElementById("parent_ph").value.trim();
    const std_mail = document.getElementById("std_mail").value.trim();

    const p_pin = document.getElementById("p_pin").value.trim(); //Permanent address PIN
    const c_pin = document.getElementById("c_pin").value.trim(); //Current address PIN


    const percentage10 = Number(document.getElementById("10per").value);
    const percentage12 = Number(document.getElementById("12per").value);

    const aadhaar_num = document.getElementById("aadhaar_num").value.trim();
    const abc = document.getElementById("abc");

    const religion = document.getElementById("religion");
    const dob = document.getElementById("dob");

    const bld_grp = document.getElementById("bloodgrp").value;
    const category = document.getElementById("category").value;
    const stream = document.getElementById("Stream").value;

    const gender_data = document.getElementById("gender").value;



    //--------------------------😊 (std , father, mother) name --------------------------------
    if (std_name.value.trim() === "") {
        alert("Enter student name...");
        std_name.focus();
        return;
    }
    if (f_name.value.trim() === "") {
        alert("Enter student's father's name...");
        f_name.focus();
        return;
    }
    if (m_name.value.trim() === "") {
        alert("Enter student's mother's name...");
        m_name.focus();
        return;
    }

    //-------------------------- 📅 DOB --------------------------------
    if (dob.value === "") {
        alert("Please select your Date of Birth.");
        dob.focus();
        return;
    }

    //-------------------------- ♾️ riligion --------------------------------
    if (religion.value.trim() === "") {
        alert("Enter your religion...");
        religion.focus();
        return;
    }

    //-------------------------- 📞 phone number --------------------------------
    if (!/^\d{10}$/.test(std_ph)) {
        alert("Invalid Student Phone");
        document.getElementById("std_ph").focus();
        return;
    }

    if (!/^\d{10}$/.test(parent_ph)) {
        alert("Invalid Parent Phone");
        document.getElementById("parent_ph").focus();
        return;
    }

    /*
        ^      → Start of the string
        \d     → A digit (0-9)
        {10}   → Exactly 10 digits
        $      → End of the string
    */

    //-------------------------- 📧 mail --------------------------------
    const emailPattern = /^[^\s@]+@gmail\.com$/;
    if (!emailPattern.test(std_mail)) {
        alert("Please enter a valid Gmail address.");
        document.getElementById("std_mail").focus();
        return;
    }

    //-------------------------- 🏡 address --------------------------------
    const p_village = document.getElementById("p_city");
    const c_village = document.getElementById("c_city");
    const p_dist = document.getElementById("p_dist");
    const c_dist = document.getElementById("c_dist");
    const p_street = document.getElementById("p_street");
    const c_street = document.getElementById("c_street");
    const p_country = document.getElementById("p_con");
    const c_country = document.getElementById("c_con");
    const p_state = document.getElementById("p_state");
    const c_state = document.getElementById("c_state");

    if ((p_village.value.trim() === "") || (c_village.value.trim() === "") ||
        (p_dist.value.trim() === "") || (c_dist.value.trim() === "") ||
        (p_street.value.trim() === "") || (c_street.value.trim() === "") ||
        (p_country.value.trim() === "") || (c_country.value.trim() === "") ||
        (p_state.value.trim() === "") || (c_state.value.trim() === "")
    ) {
        alert("Please fill the address section in valid way...");
        return;
    }

    //-------------------------- 📌  pin --------------------------------
    if (!/^\d{6}$/.test(p_pin) || !/^\d{6}$/.test(c_pin)) {
        alert("Please enter a valid 6-digit PIN.");
        return;
    }

    //-------------------------- 🔟 10th --------------------------------
    const sboard = document.getElementById("10board");
    const school = document.getElementById("10school");
    const sroll = document.getElementById("10roll");
    const pass10_year = document.getElementById("10passyear");
    const tot_10 = document.getElementById("10mark");

    if (sboard.value.trim() === "") {
        alert("Enter board name...");
        sboard.focus();
        return;
    }

    if (school.value.trim() === "") {
        alert("Enter school name...");
        school.focus();
        return;
    }

    if (sroll.value.trim() === "") {
        alert("Enter school roll number...");
        sroll.focus();
        return;
    }

    if (pass10_year.value.trim() === "") {
        alert("Enter school passing year...");
        pass10_year.focus();
        return;
    }

    if (tot_10.value.trim() === "") {
        alert("Enter school total mark...");
        tot_10.focus();
        return;
    }

    //-------------------------- 1️⃣2️⃣ 12th --------------------------------
    const cboard = document.getElementById("12board");
    const collage = document.getElementById("12collage");
    const croll = document.getElementById("12roll");
    const pass12_year = document.getElementById("12passyear");
    const tot_12 = document.getElementById("12mark");

    if (cboard.value.trim() === "") {
        alert("Enter board name...");
        cboard.focus();
        return;
    }

    if (collage.value.trim() === "") {
        alert("Enter collage name...");
        collage.focus();
        return;
    }

    if (croll.value.trim() === "") {
        alert("Enter collage roll number...");
        croll.focus();
        return;
    }

    if (pass12_year.value.trim() === "") {
        alert("Enter collage passing year...");
        pass12_year.focus();
        return;
    }

    if (tot_12.value.trim() === "") {
        alert("Enter collage total mark...");
        tot_12.focus();
        return;
    }

    //--------------------------💯  percentage --------------------------------
    if ((percentage10 < 0 || percentage10 > 100) || (percentage12 < 0 || percentage12 > 100)) {
        alert("Enter a valid persentage....");
        return;
    }

    //-------------------------- 🔢 aadhhar --------------------------------
    if (!/^\d{12}$/.test(aadhaar_num)) {
        alert("Please enter a valid Aadhaar Number...");
        document.getElementById("aadhaar_num").focus();
        return;
    }

    //--------------------------🔢 ABC --------------------------------
    if (abc.value.trim() === "") {
        alert("Please enter the ABC id.....");
        abc.focus();
        return;
    }

    //--------------------------🧬 gender --------------------------------
    // const gender = document.querySelector(
    //     'input[name="gender"]:checked'
    // );

    // if (gender === null) {
    //     alert("Please select your gender.");
    //     return;
    // }

    //--------------------------🖼️ photo --------------------------------
    const photo = document.getElementById("student_photo");
    const mark10pic = document.getElementById("marksheet10");
    const char10pic = document.getElementById("charactersheet10");

    const char12pic = document.getElementById("charactersheet12");
    const mark12pic = document.getElementById("marksheet12");

    const aadhharpic = document.getElementById("aadhaar_card");
    const std_sign_pic = document.getElementById("std_sign");

    if (photo.files.length === 0) {
        alert("Upload Student Photo");
        return;
    }

    if (mark10pic.files.length === 0) {
        alert("Upload 10th Marksheet");
        return;
    }

    if (char10pic.files.length === 0) {
        alert("Upload 10th Character Certificate");
        return;
    }
    if (mark12pic.files.length === 0) {
        alert("Upload 12th Marksheet");
        return;
    }

    if (char12pic.files.length === 0) {
        alert("Upload 12th Character Certificate");
        return;
    }

    if (aadhharpic.files.length === 0) {
        alert("Upload Aadhaar Card");
        return;
    }

    if (std_sign_pic.files.length === 0) {
        alert("Upload Student Signeture");
        return;
    }

    //--------------------------🔴 radio buttons --------------------------------
    const radioGroups = ["hostel", "transport"];
    for (const group of radioGroups) {
        if (!document.querySelector(`input[name="${group}"]:checked`)) {
            alert(`Please select ${group}.`);
            return;
        }
    }

    //--------------------------🔽 drop down --------------------------------
    const selects = document.querySelectorAll("#studentForm select");
    for (const select of selects) {
        if (select.value === "") {
            alert(`Please select ${select.id}.`);
            select.focus();
            return;
        }
    }

    //-------------------------- 📊 Data Base 📊 --------------------------------

    // Create Excel Data
    const data = [
        ["Student Name", "Father Name", "Mother Name", "Email", "D.O.B", "Gender", " Student Phone", " Parents Phone", " Student e-mail", " Blood Group",
            "Category", "Permanent Dist", "Current Dist", "Permanent PIN", "Current PIN", "Collage Name", "Collage Passing Year", "Total mark", "Stream", "Aadhaar Number", "ABC Number"
        ],
        [std_name.value.trim(), f_name.value.trim(), m_name.value.trim(), std_mail, dob.value, gender_data, std_ph, parent_ph, std_mail, bld_grp, category,
        p_dist.value.trim(), c_dist.value.trim(), p_pin, c_pin, collage.value.trim(), pass12_year.value.trim(), tot_12.value.trim(), stream, aadhaar_num, abc.value.trim()
        ]
    ];

    // Convert data to worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(data);

    // Create workbook
    const workbook = XLSX.utils.book_new();

    // Add worksheet
    XLSX.utils.book_append_sheet(workbook, worksheet, "Student");

    // Download Excel File
    XLSX.writeFile(workbook, `${std_name.value.trim()}_Details.xlsx`);


}
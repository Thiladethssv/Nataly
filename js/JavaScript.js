     function cancelAction() {
    history.back(); // ย้อนกลับไปยังหน้าที่ถูกเยี่ยมชมล่าสุด
    // คุณยังสามารถเพิ่มฟังก์ชันเพิ่มเติมที่ต้องการได้ที่นี่
        }

        
        function buyAction() {
            // ใช้ SweetAlert2 เพื่อแสดงการแจ้งเตือน
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                confirmButtonText: "OK"
            });
        }

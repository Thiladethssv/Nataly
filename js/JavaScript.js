     function cancelAction() {
    history.back(); 
        }

        
        function buyAction() {
           
            Swal.fire({
                title: " You have successfully purchased.!",
                text: "Thank you for using our service",
                icon: "success",
                confirmButtonText: "OK"
            });
        }

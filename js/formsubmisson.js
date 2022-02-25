$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbx2ugVliPiZlMdUayRfcmKRz6bmyIdIzHgA9PyHA56Jz7abI7CKSyzxZKzZdacpfKQ/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Enquiry send successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
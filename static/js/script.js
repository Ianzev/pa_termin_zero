const showButtons = document.querySelectorAll('.showModals');

showButtons.forEach(showModal =>{
    showModal.addEventListener('click', ()=>{
        var index = showModal.id
        console.log(index)
        var favDialog = document.getElementById('showRoles'+index)
        favDialog.showModal();
        var cancelBtn = document.getElementById('cancelBtn'+index)
        cancelBtn.addEventListener('click', () =>{
            favDialog.close();
        })
    })
})
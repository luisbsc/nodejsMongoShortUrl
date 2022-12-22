document.addEventListener('click', e => {
    // console.log(e.target.dataset.short)
    if (e.target.dataset.short) {
        const url =`http://localhost:5000/${e.target.dataset.short}`
        navigator.clipboard
            .writeText(url)
            .then(()=>{
                console.log("Text copied to clipboard...")
            })
            .catch((err)=>{
                console.log('Somethin went wrong', err)
            })
    }
})
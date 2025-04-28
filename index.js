// 
// 
// 


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_igoav08',
            'template_swjpstv',
            event.target,
            'uu0c1mBTLS6Fq_wOJ'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "This email service is temporarily unavailable. Please contact me directly on mariamwill01@aol.com"
            )
        })


}

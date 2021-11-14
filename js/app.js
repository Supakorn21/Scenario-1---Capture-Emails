
//เรียกแสดง document บนเว็บ
console.log(document)

window.onload = function(){
    let emailState = false;

    let emailModal = document.getElementsByClassName('email-modal') [0];

    let closeButton = document.getElementsByClassName('email-modal__close-btn')[0];

    let emailInput = document.getElementsByClassName('email-modal__input')[0];

    let emailButton = document.getElementsByClassName('email-modal__button')[0];

    let thankContainer = document.getElementsByClassName('email-thank') [0];

    let declineOffer = document.getElementsByClassName('email-modal__decline-offer')[0];

    // เมื่อเอาเมาส์ออกจากหน้า document จะทำให้ email modal ปรากฏ
    document.body.addEventListener('mouseleave',  () => {
        showModal();
    });
    
    // โชว์ email modal แค่ครั้งเดียวเท่านั้น ไม่ให้มันโชว์ซ้ำอีก
    let showModal = () => {
        if(emailState == false ){
            emailModal.classList.add('email-modal--visible');
            emailState = true
            }
    }
    // 

    // ปุ่มปิดสีแดง
    let closeModal = () => {
        emailModal.classList.remove('email-modal--visible');
    }
    // เมื่อคลิกปุ่มปิดสีแดง email modal จะหายไป
    closeButton.addEventListener('click', () => {
        closeModal();
    })

    // โขว์ error กับ error หายไปเมื่อพิมพ์ในช่อง input
    let addErrors = () => {
        document.getElementsByClassName('email-modal__form-group')[0].classList.add('email-modal__form-group--error');
        document.getElementsByClassName('email-modal__error-message')[0].classList.add('email-modal__error-message--active');
    }

    let removeErrors = () => {
        document.getElementsByClassName('email-modal__form-group')[0].classList.remove('email-modal__form-group--error');
        document.getElementsByClassName('email-modal__error-message')[0].classList.remove('email-modal__error-message--active');
    }

    // เมื่อคลิกที่ช่อง Input อีกรอบ error สีแดงจะหายไป
    emailInput.addEventListener('click', () => {
        removeErrors();
    })


    //เมื่อคลิก send จะเปลี่ยนหน้าเป็น Thank You
    let showThankMessage = () => {
        thankContainer.classList.add('email-thank--success');
        // ตั้งเวลาปิดอัตโนมัติประมาณ 3-4 วินาทีหลังจากเปลี่ยนหน้าเป็น Thank You
        setTimeout(() => {
            closeModal();
        }, 3000)
    }  

    // เมื่อคลิก Sorry, I'm not interested จะทำให้ email modal หายไป
    declineOffer.addEventListener('click', () => {
        closeModal();
    });

    //เช็คว่าสิ่งที่พิมพ์มาในช่องอีเมล มันใช่อีเมลหรือไม่ ถ้าไม่ใช่จะปรากฏข้อความแสดงว่า error
    function emailIsValid (email){
        return /\S+@\S+\.\S+/.test(email)
    }

    // คำสั่งกดปุ่ม send แล้วเกิดเหตุการ์ณต่างๆ
    emailButton.addEventListener('click', () => {
        if (emailIsValid(emailInput.value)) {
            showThankMessage();
        }else{
           addErrors();
        }
    });
    
    

}
    

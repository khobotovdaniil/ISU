function modals () {
    function bindModal (triggerSelector, modalSelector, closeSelector, packagesSelector, namesSelector) {
        const overlay = document.querySelector('.overlay'),
              trigger = document.querySelectorAll(triggerSelector),
              modal = overlay.querySelector(modalSelector),
              close = overlay.querySelectorAll(closeSelector),
              windows = document.querySelectorAll('[data-modal]');

        const closeModal = () => {
            windows.forEach(item => {
                item.style.display = "none";
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            overlay.style.display = "none";
        }

        const getPackageName = (item) => {
            const packageName = item.closest(packagesSelector).querySelector(namesSelector);
            // console.log(packageName.innerHTML);
            modal.querySelector('select[name="package"]').value = packageName.innerHTML;
        };

        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                document.body.style.overflow = "hidden";
                overlay.style.display = "block";

                windows.forEach(item => {
                    item.style.display = "none";
                });
    
                modal.style.display = "block";

                namesSelector && packagesSelector ? getPackageName(item) : null;
            });
        });

        close.forEach(item => {
            item.addEventListener('click', () => {
                closeModal();
            });
        })
        
        overlay.addEventListener('click', e => {    
            if (e.target === overlay) {
                closeModal();
            }
        });

        modal.addEventListener('click', e => {
            if (e.target.tagName === "A" || e.target.parentNode.tagName === "A") {
                closeModal();
            }
        });
    }

    bindModal('.hamburger', '.modal_menu', '.modal__close');
    bindModal('.button_contact', '.modal_contact', '.modal__close');
    bindModal('.button_book', '.modal_book', '.modal__close', '.prices__slide', '.prices__slide__header');
    bindModal('.button_book', '.modal_book', '.modal__close', '.group__class', '.group__class__header');
}

export default modals;
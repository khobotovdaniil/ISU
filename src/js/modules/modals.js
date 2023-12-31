function modals() {
    function bindModal(triggerSelector, modalSelector, closeSelector, packagesSelector, namesSelector, data) {
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
            const data = item.getAttribute('data-name') ? item.getAttribute('data-name') : '--Select Package--';
            modal.querySelector('select[name="package"]').value = data;
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
                data ? modal.querySelector('select[name="package"]').value = item.getAttribute('data-package') : null;
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
    bindModal('.button_promo', '.modal_book', '.modal__close', '', '', true);
}

export default modals;
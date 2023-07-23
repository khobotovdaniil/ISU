import IMask from 'imask';

function maskForForms () {
    const phoneMask = selector => {
        const elements = document.querySelectorAll(selector);
        const maskOptions = {
            mask: '+00000000000000',
            lazy: true
        } 
        
        elements.forEach(item => {
            const mask = new IMask(item, maskOptions);
    
            item.addEventListener('input', (item) => {
                item.value = mask.value;
            })
        });
    }

    const timeMask = selector => {
        const elements = document.querySelectorAll(selector);
        const maskOptions = {
            mask: 'Time: HH:MM (UTC #ZZ)',    
            lazy: false,
            blocks: {
                '#' : {
                    mask:/^-$|^\+$/
                },
                ZZ: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 99
                },
                HH: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 24
                },
                MM: {
                    mask: IMask.MaskedRange,
                    from: 0,
                    to: 59
                }
            }
        } 
        
        elements.forEach(item => {
            const mask = new IMask(item, maskOptions);
    
            item.addEventListener('input', (item) => {
                item.value = mask.value;
            })
        });
    }

    
    phoneMask('input[name="phone"]');
    timeMask('input[name="time"]')

}

export default maskForForms;
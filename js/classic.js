const refs = {
    controls: document.querySelector('#tabs-1 [data-controls]'),
    panes: document.querySelector('#tabs-1 [data-panes]'),    
};

refs.controls.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.nodeName !== 'A') {
        return;
    };
   
    const currentActiveControlItem = event.currentTarget.querySelector(
        '.controls__item--active');  
    
    if (currentActiveControlItem) {
        currentActiveControlItem.classList.remove('controls__item--active');

        const painId = getPaneId(currentActiveControlItem);
        const pane = getPainById(painId);
        pane.classList.remove('pane--active');
    };
    
    const controlItem = event.target;
    controlItem.classList.add('controls__item--active');

    const paneId = getPaneId(controlItem)
    const pane = getPainById(paneId)
    pane.classList.add('pane--active');
});

function getPaneId(control) {
    return control.getAttribute('href').slice(1);  
};

function getPainById(id) {
    return refs.panes.querySelector(`#${id}`);
};
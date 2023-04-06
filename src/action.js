//when i click on my button
const actionButton = document.getElementById('action-button');
if (actionButton) {
    actionButton.addEventListener('click', function () {
        execute()
    });
}
window.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded.')
    execute()
})
function execute () {
    showBlock('loading');
    chrome.tabs.executeScript({
        file: 'injector.js'
    });
    setTimeout(function () {
        showBlock('success');
        setTimeout(function () {
            showBlock('action');
        }, 3000);
    }, 1000);

}


function showBlock (id = "action") {

    const ids = ['success', 'action', 'loading']
    const results = ids.map($id => {
        const block = document.getElementById($id);
        const shown = id === $id
        const hidden = !shown
        if (!block) return { id: $id, exists: false, shown, hidden }
        block.style.display = shown ? 'block' : 'none';
        return { id, exists: true, shown, hidden };
    })

}

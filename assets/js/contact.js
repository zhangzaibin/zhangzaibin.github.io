(function () {
    'use strict';

    var dialog = document.getElementById('wechat-dialog');
    if (!dialog || typeof dialog.showModal !== 'function') {
        return;
    }

    document.querySelectorAll('[data-wechat-open]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                return;
            }
            event.preventDefault();
            dialog.showModal();
        });
    });

    dialog.addEventListener('click', function (event) {
        if (event.target !== dialog) {
            return;
        }
        var bounds = dialog.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right ||
                event.clientY < bounds.top || event.clientY > bounds.bottom) {
            dialog.close();
        }
    });
}());

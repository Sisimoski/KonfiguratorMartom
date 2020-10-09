$('.section-dropdown-btn').on('shown.bs.collapse', function () {
    $(this).closest('h2').addClass('changeColor');
});
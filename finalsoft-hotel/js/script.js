
/////// execute code when page loads
document.addEventListener("DOMContentLoaded", function(){
    // ... then some code

    //for demo purpose download link
    var body_el = document.querySelector("body");
    var top_bar = document.createElement("div");
    top_bar.setAttribute('style', 'text-align:center; z-index:100; position: fixed; bottom:0px; right:0px;');
    body_el.classList.add("position-relative");
    top_bar.innerHTML = '<a href="https://templatemount.gumroad.com/l/bootstrap-ecommerce" class="btn btn-dark border-white w-100 text-center rounded-0"">Download theme</a>'
    body_el.prepend(top_bar);
    // end for demo 

}); 
// end DOMContentLoaded 

/////// Enable tooltip of Bootstrap5
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/////// Prevent closing from click inside dropdown
document.querySelectorAll('.dropdown-menu').forEach(function(element){
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
});
// end querySelectorAll



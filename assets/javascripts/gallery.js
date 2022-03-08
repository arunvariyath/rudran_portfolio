(function () {
    "use strict";
    generateContent();

})();

function generateContent () {

    let galleryImages = [{
        imageSrc: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        imageTitle: 'some image',
        imageDescription: 'some description'
    }]



    let rowDiv = $("<div>").addClass("row");
    $.each(galleryImages, function (index) {
        let div = $("<div>").addClass("col-lg-3 col-md-12 mb-4 mb-lg-0 item position-relative");
        let a = $("<a>").attr("href", "#!").attr("data-bs-toggle", "modal").attr("data-bs-target", "#Image" + index) //TODO
        let img = $("<img>").attr("src", this.imageSrc).addClass("img-fluid image w-100 shadow-1-strong rounded mb-4");
        div.append(a.append(img));
        rowDiv.append(div);

        let modalDiv = $("<div>").attr("id", "Image" + index).attr("tabindex", "1").attr("aria-labelledby", "Image" + index + "Label").attr("aria-hidden", "true").addClass("modal fade");

        let innerDiv = $("<div>").addClass("modal-dialog modal-lg");
        let modalContentDiv = $("<div>").addClass("modal-content");
        let imgModalContent = $("<img>").attr("src", this.imageSrc).addClass("img-fluid image shadow-1-strong rounded");

        let descrSpan = $("<span>").attr("style", "width: 100%;").addClass("badge bg-secondary text-center").append(this.imageDescription);//TODO
        let buttonDiv = $("<div>").addClass("text-center py-3");
        let button = $("<button>").attr("type", "button").attr("data-bs-dismiss", "modal").addClass("btn btn-secondary");
        modalDiv.append(innerDiv.append(modalContentDiv.append(imgModalContent).append(descrSpan).append(buttonDiv.append(button))))
        rowDiv.append(modalDiv);

    });






    // you haven't touched the DOM yet, everything thus far has been in memory
    $("#toReplace").html(rowDiv); // this is the only time you touch the DOM
}
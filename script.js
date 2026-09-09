const message = document.getElementById("message");
const charCount = document.getElementById("charCount");


const maxLength = message.maxLength;

message.addEventListener("input", function () {
    const currentLength = message.value.length;

    charCount.textContent = `${currentLength}/${maxLength}`;

    if (currentLength >= maxLength) {
        charCount.style.color = "red";
    } else{
        charCount.style.color = "#777";
    }

    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";


    if (this.scrollHeight > 200) {
        this.style.height = "200px";
        this.style.overflowY = "auto";
    } else {
        this.style.overflowY = "hidden";
    }


})



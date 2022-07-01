const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
popupTitle = popupBox.querySelector("header p"),
closeIcon = popupBox.querySelector("header i"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const messages = JSON.parse(localStorage.getItem("messages") || "[]");
let isUpdate = false, updateId;

addBox.addEventListener("click", () => {
    popupTitle.innerText = "Add a new messeges";
    addBtn.innerText = "Add Messages";
    popupBox.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
});

closeIcon.addEventListener("click", () => {
    isUpdate = false;
    descTag.value = "";
    popupBox.classList.remove("show");
    document.querySelector("body").style.overflow = "auto";
});

function showNotes() {
    if(!messages) return;
    document.querySelectorAll(".note").forEach(li => li.remove());
    messages.forEach((note, id) => {
        let filterDesc = note.description.replaceAll("\n", '<br/>');
        let liTag = `<li class="note">
                        <div class="details">
                            <span>${filterDesc}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${note.date}</span>
                            <div class="settings">
                                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="menu">
                                    <li onclick="popUp(${id})"><i class="uil uil-arrow-up"></i>Up</li>
                                    <li onclick="updateNote(${id}, '${filterDesc}')"><i class="uil uil-pen"></i>Edit</li>
                                    <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>Delete</li>
                                </ul>
                            </div>
                        </div>
                    </li>`;
        addBox.insertAdjacentHTML("afterend", liTag);
    });
}
showNotes();

function showMenu(elem) {
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != elem) {
            elem.parentElement.classList.remove("show");
        }
    });
}


function deleteNote(noteId) {
    let confirmDel = confirm("Are you sure you want to delete this Messges?");
    if(!confirmDel) return;
    messages.splice(noteId, 1);
    localStorage.setItem("messages", JSON.stringify(messages));
    showNotes();
}

function updateNote(noteId, filterDesc) {
    let description = filterDesc.replaceAll('<br/>', '\r\n');
    updateId = noteId;
    isUpdate = true;
    addBox.click();
    descTag.value = description;
    addBtn.innerText = "Update Message";
}

addBtn.addEventListener("click", e => {
    e.preventDefault();
    description = descTag.value.trim();
    if(description) {
        let currentDate = new Date(),
        month = months[currentDate.getMonth()],
        day = currentDate.getDate(),
        year = currentDate.getFullYear();

        let noteInfo = {description, date: `${month} ${day}, ${year}`}
        if(!isUpdate) {
            messages.push(noteInfo);
        } else {
            isUpdate = false;
            messages[updateId] = noteInfo;
        }
        localStorage.setItem("messages", JSON.stringify(messages));
        showNotes();
        closeIcon.click();
    }
});
const cardList = [
    {
        title: "Cyber Security",
        image: "images/Blog-2024-Cybersecurity-Tools.png",
        link: "About cyber security",
        description: "What is a Cyber Surity?"
    },
    {
        title: "Type of cyber Security",
        image: "images/pngtree-cybersecurity-concept-png-image_14870175.png",
        link: "About Type of cyber Security",
        description: "Type of cyber Security"
    }
];

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!");
};

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    
    console.log("Form Data Submitted: ", formData);
};

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = `
            <div class="col s4 center-align">
                <div class="card medium">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${item.image}">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">
                            ${item.title}
                            <i class="material-icons right">more_vert</i>
                        </span>
                        <p><a href="#">${item.link}</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${item.title}
                            <i class="material-icons right">close</i>
                        </span>
                        <p>${item.description}</p>
                    </div>
                </div>
            </div>
        `;
        $("#card-section").append(itemToAppend);
    });
};

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    });
    addCards(cardList);
    $('.modal').modal();
});

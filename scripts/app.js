const teacherData = [{
        JayantiDansana: "https://www.google.com",
        manasRanjan: "https://www.google.com",
        SanklapNayak: "https://www.google.com",
    },
    {
        AjayAnand: "https://www.google.com",
        BishwajitSahoo: "https://www.google.com",
        HimanshuDas: "https://www.google.com",
    },
    {
        ManjushaPandey: "https://www.google.com",
        PrachetBhuyan: "https://www.google.com",
        PrashantKumar: "https://www.google.com",
    },
    {
        AdyashaDash: "https://www.google.com",
        ChittaranjanPradhan: "https://www.google.com",
        SamareshMishra: "https://www.google.com",
    },
    {
        Ganaraj: "https://www.google.com",
        ManjushaBehera: "https://www.google.com",
        SubharakantaBehera: "https://www.google.com",
    },
    {
        PratyusaMukherjee: "https://www.google.com",
        Najma: "https://www.google.com",
        RajdeepChatterjee: "https://www.google.com",
    },
    {
        HURRAY_NO_CLASS : "https://www.pornhub.com"
    }
];

function generateTeacherList(teacherNumber) {
    let trNamesHTML = "";
    const x = teacherData[teacherNumber];
    for (let teacher in x) {
        trNamesHTML = trNamesHTML + `<li class="popList"><a href="${x[teacher]}">${teacher}</a>${teacher}</li>`;
    }
    // console.log(trNamesHTML);
    return trNamesHTML;
}


const launchers = document.querySelectorAll(".launcher");

// ORDER:: CN DAA SE DBMS ITC CRYCI NAN
for (let launcher of launchers) {
    let nameOfClass = launcher.id;
    let teacherIndex = 0;

    if (nameOfClass == "cn")
        teacherIndex = 0;
    else if (nameOfClass == "daa")
        teacherIndex = 1;
    else if (nameOfClass == "se")
        teacherIndex = 2;
    else if (nameOfClass == "dbms")
        teacherIndex = 3;
    else if (nameOfClass == "itc")
        teacherIndex = 4;
    else if (nameOfClass == "cryci")
        teacherIndex = 5;
    else if (nameOfClass == "nan")
    teacherIndex = 6;
    
    
    // console.log(launcher);
    launcher.addEventListener('click', function (e) {
        closeAllPopups();

        launcher.innerHTML = `
        <div class="popup btn">ATTENDING
        
                <span class="popuptext show">${teacherIndex}
                <button class="popupCloser btn" >close</button>
                 <br><br>
                    <ul class="popListContainer">
                        ${generateTeacherList(`${teacherIndex}`)}                       
                    </ul>
                    
                </span>
        </div>
    `;

        const pCs = document.querySelector('.popupCloser');
        pCs.addEventListener('click', function (e) {
            closeAllPopups();
            e.stopPropagation();
        })
    })
}



function closeAllPopups() {
    const allPopups = document.querySelectorAll(".popuptext");
    for (let popup of allPopups) {
        // popup.classList.remove("show");
        popup.remove();
    }

}


// ++++++++++++++++++++++++++++++++++++++++++++++++
// FUTURE IMPLEMENTATIONS


// const popListItems = document.querySelectorAll(".popList");

// for (let item of popListItems) {
//     item.addEventListener('click', function () {
//         console.log("clicked");

//     });
// }

// const row = document.querySelectorAll('tbody tr');
// console.log(row[0]);
// row[0].classList.toggle('highlight');

// ORDER:: CN DAA SE DBMS ITC CRYCI
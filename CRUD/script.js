let institutions = [];
let editIndex = -1;

const form = document.getElementById('institutionForm');
const institutionTable = document.getElementById('institutionTable').getElementsByTagName('tbody')[0];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const institutionName = document.getElementById('institutionName').value;
    const institutionEmail = document.getElementById('institutionEmail').value;
    const institutionType = document.getElementById('institutionType').value;

    if (editIndex === -1) {
        const institution = {
            id: institutions.length + 1,
            name: institutionName,
            email: institutionEmail,
            type: institutionType
        };
        institutions.push(institution);
    } else {
        institutions[editIndex].name = institutionName;
        institutions[editIndex].email = institutionEmail;
        institutions[editIndex].type = institutionType;
        editIndex = -1;
    }

    form.reset();
    renderTable();
});

function renderTable() {
    institutionTable.innerHTML = '';
    institutions.forEach((institution, index) => {
        const row = institutionTable.insertRow();
        row.insertCell(0).innerText = institution.id;
        row.insertCell(1).innerText = institution.name;
        row.insertCell(2).innerText = institution.email;
        row.insertCell(3).innerText = institution.type;
        const actions = row.insertCell(4);
        actions.innerHTML = `
            <div class="actions">
                <button class="edit" onclick="editInstitution(${index})">Editar</button>
                <button class="delete" onclick="deleteInstitution(${index})">Excluir</button>
            </div>
        `;
    });
}

function editInstitution(index) {
    const institution = institutions[index];
    document.getElementById('institutionName').value = institution.name;
    document.getElementById('institutionEmail').value = institution.email;
    document.getElementById('institutionType').value = institution.type;
    editIndex = index;
}

function deleteInstitution(index) {
    institutions.splice(index, 1);
    renderTable();
}
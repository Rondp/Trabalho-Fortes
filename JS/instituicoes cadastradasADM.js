document.addEventListener("DOMContentLoaded", () => {
    const filterInput = document.getElementById('filterInput');
    const table = document.querySelector('table tbody');

    filterInput.addEventListener('input', () => {
        const filterValue = filterInput.value.toLowerCase();
        const rows = table.querySelectorAll('tr');
        
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(filterValue));
            row.style.display = match ? '' : 'none';
        });
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        const rows = table.querySelectorAll('tr');

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(searchValue));
            row.style.display = match ? '' : 'none';
        });
    });
});
function printPage() {
    window.print();
}
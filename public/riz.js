document.addEventListener('DOMContentLoaded', () => {
    fetch('/data/riz')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#riz-table tbody');
            data.forEach(row => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><img class="avatar" src="path_to_avatars/${row.avatar}" alt="Avatar"></td>
                    <td>${row.name}</td>
                    <td>${row.firstname}</td>
                    <td>${row.rice_quantity} kg</td>
                    <td>${row.localite}</td>
                    <td>${row.contact}</td>
                `;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

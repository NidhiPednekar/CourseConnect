function searchColleges() {
    const query = document.getElementById('searchBar').value;

    if (!query) {
        alert('Please enter a college name or course name.');
        return;
    }

    fetch(`/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.style.display = 'block';  // Show the results div
            resultsDiv.innerHTML = '';

            if (data.length === 0) {
                resultsDiv.innerHTML = '<p>No colleges found.</p>';
            } else {
                const uniqueColleges = new Set();
                data.forEach(college => {
                    if (!uniqueColleges.has(college.CName)) {
                        uniqueColleges.add(college.CName);
                        resultsDiv.innerHTML += `<div class="college">
                            <h3>${college.CName}</h3>
                            <p>${college.Addr}</p>
                            <p>${college.Contact}</p>
                        </div>`;
                    }
                });
            }
        });
}

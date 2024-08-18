// Function to fetch data from API and handle the response
function fetchData(apiUrl) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the data to the console
            Swal.fire({
                title: 'API Fetch Complete',
                text: 'Check the console for the response data.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        })
        .catch(error => {
            console.error('Error fetching the API:', error);
            Swal.fire({
                title: 'API Fetch Failed',
                text: 'Something went wrong. Check the console for more details.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
}

// Add event listeners to the buttons
document.getElementById('button1').addEventListener('click', () => {
    fetchData('https://script.google.com/macros/s/AKfycbyN-fjtDhtj6IX5BtwgnRXX2NumaCjSmFqcS6ctFSEZFnbp3VYJNTozI5-txzEJEL0/exec');
});

document.getElementById('button2').addEventListener('click', () => {
    fetchData('https://script.google.com/macros/s/AKfycbxAI-0Xi5Rpk_PhkZSzCwZk8iedh3nL8fy6-FN2G5IQmwfy8GQS9pJoq2V4BupS5WUm/exec');
});

document.getElementById('button3').addEventListener('click', () => {
    fetchData('https://script.google.com/macros/s/AKfycbxhqtUmAWdRfi4FXP-PgI5qLX8wqWFrJV_UsAzbvE98gOaGLPFvgn0hGwSY3ahNLLzsfg/exec');
});

const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

function sendRegistration() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Basic validation
        if (!name || !email) {
            alert('Please fill in all fields.');
            return;
        }
        alert("Sending..")
        // Prepare data to send
        const data = {
            name: name,
            email: email
        };

        // Send data to Formspree
        fetch('https://formspree.io/f/xanyygeb', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you for registering! We will be in touch shortly.');
                // Optionally, clear the inputs
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
            } else {
                alert('There was a problem with your submission. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error. Please try again later.');
        });
}
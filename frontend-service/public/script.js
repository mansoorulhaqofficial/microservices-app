document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Add click handlers for demo purposes
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const service = this.closest('.service-card').querySelector('h3').textContent;
            console.log(`Accessing ${service} API...`);
            
            // In a real app, you would fetch data here
            // fetch(`http://${service.toLowerCase()}.postifycreative.com/${service.toLowerCase()}`)
            //   .then(response => response.json())
            //   .then(data => console.log(data));
        });
    });
    
    // Display VPS info
    const vpsInfo = {
        ip: '65.109.51.132',
        domain: 'postifycreative.com',
        services: ['User Service', 'Product Service', 'Frontend']
    };
    
    console.log('Microservices Application Loaded');
    console.log('VPS Information:', vpsInfo);
});

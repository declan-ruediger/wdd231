const params = new URLSearchParams(window.location.search);

const outputBox = document.getElementById("form-output");

outputBox.innerHTML = `
    <table>
        <tbody>
            <tr>
                <td>First Name</td><td>${params.get('first_name')}</td>
            </tr>
            <tr>    
                <td>Last Name</td><td>${params.get('last_name')}</td>
            </tr>
            <tr>    
                <td>Email Address</td><td>${params.get('email_address')}</td>
            </tr>
            <tr>    
                <td>Phone</td><td>${params.get('mobile_phone_number')}</td>
            </tr>
            <tr>    
                <td>Business Name</td><td>${params.get('business_name')}</td>
            </tr>
            <tr>    
                <td>Membership Level</td><td>${params.get('membership_level').toUpperCase()}</td>                
            </tr>
        </tbody>
    </table>
`;
let cartCount = 0;
        let cartItems = [];

        function addToCart(productName) {
            cartCount++;
            cartItems.push(productName);
            document.getElementById('cart-count').textContent = cartCount;
            alert(productName + " has been added to your cart!");
        }

        function viewCart() {
            const cartModal = document.getElementById('cart-modal');
            const cartItemsList = document.getElementById('cart-items');
            cartItemsList.innerHTML = ''; // Clear previous items
            cartItems.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                cartItemsList.appendChild(listItem);
            });
            cartModal.style.display = 'block';
        }

        function closeCart() {
            document.getElementById('cart-modal').style.display = 'none';
        }

        function proceedToPayment() {
            alert("Proceeding to payment...");
            // Add payment logic here
        }

        function submitForm(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            alert(`Thank you, ${name}! Your message has been sent.`);
        }

        function toggleAccountMenu() {
            const menu = document.getElementById('account-menu');
            menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        }

        function login() {
            const accountInfo = document.getElementById('account-info');
            accountInfo.textContent = 'Logged in as: User123'; // Replace with actual user info
            document.querySelector('#account-menu button').style.display = 'none';
        }
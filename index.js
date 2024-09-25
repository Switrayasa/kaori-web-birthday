const pages = document.querySelectorAll('.page');
        const popupNext = document.getElementById('popupNext');
        const backgroundMusic = document.getElementById('backgroundMusic'); 
        let currentPageIndex = 0;
        let isPlaying = false;

        // Halaman login
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'kaori' && password === 'pacargusta') {
                pages[currentPageIndex].classList.remove('active');
                currentPageIndex++;
                pages[currentPageIndex].classList.add('active');
                popupNext.classList.add('active');
                popupBack.classList.add('active');
            } else {
                alert('Username atau password salah');
            }
        });

        // Button next
        popupNext.addEventListener('click', function() {
            if (currentPageIndex < pages.length - 1) {
                pages[currentPageIndex].classList.remove('active');
                currentPageIndex++;
                pages[currentPageIndex].classList.add('active');
                updateNavigation();
            }
        });

        // Button back
        popupBack.addEventListener('click', function() {
            if (currentPageIndex > 1) {
                pages[currentPageIndex].classList.remove('active');
                currentPageIndex--;
                pages[currentPageIndex].classList.add('active');
                updateNavigation();
            }
        });

        // Music click
        document.addEventListener('click', function() {
            document.getElementById('backgroundMusic').play();
        });

         // Halaman galeri
        const galleryImages = document.querySelectorAll('.gallery img');
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modalImage');
        const closeModal = document.getElementById('closeModal');

        galleryImages.forEach(image => {
            image.addEventListener('click', function() {
                modal.style.display = 'flex';
                modalImage.src = this.src;
            });
        });

        // Close button click
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Click moda1
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
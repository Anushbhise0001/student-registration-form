function closeWindow() {
    window.close(); // This attempts to close the current window or tab
}

function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function() {
        const img = document.getElementById('uploadedImage');
        img.src = reader.result;
        img.style.display = 'block';
    }
    
    if (file) {
        reader.readAsDataURL(file);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const firstMenu = document.getElementById('first-menu');
    const secondMenu = document.getElementById('second-menu');
    const thirdMenu = document.getElementById('third-menu');

    firstMenu.addEventListener('change', function() {
        const selectedValue = firstMenu.value;

        if (selectedValue === 'option1') {
            // Activate second menu and deactivate third menu
            secondMenu.disabled = false;
            thirdMenu.disabled = true;
        } else if (selectedValue === 'option2') {
            // Activate third menu and deactivate second menu
            secondMenu.disabled = true;
            thirdMenu.disabled = false;
        } else {
            // If no valid option is selected, deactivate both menus
            secondMenu.disabled = true;
            thirdMenu.disabled = true;
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menuContent = document.querySelector('.menu-content');
    const subMenuBtns = document.querySelectorAll('.sub-menu-btn');

    // Toggle the visibility of the main menu content
    menuBtn.addEventListener('click', () => {
        menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
    });

    // Toggle the visibility of the sub-menu content
    subMenuBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            const subMenuContent = btn.nextElementSibling;
            subMenuContent.style.display = subMenuContent.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Close the menu if clicking outside
    document.addEventListener('click', (event) => {
        if (!menuContent.contains(event.target) && !menuBtn.contains(event.target)) {
            menuContent.style.display = 'none';
            subMenuBtns.forEach(btn => {
                const subMenuContent = btn.nextElementSibling;
                subMenuContent.style.display = 'none';
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const toggleSubDropdown = document.querySelector('.toggle-sub-dropdown');
    const subDropdownContent = toggleSubDropdown.querySelector('.sub-dropdown-content');

    // Toggle the visibility of the main dropdown content
    dropdownBtn.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Toggle the visibility of the sub-dropdown content
    toggleSubDropdown.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event from closing the dropdown
        subDropdownContent.style.display = subDropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if clicking outside
    document.addEventListener('click', (event) => {
        if (!dropdownContent.contains(event.target) && !dropdownBtn.contains(event.target)) {
            dropdownContent.style.display = 'none';
            subDropdownContent.style.display = 'none';
        }
    });
});



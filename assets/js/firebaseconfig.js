
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results'); // Reference new container

    function highlightMatches(searchText) {
        // Clear previous highlights (if any)
        searchResults.innerHTML = ''; // Reset results container

        // Get all text nodes within the main content area (adjust selector as needed)
        const textNodes = document.querySelectorAll('body p, body h1, body h2, body h3');

        for (const textNode of textNodes) {
            const textContent = textNode.textContent;
            const escapedSearchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters in the search text
            const regex = new RegExp(`(${escapedSearchText})`, 'gi');
            const newText = textContent.replace(regex, '<span style="background-color: yellow;">$1</span>');
            textNode.innerHTML = newText;
        }
    }

    searchInput.addEventListener('input', function(event) {
        const searchText = this.value;
        highlightMatches(searchText);
    });


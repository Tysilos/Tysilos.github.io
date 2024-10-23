// Add a click event listener to each dropdown item
document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", function () {
        // Get the selected filter type (from data-category or data-institution attribute)
        const filterType = this.getAttribute("data-category") || this.getAttribute("data-institution")
        // Select all certificate images on the page
        const certificates = document.querySelectorAll(".certificateImage")

        // Loop through each certificate image and control its visibility
        certificates.forEach(certificate => {
            // Initially show all certificates
            certificate.style.display = "block"

            // If a filter is selected and the certificate does not match the filter type, hide it
            if (filterType !== "all" && !certificate.matches(`[data-category="${filterType}"], [data-institution="${filterType}"]`)) {
                certificate.style.display = "none"
            }
        })
    })
})
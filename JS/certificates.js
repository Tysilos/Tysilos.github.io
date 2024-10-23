document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", function () {
        const filterType = this.getAttribute("data-category") || this.getAttribute("data-institution")
        const certificates = document.querySelectorAll(".certificateImage")

        certificates.forEach(certificate => {
            certificate.style.display = "block"

            if (filterType !== "all" && !certificate.matches(`[data-category="${filterType}"], [data-institution="${filterType}"]`)) {
                certificate.style.display = "none"
            }
        })
    })
})
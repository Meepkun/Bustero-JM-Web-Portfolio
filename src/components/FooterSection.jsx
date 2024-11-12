function FooterSection() {
    return (
        <>
        <div class="site-footer">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top custom-navbar">
                <p class="col-md-4 mb-0 text-body-secondary text-color">© 2024 John Michael Bustero</p>

                <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                </a>

                <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item"><a href="#home" class="nav-link px-2 text-body-secondary text-color">Home</a></li>
                </ul>
            </footer>
            </div>
        </>
    );
}

export default FooterSection
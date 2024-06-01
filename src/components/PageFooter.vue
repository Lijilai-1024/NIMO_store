<template>
    <div class="footer-wrapper">
        <footer>
            <div>
                <h3>NIMO Store</h3>
                <span class="copyright">© 2017-2024 Powered by NIMOdev.</span>
            </div>
            <nav>
                <h4>Links</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
    width: 100%;
    background-color: #1e293b;
    color: #f8fafc;
}

footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;
    max-width: 1440px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 20px;
    }

    h3 {
        font-size: 24px;
    }

    .copyright {
        font-size: 12px;
    }

    nav {
        h4 {
            display: none;

            @media screen and (max-width: 768px) {
                display: block;
                font-size: 24px;
                font-weight: bold;
            }
        }

        ul {
            display: flex;
            font-size: 20px;
            gap: 20px;

            &:hover {
                cursor: pointer;
            }

            @media screen and (max-width: 768px) {
                flex-direction: column;
                gap: 0;
            }
        }
    }
}
</style>
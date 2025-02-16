<template>
    <span data-meta-row-node="0" class="nav-bg-container nav-link-left">
        <a :href="$router.resolve({ path: '/' }).href">
            <button class="home-btn mobile-home-btn body-small" data-selected="true">
                <span class="background"></span>
                <span class="remote-logo">C</span>
            </button>
        </a>
    </span>

</template>
<style>
.nav-link-left {
    position: relative;
    height: auto;
    display: block;
    padding: 2px;
}

.nav-link-left>[data-meta-row-node] {
    position: initial !important;
    margin-right: 4px;
}

.home-btn.body-small {
    font-size: 14px;
    letter-spacing: 0em;
    line-height: 1.4;
    font-weight: 400;
    z-index: 5;
}

.home-btn {
    --button-height: 44px;
    position: relative;
    height: var(--button-height);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: var(--button-height);
    cursor: pointer;
    display: grid;
    width: auto;
}

.home-btn.mobile-home-btn {
    --button-height: 2.56em;
}

.home-btn .background {
    position: absolute;
    inset: 1px;
    background-color: var(--menu-button-background-hover-color, var(--color));
    transform: scale(0);
    border-radius: var(--button-height);
    pointer-events: none;
}

.home-btn[data-selected="true"] .background {
    transform: scale(1);
    opacity: 0.05;
}

.home-btn[data-selected="true"] .background {
    opacity: 1;
}

.home-btn .remote-logo {
    position: relative;
    width: auto;
    height: 100%;
    font-family: "Bossa";
    font-size: 25px;
    padding: 1px 11px;
    color: var(--background-color);
}
</style>

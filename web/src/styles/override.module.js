// Hide the Mattermost name, icon, and free label tag from the login page
document.addEventListener('DOMContentLoaded', () => {
for (const el of document.querySelectorAll('.header-logo-link > .freeBadge')) {
    el.parentNode.style.display = 'none';
}

// Hide the leftover menu divider that was above the warning
for (const el of document.querySelectorAll('li.menu-divider + #startTrial')) {
    el.previousElementSibling.style.display = 'none';
}

// Hide the free trial banner/upgrade card in the admin console license page
for (const el of document.querySelectorAll('.admin-console__banner_section .AlertBanner.info.AlertBanner--sys')) {
    const bannerSection = el.closest('.admin-console__banner_section');
    if (bannerSection) {
        bannerSection.style.display = 'none';
    }
}

// Hide the TeamEditionRightPanel card in the right panel of the admin console license page
for (const el of document.querySelectorAll('.right-panel > .panel-card + .compare-plans-text')) {
    const rightPanel = el.closest('.right-panel');
    if (rightPanel) {
        rightPanel.style.display = 'none';
    }
}

// Hide any upgrade dialogs that pop up
for (const el of document.querySelectorAll('div[role="dialog"] > #StartTrialFormModal')) {
    const dialog = el.closest('div[role="dialog"]');
    if (dialog) {
        dialog.style.display = 'none';
    }
}
});

// Hide the Mattermost name, icon, and free label tag from the login page
document.querySelectorAll('.header-logo-link > .freeBadge').forEach(el => el.parentNode.style.display = 'none');

// Hide the leftover menu divider that was above the warning
document.querySelectorAll('li.menu-divider + #startTrial').forEach(el => el.previousElementSibling.style.display = 'none');

// Hide the free trial banner/upgrade card in the admin console license page
document.querySelectorAll('.admin-console__banner_section .AlertBanner.info.AlertBanner--sys').forEach(el => el.closest('.admin-console__banner_section').style.display = 'none');

// Hide the TeamEditionRightPanel card in the right panel of the admin console license page
document.querySelectorAll('.right-panel > .panel-card + .compare-plans-text').forEach(el => el.closest('.right-panel').style.display = 'none');

// Hide any upgrade dialogs that pop up
document.querySelectorAll('div[role="dialog"] > #StartTrialFormModal').forEach(el => el.closest('div[role="dialog"]').style.display = 'none');

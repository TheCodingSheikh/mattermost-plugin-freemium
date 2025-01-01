// Hide the Mattermost name, icon, and free label tag from the home page
document.querySelectorAll('[class^="ProductBrandingTeamEditionContainer"]').forEach(el => el.style.display = 'none');

// Hide the Mattermost name, icon, and free label tag from the login page
document.querySelectorAll('.header-logo-link > .freeBadge').forEach(el => el.parentNode.style.display = 'none');

// Hide the team edition warning in the bottom of the open top-left corner menu
document.getElementById('startTrial')?.style.display = 'none';

// Hide the leftover menu divider that was above the warning
document.querySelectorAll('li.menu-divider + #startTrial').forEach(el => el.previousElementSibling.style.display = 'none');

// Hide the free trial banner/upgrade card in the admin console license page
document.querySelectorAll('.admin-console__banner_section .AlertBanner.info.AlertBanner--sys').forEach(el => el.closest('.admin-console__banner_section').style.display = 'none');

// Hide the TeamEditionRightPanel card in the right panel of the admin console license page
document.querySelectorAll('.right-panel > .panel-card + .compare-plans-text').forEach(el => el.closest('.right-panel').style.display = 'none');

// Hide any upgrade dialogs that pop up
document.querySelectorAll('div[role="dialog"] > #StartTrialFormModal').forEach(el => el.closest('div[role="dialog"]').style.display = 'none');

// Hide the footer notice text
document.querySelectorAll('.footer-copyright').forEach(el => el.style.display = 'none');

// Hide the feedback button in the board plugin page
document.querySelectorAll('.BoardComponent .top-head .TopBar').forEach(el => el.style.display = 'none');

// Fixes for the boards plugin page
document.querySelectorAll('.CalendarContainer').forEach(el => {
    el.style.width = '100%';
    el.style.height = '100%';
    el.style.marginRight = '0';
    el.style.marginBottom = '0';
    el.style.paddingBottom = '10px';
    el.style.paddingRight = '80px';
});

// Other styles and adjustments...
document.querySelectorAll('.ShareBoardButton .Button.size--medium').forEach(el => {
    el.style.padding = '0 10px';
    el.style.height = '30px';
});
document.querySelectorAll('.ViewTitle .add-buttons').forEach(el => el.style.marginTop = '5px');
document.querySelectorAll('.focalboard-body .DateRange .Modal').forEach(el => el.style.left = '-240px');

// Add mobile fixes with media query simulation
const applyMediaQueries = () => {
    const width = window.innerWidth;

    if (width <= 768) {
        document.querySelectorAll('.BoardComponent .top-head .mid-head').forEach(el => {
            el.style.marginTop = '80px';
            el.style.flexWrap = 'wrap';
            el.style.gap = '15px';
        });
        // Additional mobile styles...
    }

    if (width <= 430) {
        document.querySelectorAll('.Menu.noselect').forEach(el => {
            el.style.width = '100vw';
            el.style.maxWidth = '100vw';
            el.style.minHeight = '100vh';
            el.style.backgroundColor = 'var(--center-channel-bg)';
            el.style.padding = '40px';
            el.style.display = 'flex';
        });
        // More adjustments for smaller screens...
    }
};

// Attach event listeners for responsive styles
window.addEventListener('resize', applyMediaQueries);
applyMediaQueries(); // Run on initial load
// Continue adding styles for elements based on their selectors...

// Mobile fixes for boards plugin page
const applyMobileFixes = () => {
    const width = window.innerWidth;

    if (width <= 768) {
        document.querySelectorAll('.focalboard-body .ViewTitle > .add-buttons .Button').forEach(el => {
            el.style.display = 'flex';
        });

        document.querySelectorAll('.mid-head').forEach(el => {
            el.style.marginLeft = '6px';
        });

        document.querySelectorAll('.fc-toolbar-title').forEach(el => {
            el.style.textAlign = 'center';
        });

        document.querySelectorAll('.fc-header-toolbar .fc-toolbar-chunk:nth-of-type(3)').forEach(el => {
            el.style.justifyContent = 'center';
            el.style.alignItems = 'center';
            el.style.display = 'flex';
            el.style.flexDirection = 'row';
            el.style.flexWrap = 'wrap';
        });

        document.querySelectorAll('.fc-dayGridWeek-button').forEach(el => {
            el.style.marginLeft = '12px';
        });

        document.querySelectorAll('.CalendarContainer').forEach(el => {
            el.style.paddingRight = '20px';
        });

        document.querySelectorAll('.d-flex.justify-content-between.tabs-inputs').forEach(el => {
            el.style.flexWrap = 'wrap';
            el.style.gap = '15px';
        });

        document.querySelectorAll('.focalboard-body .ShareBoardDialog .tabs-content .tabs-inputs .input-container').forEach(el => {
            el.style.width = '100%';
        });

        document.querySelectorAll('.WorkspaceTitle').forEach(el => {
            el.style.marginBottom = '15px';
        });

        document.querySelectorAll('.octo-sidebar-header.show-button:hover').forEach(el => {
            el.style.backgroundColor = 'var(--center-channel-bg)';
        });
    }

    if (width <= 975) {
        document.querySelectorAll('.dialog:has(.CardDetail)').forEach(el => {
            el.style.borderRadius = '0';
        });
    }

    if (width <= 430) {
        document.querySelectorAll('.Menu.noselect').forEach(el => {
            el.style.width = '100vw';
            el.style.maxWidth = '100vw';
            el.style.minHeight = '100vh';
            el.style.backgroundColor = 'var(--center-channel-bg)';
            el.style.padding = '40px';
            el.style.display = 'flex';
        });

        document.querySelectorAll('.focalboard-body .DateRange .Modal').forEach(el => {
            el.style.position = 'fixed';
            el.style.overflow = 'scroll';
            el.style.margin = '40px';
            el.style.left = '0';
        });

        document.querySelectorAll('.CardDetail').forEach(el => {
            el.style.overflowX = 'scroll';
        });

        document.querySelectorAll('.focalboard-body .SubMenuOption .SubMenu.Menu.noselect.bottom').forEach(el => {
            el.style.backgroundColor = 'var(--center-channel-bg)';
        });

        document.querySelectorAll('.menu-option.menu-cancel').forEach(el => {
            el.style.justifyContent = 'center';
            el.style.borderRadius = '5px';
        });

        document.querySelectorAll('.Menu.noselect .menu-contents').forEach(el => {
            el.style.justifyContent = 'center';
        });

        document.querySelectorAll('.MenuOption').forEach(el => {
            el.style.borderRadius = '5px';
        });

        document.querySelectorAll('.ModalWrapper .Modal.bottom').forEach(el => {
            el.style.top = '0';
            el.style.maxWidth = '100vw';
        });

        document.querySelectorAll('.Modal.bottom .toolbar').forEach(el => {
            el.style.visibility = 'hidden';
        });

        document.querySelectorAll('.FilterComponent').forEach(el => {
            el.style.paddingRight = '30px';
            el.style.maxWidth = '100%';
        });

        document.querySelectorAll('.SwitchOption .Switch').forEach(el => {
            el.style.marginLeft = '10px';
        });

        document.querySelectorAll('.dialog .toolbar').forEach(el => {
            el.style.paddingLeft = '0px';
        });

        document.querySelectorAll('.cardFollowBtn').forEach(el => {
            el.style.padding = '0 10px';
        });

        document.querySelectorAll('.BoardSwitcherDialog .toolbar').forEach(el => {
            el.style.width = '100%';
            el.style.paddingLeft = '20px';
        });

        document.querySelectorAll('.BoardSwitcherDialog .dialog').forEach(el => {
            el.style.width = '80%';
        });

        document.querySelectorAll('.BoardSwitcherDialog .noResults').forEach(el => {
            el.style.visibility = 'hidden';
        });

        document.querySelectorAll('.BoardSwitcherDialog .dialog-subtitle').forEach(el => {
            el.style.display = 'none';
        });
    }
};

// Attach resize event listener for dynamic responsiveness
window.addEventListener('resize', applyMobileFixes);
applyMobileFixes(); // Apply fixes on initial load

// Any remaining static rules can be added similarly...

import sidebarHeaderTitleLogo from '../assets/images/do_it_right_meow_logo.png';

class ManageDOM {
    constructor() {
        this.mainContent = document.getElementById('content');
        this.preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        this.sidebarHeaderTitleText = 'Do It Right Meow';
        this.sidebarHeaderTitleLogo = sidebarHeaderTitleLogo;

        // Lisen for theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            const newTheme = e.matches ? 'dark' : 'light';
            console.log("Theme change detected!");
            this.setTheme(newTheme);
        });

        this.settings = {
            theme: ['dark', 'light'],
            language: ['English', 'Spanish', 'French'],
            notifications: ['On', 'Off']
        };
    }

    // Initialize app
    initialize() {
        this.setTheme(this.preferredTheme);
        this.createSidebar();
        this.sidebarEventListeners();
        this.createMainPage();
    }

    // Method that creates the section of the page that is not the sidebar
    createMainPage() {
        const mainPage = document.createElement('div');
        mainPage.id = 'main-page';
        this.mainContent.appendChild(mainPage);
    }

    setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            console.log("Dark theme set!");
        } else if (theme === 'light') {
            document.body.classList.remove('dark-theme');
            console.log("Light theme set!");
        } else {
            console.log('Invalid theme');
        }
    }

    createSidebar() {
        const sidebar = document.createElement('div');
        sidebar.id = 'sidebar';

        // Create sidebar header
        const sidebarHeader = document.createElement('div');
        sidebarHeader.id = 'sidebar-header';
        sidebar.appendChild(sidebarHeader);

        // // Create sidebar header title
        // const sidebarHeaderTitle = document.createElement('h1');
        // sidebarHeaderTitle.id = 'sidebar-header-title';
        // sidebarHeaderTitle.textContent = this.sidebarHeaderTitleText;
        // sidebarHeader.appendChild(sidebarHeaderTitle);

        // Create sidebar header logo
        const sidebarHeaderLogo = document.createElement('img');
        sidebarHeaderLogo.id = 'sidebar-header-logo';
        sidebarHeaderLogo.src = this.sidebarHeaderTitleLogo;
        sidebarHeaderLogo.alt = 'Do It Right Meow Logo';
        sidebarHeader.appendChild(sidebarHeaderLogo);

        // Create sidebar nav links
        const sidebarNav = document.createElement('nav');   
        sidebarNav.id = 'sidebar-nav';
        sidebar.appendChild(sidebarNav);

        // Create sidebar nav links list
        const sidebarNavList = document.createElement('ul');
        sidebarNavList.id = 'sidebar-nav-list';
        sidebarNav.appendChild(sidebarNavList);

        // Create sidebar nav links list items
        const sidebarNavListItems = [
            {
                text: 'New List',
                // action: this.redrawDOM.bind(this, 'home')
            },
            {
                text: 'Edit Lists',
                // action: this.redrawDOM.bind(this, 'about')
            },
            {
                text: 'Settings',
                // action: this.redrawDOM.bind(this, 'contact')
            }
        ];

        sidebarNavListItems.forEach(item => {
            const listItem = document.createElement('li');
            const listItemButton = document.createElement('button');
            listItemButton.classList.add('sidebar-nav-list-item');
            listItemButton.textContent = item.text;
            // listItemButton.addEventListener('click', item.action);
            listItem.appendChild(listItemButton);
            sidebarNavList.appendChild(listItem);
        });

        // Create sidebar footer
        const sidebarFooter = document.createElement('div');
        sidebarFooter.id = 'sidebar-footer';
        sidebar.appendChild(sidebarFooter);

        // Create sidebar footer text
        const sidebarFooterText = document.createElement('p');
        sidebarFooterText.id = 'sidebar-footer-text';
        sidebarFooterText.textContent = '© 2024 Do It Right Meow';
        sidebarFooter.appendChild(sidebarFooterText);

        // Add sidebar to DOM
        this.mainContent.appendChild(sidebar);
    }

    createListPage(listTitle) {
        // Creates the default page for a new list
        console.log("Creating list page");

        // Create list page
        const listPage = document.createElement('div');
        listPage.id = 'list-page';

        // Create list page header
        const listPageHeader = document.createElement('div');
        listPageHeader.id = 'list-page-header';
        listPage.appendChild(listPageHeader);

        // Create list page header title
        const listPageHeaderTitle = document.createElement('h1');
        listPageHeaderTitle.id = 'list-page-header-title';
        listPageHeaderTitle.textContent = listTitle;
        listPageHeader.appendChild(listPageHeaderTitle);

        // Create list page header buttons
        const listPageHeaderButtons = document.createElement('div');
        listPageHeaderButtons.id = 'list-page-header-buttons';
        listPageHeader.appendChild(listPageHeaderButtons);

        // Create list page header buttons list
        const listPageHeaderButtonsList = document.createElement('ul');
        listPageHeaderButtonsList.id = 'list-page-header-buttons-list';
        listPageHeaderButtons.appendChild(listPageHeaderButtonsList);

        const mainPage = document.getElementById('main-page');
        mainPage.appendChild(listPage);
    }

    createSettingsPage() {
        // Check if the settings page already exists
        let settingsPage = document.getElementById('settings-page');
        if (settingsPage) {
            return; // Exit the function to avoid creating a duplicate settings page
        }
    
        // Since the settings page doesn't exist, create it as usual
        settingsPage = document.createElement('div');
        settingsPage.id = 'settings-page';
    
        const settingsPageHeading = document.createElement('h1');
        settingsPageHeading.textContent = 'Settings';
        settingsPageHeading.id = 'settings-page-heading';
    
        const settingsPageContent = document.createElement('div');
        settingsPageContent.id = 'settings-page-content';
        settingsPageContent.appendChild(settingsPageHeading);
    
        // Append the heading to the settingsPageContent first
        settingsPageContent.appendChild(settingsPageHeading);
    
        const settingsContainer = document.createElement('div');
        settingsContainer.id = 'settings-container';
    
        for (const key in this.settings) {
            const settingItem = document.createElement('div');
            settingItem.classList.add('setting-item');
    
            const settingLabel = document.createElement('label');
            settingLabel.textContent = key;
            settingItem.appendChild(settingLabel);
    
            const settingSelect = document.createElement('select');
            settingSelect.id = key;
    
            this.settings[key].forEach(value => {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = value;
                settingSelect.appendChild(option);
            });
    
            settingItem.appendChild(settingSelect);
            settingsContainer.appendChild(settingItem);
        }
    
        // Now append settingsContainer to settingsPageContent instead of document.body
        settingsPageContent.appendChild(settingsContainer);
    
        const btnCloseSettingsPage = document.createElement('button');
        btnCloseSettingsPage.textContent = 'Close';
        btnCloseSettingsPage.id = 'btn-close-settings-page';
        settingsPageContent.appendChild(btnCloseSettingsPage);
    
        // Event listeners remain unchanged
        btnCloseSettingsPage.addEventListener('click', this.closeSettingsPage);
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                this.closeSettingsPage();
            }
        });
    
        // Append settingsPageContent to settingsPage at the end
        settingsPage.appendChild(settingsPageContent);
    
        // Finally, append settingsPage to a parent container, 
        // assuming 'main-page' is the intended parent element.
        const mainPage = document.getElementById('main-page');
        mainPage.appendChild(settingsPage);
    }

    closeSettingsPage() {
        const settingsPage = document.getElementById('settings-page');
        if (settingsPage) {
            settingsPage.remove(); // This removes the settings page, which should also remove all its child elements
            console.log("Settings page closed");
        }
    }

    sidebarEventListeners() {
        // Add event listeners to sidebar buttons
        const sidebarButtons = document.querySelectorAll('.sidebar-nav-list-item');

        sidebarButtons.forEach(button => {
            button.addEventListener('click', e => {
                console.log(e.target.textContent);
                if (e.target.textContent === 'New List') {
                    this.newListDialog();
                } else if (e.target.textContent === 'Edit Lists') {
                    console.log("Edit lists");
                } else if (e.target.textContent === 'Settings') {
                    this.createSettingsPage();
                } else {
                    console.log("Invalid button");
                }
            });
        });
    }

    newListDialog() {
        // Creates a dialog box to create a new list
        const newListDialog = document.createElement('dialog');
        newListDialog.id = 'new-list-dialog';
        newListDialog.classList.add('dialog');

        const newListDialogHeading = document.createElement('h1');
        newListDialogHeading.id = 'new-list-dialog-heading';
        newListDialogHeading.textContent = 'Add New List';
        newListDialog.appendChild(newListDialogHeading);

        const newListDialogForm = document.createElement('form');
        newListDialogForm.id = 'new-list-dialog-form';
        newListDialog.appendChild(newListDialogForm);

        const newListDialogFormLabel = document.createElement('label');
        newListDialogFormLabel.for = 'new-list-dialog-form-input';
        newListDialogFormLabel.textContent = 'List Name';
        newListDialogForm.appendChild(newListDialogFormLabel);

        const newListDialogFormInput = document.createElement('input');
        newListDialogFormInput.id = 'new-list-dialog-form-input';
        newListDialogFormInput.type = 'text';
        newListDialogFormInput.name = 'new-list-dialog-form-input';
        newListDialogFormInput.required = true;
        newListDialogForm.appendChild(newListDialogFormInput);

        const newListDialogFormButtons = document.createElement('div');
        newListDialogFormButtons.id = 'new-list-dialog-form-buttons';
        newListDialogForm.appendChild(newListDialogFormButtons);

        const newListDialogFormSubmitButton = document.createElement('button');
        newListDialogFormSubmitButton.id = 'new-list-dialog-form-submit-button';
        newListDialogFormSubmitButton.classList.add('button');
        newListDialogFormSubmitButton.textContent = 'Add List';
        newListDialogFormButtons.appendChild(newListDialogFormSubmitButton);

        const newListDialogFormCancelButton = document.createElement('button');
        newListDialogFormCancelButton.id = 'new-list-dialog-form-cancel-button';
        newListDialogFormCancelButton.classList.add('button');
        newListDialogFormCancelButton.textContent = 'Cancel';
        newListDialogFormButtons.appendChild(newListDialogFormCancelButton);

        document.body.appendChild(newListDialog);

        newListDialog.showModal();

        newListDialogFormCancelButton.addEventListener('click', () => {
            newListDialog.close();
            newListDialog.remove();
        });

        newListDialogFormSubmitButton.addEventListener('click', () => {
            newListDialog.close();
            newListDialog.remove();
            this.createListPage(newListDialogFormInput.value);
        });
    }

}

export default ManageDOM;
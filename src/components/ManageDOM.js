class ManageDOM {
    constructor() {
        this.mainContent = document.getElementById('content');
        this.preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        // Lisen for theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            const newTheme = e.matches ? 'dark' : 'light';
            this.setTheme(newTheme);
        });
    }


    setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else if (theme === 'light') {
            document.body.classList.remove('dark-theme');
        } else {
            console.log('Invalid theme');
        }
    }

}
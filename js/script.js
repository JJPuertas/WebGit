document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('git-tip-button');
    const tips = [
        'Tip: Use "git status" frequently to keep track of your changes!',
        'Tip: Use "git log" to view the commit history!',
        'Tip: Use "git diff" to see changes between commits!',
        'Tip: Use "git branch" to list all branches!',
        'Tip: Use "git checkout -b [branch-name]" to create and switch to a new branch!'
    ];

    if (button) {
        button.addEventListener('click', function() {
            let randomTip = tips[Math.floor(Math.random() * tips.length)];
            alert(randomTip);
        });
    } else {
        console.error('Button with ID "git-tip-button" not found.');
    }
});
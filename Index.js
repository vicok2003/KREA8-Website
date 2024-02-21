document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.flow-btns button');
    const paragraphs = [document.getElementById('para1'), document.getElementById('para2'), document.getElementById('para3')];

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Hide all paragraphs
            paragraphs.forEach(p => p.style.display = 'none');
            
            // Show the targeted paragraph
            const targetId = this.getAttribute('data-target');
            const targetPara = document.getElementById(targetId);
            if (targetPara) {
                targetPara.style.display = 'block';
            }
            
            // Update active button state
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

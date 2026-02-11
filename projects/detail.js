const urlParams = new URLSearchParams(window.location.search);
const projectFolder = urlParams.get('project');
const projectTitle = urlParams.get('title') || 'Project Details';
const projectPath = `smallprojects/${encodeURIComponent(projectFolder)}`;

// Update Header
// If title is passed in URL, use it, otherwise try to pretty print the folder name
document.getElementById('projectTitle').innerText = projectTitle;
document.getElementById('projectDesc').innerText = `Viewing source for ${projectFolder}`;
document.getElementById('demoBtn').href = `${projectPath}/index.html`;

// State to hold code
const codeContent = {
    html: 'Loading...',
    css: '/* Loading... */',
    js: '// Loading...'
};

const codeViewer = document.getElementById('codeViewer');
const readmeContent = document.getElementById('readmeContent');

// Fetch Files
async function fetchProjectFiles() {
    // Check for file protocol
    if (window.location.protocol === 'file:') {
        const warning = '<div style="color: #ffaa00; padding: 1rem; border: 1px solid #ffaa00; border-radius: 8px; background: rgba(255, 170, 0, 0.1);"><strong>Warning:</strong> You are opening this file directly. Browsers block fetching local files (CORS). Please use a local server (e.g., Live Server in VS Code) to view the code and README.</div>';
        readmeContent.innerHTML = warning;
        codeViewer.value = '// Cannot fetch code via file:// protocol.\n// Please use a local server.';
        return;
    }

    try {
        console.log(`Fetching files for: ${projectFolder} at path: ${projectPath}`);

        // Helper to fetch text safely
        const fetchText = async (filename) => {
            const url = `${projectPath}/${filename}`;
            console.log(`Requesting: ${url}`);
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Status ${res.status}`);
            return await res.text();
        };

        const [htmlRes, cssRes, jsRes, readmeRes] = await Promise.allSettled([
            fetchText('index.html'),
            fetchText('style.css'),
            fetchText('script.js'),
            fetchText('README.md')
        ]);

        // HTML
        if (htmlRes.status === 'fulfilled') {
            codeContent.html = htmlRes.value;
        } else {
            console.warn('HTML fetch failed:', htmlRes.reason);
            codeContent.html = '<!-- index.html not found -->';
        }

        // CSS
        if (cssRes.status === 'fulfilled') {
            codeContent.css = cssRes.value;
        } else {
            codeContent.css = '/* style.css not found or inline styles used */';
        }

        // JS
        if (jsRes.status === 'fulfilled') {
            codeContent.js = jsRes.value;
        } else {
            codeContent.js = '// script.js not found or inline scripts used';
        }

        // README
        if (readmeRes.status === 'fulfilled') {
            const markdown = readmeRes.value;
            if (typeof marked !== 'undefined') {
                readmeContent.innerHTML = marked.parse(markdown);
            } else {
                readmeContent.innerHTML = '<p>Error: Markdown parser not loaded.</p><pre>' + markdown + '</pre>';
            }
        } else {
            console.warn('README fetch failed:', readmeRes.reason);
            readmeContent.innerHTML = `<p>No README.md found or could not be loaded.</p><small style="color:red">${readmeRes.reason}</small>`;
        }

        // Default view
        showTab('html');

    } catch (error) {
        console.error('Error in fetchProjectFiles:', error);
        readmeContent.innerHTML = `<p>Error loading project files: ${error.message}</p>`;
    }
}

function showTab(type) {
    // Update content
    if (codeContent[type]) {
        codeViewer.value = codeContent[type];
    }

    // Update active tab logic - find button by text content or other attribute
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === type.toLowerCase()) {
            btn.classList.add('active');
        }
    });
}

// Initialize
// Fix for the initial active tab
document.querySelector('.tab-btn.active').click();
fetchProjectFiles();

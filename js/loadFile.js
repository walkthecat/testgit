let jsfiles = ['es6-Class.js'];
let sel = document.getElementById('jsexp');
let btn = document.getElementById('btnExecute')
for (let file of jsfiles) {
    let opt = document.createElement('option');
    opt.value = file;
    opt.text = file;
    sel.appendChild(opt);
}

sel.addEventListener('change', (e) => {
    console.log(e);
}, false);
btn.addEventListener('click', () => {
    loadScript('js/' + sel.value);
}, false)

// 动态加载js脚本文件
function loadScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
}
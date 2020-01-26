function LoginRedirect() {
    var username = document.getElementById('InputLoginUsername').value;
    var password = document.getElementById('InputLoginPassword').value;



    if (name === '' || password === '') {
        alert('账号或密码不能为空!!')
    } else if (name === 'admin' && password === 'admin') {
        alert('登陆成功');
        window.location.href = '../role/admin.html'
    } else if (name === 'manu' && password === 'manu') {
        alert('登陆成功');
        window.location.href = '../role/manu.html'
    } else {
        alert('账号或密码错误!!')
    }
}